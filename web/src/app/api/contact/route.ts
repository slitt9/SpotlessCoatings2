import nodemailer from "nodemailer";

export const runtime = "nodejs";

const FALLBACK_TO_EMAIL = "Spotlesscoatings1@gmail.com";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  message?: unknown;
  company?: unknown;
};

function normalizeField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = normalizeField(payload.name);
  const email = normalizeField(payload.email);
  const phone = normalizeField(payload.phone);
  const projectType = normalizeField(payload.projectType);
  const message = normalizeField(payload.message);
  const company = normalizeField(payload.company);

  if (company) {
    return Response.json({ ok: true });
  }

  if (name.length < 2) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (phone.length < 7) {
    return Response.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  if (message.length < 10) {
    return Response.json(
      { error: "Please share a few project details before sending." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.SMTP_FROM_EMAIL ?? smtpUser ?? FALLBACK_TO_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? FALLBACK_TO_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return Response.json(
      { error: "Contact form email is not configured yet." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `Spotless quote request from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Type: ${projectType || "Not specified"}`,
      "",
      "Project Details:",
      message,
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin:0 0 16px">New Spotless Coatings quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(projectType || "Not specified")}</p>
        <p><strong>Project Details:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `,
  });

  return Response.json({ ok: true });
}
