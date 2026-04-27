import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_EMAIL = "masadraza110@gmail.com";
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    let body: Partial<ContactPayload>;
    try {
      body = (await request.json()) as Partial<ContactPayload>;
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input exceeds allowed length." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #0b0b0f; padding: 32px; color: #e5e7eb;">
        <div style="max-width: 560px; margin: 0 auto; background: #111118; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px;">
          <h2 style="margin: 0 0 8px; font-size: 18px; color: #ffffff;">New Portfolio Message</h2>
          <p style="margin: 0 0 24px; font-size: 13px; color: #9ca3af;">You received a new message from your portfolio contact form.</p>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #9ca3af; width: 90px;">Name</td>
              <td style="padding: 8px 0; color: #ffffff;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Email</td>
              <td style="padding: 8px 0; color: #ffffff;">
                <a href="mailto:${safeEmail}" style="color: #a78bfa; text-decoration: none;">${safeEmail}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08);">
            <p style="margin: 0 0 10px; font-size: 13px; color: #9ca3af;">Message</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e5e7eb;">${safeMessage}</p>
          </div>
        </div>
        <p style="text-align: center; margin-top: 16px; font-size: 11px; color: #6b7280;">Sent via asad-portfolio</p>
      </div>
    `;

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      html,
      text: `New message from ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
