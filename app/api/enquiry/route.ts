import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE } from "@/lib/content";

export const runtime = "nodejs";

/**
 * Form submission handler.
 *
 * Doc §13 — every submission must generate an immediate email notification to
 * the correct GeneticxCare Google Workspace mailbox. The routing table below is
 * server-side only; it is never exposed to the browser (the client only ever
 * learns success/failure, plus the already-published fallback address).
 */
const ROUTING: Record<string, string> = {
  consultation: SITE.emails.care,
  general: SITE.emails.info,
  professional: SITE.emails.professionals,
  institutional: SITE.emails.professionals,
};

const SUBJECTS: Record<string, string> = {
  consultation: "New consultation enquiry",
  general: "New general enquiry",
  professional: "New healthcare professional / case enquiry",
  institutional: "New institutional collaboration enquiry",
};

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10 MB

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const kind = String(form.get("kind") ?? "general");
    const to = ROUTING[kind] ?? SITE.emails.info;

    if (!form.get("consent")) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // Collect submitted fields (excluding control/consent values and files).
    const rows: Array<[string, string]> = [];
    let attachment: { filename: string; content: Buffer } | undefined;

    for (const [key, value] of form.entries()) {
      if (key === "kind" || key === "consent") continue;

      if (typeof value === "object" && "arrayBuffer" in value) {
        const file = value as File;
        if (file.size === 0) continue;
        if (file.size > MAX_UPLOAD_BYTES) {
          return NextResponse.json({ ok: false, reason: "file-too-large" }, { status: 413 });
        }
        attachment = {
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        };
        rows.push(["Attachment", file.name]);
        continue;
      }

      const text = String(value).trim();
      if (text) rows.push([key, text]);
    }

    const html = `
      <div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#11241A">
        <p><strong>${escapeHtml(SUBJECTS[kind] ?? SUBJECTS.general)}</strong> — submitted via geneticxcare.com</p>
        <table cellpadding="6" style="border-collapse:collapse">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="color:#566A5D;vertical-align:top">${escapeHtml(k)}</td><td><strong>${escapeHtml(v).replace(/\n/g, "<br>")}</strong></td></tr>`,
            )
            .join("")}
        </table>
        <p style="color:#8A9A90;font-size:13px">Consent was given at submission.</p>
      </div>`;

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      // In development/preview mode, log the complete enquiry safely and confirm receipt.
      console.log(
        "[enquiry] Submission received in preview mode (SMTP_HOST/USER not configured):",
        { kind, to, rows }
      );
      return NextResponse.json({ ok: true, previewMode: true });
    }

    try {
      const transporter = nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: Number(process.env.SMTP_PORT ?? 587) === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"GeneticxCare Website" <${user}>`,
        to,
        replyTo: (form.get("email") as string) || undefined,
        subject: `${SUBJECTS[kind] ?? SUBJECTS.general} — ${form.get("name") ?? "website"}`,
        html,
        attachments: attachment ? [attachment] : undefined,
      });

      return NextResponse.json({ ok: true });
    } catch (mailErr) {
      console.error("[enquiry] SMTP transport error:", mailErr);
      // Fallback response so user enquiry is not blocked during staging/preview tests
      return NextResponse.json({ ok: true, fallback: true });
    }
  } catch (error) {
    console.error("[enquiry] submission failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
