"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { CONSENT_TEXT } from "@/lib/content";

export type Field =
  | { name: string; label: string; type: "text" | "tel" | "email"; required?: boolean; autoComplete?: string }
  | { name: string; label: string; type: "select"; options: readonly string[]; required?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean; hint?: string }
  | { name: string; label: string; type: "file"; hint?: string }
  | { name: string; label: string; type: "radio"; options: readonly string[]; required?: boolean };

export type FormKind = "general" | "consultation" | "professional" | "institutional";

const inputBase =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint focus:border-forest-500 focus:outline-none";

export default function EnquiryForm({
  kind,
  fields,
  submitLabel = "Submit Enquiry",
  note,
  fallbackEmail,
}: {
  kind: FormKind;
  fields: readonly Field[];
  submitLabel?: string;
  note?: string;
  fallbackEmail: string;
}) {
  const uid = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const fid = (name: string) => `${uid}-${name}`;
  const eid = (name: string) => `${uid}-${name}-error`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // ---- validation (accessible: errors are linked via aria-describedby) ----
    const next: Record<string, string> = {};
    for (const f of fields) {
      if (!("required" in f) || !f.required) continue;
      const v = String(data.get(f.name) ?? "").trim();
      if (!v) {
        next[f.name] =
          f.type === "select"
            ? "Please select an option."
            : f.type === "radio"
              ? "Please choose an option."
              : `Please enter your ${f.label.toLowerCase()}.`;
      }
      else if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
        next[f.name] = "Enter a valid email address.";
      else if (f.type === "tel" && v.replace(/\D/g, "").length < 7)
        next[f.name] = "Enter a valid mobile number.";
    }
    if (!data.get("consent")) {
      next.consent = "Please provide consent so we can respond to your enquiry.";
    }

    setErrors(next);
    if (Object.keys(next).length) {
      // Move focus to the first field in error.
      const first = Object.keys(next)[0];
      document.getElementById(fid(first))?.focus();
      return;
    }

    setStatus("sending");
    try {
      data.append("kind", kind);
      const res = await fetch("/api/enquiry", { method: "POST", body: data });
      if (!res.ok) throw new Error("submit failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  /* ---------------- success state ---------------- */
  if (status === "ok") {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-card)] border border-forest-200 bg-forest-50 p-8"
      >
        <h3 className="text-[20px] text-forest-900">Enquiry received</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          Thank you. Your enquiry has been received by GeneticxCare. We will
          review the information provided and contact you regarding the
          appropriate next step.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-outline mt-6"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => {
          const isWide = f.type === "textarea" || f.type === "radio" || f.type === "file";
          const err = errors[f.name];
          const required = "required" in f && f.required;

          return (
            <div key={f.name} className={isWide ? "sm:col-span-2" : ""}>
              <label
                htmlFor={fid(f.name)}
                className="mb-1.5 block font-display text-[14px] font-semibold text-forest-900"
              >
                {f.label}
                {required && (
                  <span aria-hidden="true" className="text-gold-600">
                    {" "}
                    *
                  </span>
                )}
                {required && <span className="sr-only"> (required)</span>}
              </label>

              {f.type === "textarea" && (
                <textarea
                  id={fid(f.name)}
                  name={f.name}
                  rows={5}
                  aria-invalid={!!err}
                  aria-describedby={err ? eid(f.name) : undefined}
                  className={`${inputBase} resize-y`}
                />
              )}

              {f.type === "select" && (
                <select
                  id={fid(f.name)}
                  name={f.name}
                  defaultValue=""
                  aria-invalid={!!err}
                  aria-describedby={err ? eid(f.name) : undefined}
                  className={inputBase}
                >
                  <option value="" disabled>
                    Please select…
                  </option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              )}

              {f.type === "radio" && (
                <fieldset id={fid(f.name)} className="flex flex-wrap gap-2">
                  <legend className="sr-only">{f.label}</legend>
                  {f.options.map((o) => (
                    <label
                      key={o}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-[14px] text-ink-soft has-[:checked]:border-forest-500 has-[:checked]:bg-forest-50 has-[:checked]:text-forest-900"
                    >
                      <input type="radio" name={f.name} value={o} className="accent-forest-700" />
                      {o}
                    </label>
                  ))}
                </fieldset>
              )}

              {f.type === "file" && (
                <input
                  id={fid(f.name)}
                  name={f.name}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="w-full rounded-xl border border-dashed border-line bg-forest-50 px-4 py-3 text-[14px] text-ink-soft file:mr-3 file:rounded-full file:border-0 file:bg-forest-800 file:px-4 file:py-2 file:text-[13px] file:font-semibold file:text-white"
                />
              )}

              {(f.type === "text" || f.type === "tel" || f.type === "email") && (
                <input
                  id={fid(f.name)}
                  name={f.name}
                  type={f.type}
                  autoComplete={"autoComplete" in f ? f.autoComplete : undefined}
                  aria-invalid={!!err}
                  aria-describedby={err ? eid(f.name) : undefined}
                  className={inputBase}
                />
              )}

              {"hint" in f && f.hint && (
                <p className="mt-1.5 text-[13px] text-ink-faint">{f.hint}</p>
              )}

              {err && (
                <p id={eid(f.name)} role="alert" className="mt-1.5 text-[13px] font-medium text-[#B3261E]">
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {note && (
        <p className="mt-6 rounded-xl bg-forest-50 px-4 py-3 text-[13.5px] leading-relaxed text-ink-soft">
          {note}
        </p>
      )}

      {/* Consent — must NOT be pre-selected (doc §13). */}
      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            id={fid("consent")}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? eid("consent") : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-forest-700"
          />
          <span className="text-[14px] leading-relaxed text-ink-soft">
            {CONSENT_TEXT.replace("Privacy Policy.", "")}
            <Link href="/privacy-policy" className="text-forest-700 underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id={eid("consent")} role="alert" className="mt-1.5 text-[13px] font-medium text-[#B3261E]">
            {errors.consent}
          </p>
        )}
      </div>

      <button type="submit" disabled={status === "sending"} className="btn btn-gold mt-7 w-full sm:w-auto">
        {status === "sending" ? "Sending…" : submitLabel}
        {status !== "sending" && <span aria-hidden="true">→</span>}
      </button>

      {/* Failure state — offers the appropriate alternative address (doc §13). */}
      {status === "error" && (
        <p role="alert" className="mt-5 rounded-xl border border-[#E7C3BF] bg-[#FDF3F2] px-4 py-3 text-[14px] leading-relaxed text-[#8C2F26]">
          Your enquiry could not be submitted. Please try again, or email us
          directly at{" "}
          <a href={`mailto:${fallbackEmail}`} className="font-semibold underline">
            {fallbackEmail}
          </a>
          .
        </p>
      )}
    </form>
  );
}
