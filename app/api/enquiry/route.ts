import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Lead enquiry endpoint.
 *
 * INTEGRATION SEAM — wire your providers here:
 *  - Email notifications (SMTP / Resend / SendGrid / Brevo) to the sales inbox.
 *  - WhatsApp message notification (WhatsApp Business Cloud API / a WhatsApp
 *    gateway) when a new lead arrives.
 *  - CRM push (HubSpot / Zoho / Pipedrive) for the "Property of Interest" and
 *    "Preferred Contact Method" fields.
 *  - CAPTCHA / rate limiting before forwarding to providers.
 *
 * Out of the box this endpoint validates the payload and acknowledges the
 * enquiry so the frontend success state works without external credentials.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const email = String(body?.email ?? "").trim();

    if (!name || !phone || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const payload = {
      name,
      phone,
      email,
      property: String(body?.property ?? ""),
      method: String(body?.method ?? ""),
      message: String(body?.message ?? ""),
      intent: String(body?.intent ?? ""),
      receivedAt: new Date().toISOString(),
      source: req.headers.get("referer") ?? "",
    };

    // ---- Integrations ----------------------------------------------------
    // 1) Email:   e.g. await sendEmailNotification(payload)
    // 2) CRM:     e.g. await pushToCrm(payload)
    // 3) WhatsApp:e.g. await sendWhatsapp(payload)
    // ----------------------------------------------------------------------
    if (process.env.NODE_ENV === "development") {
      console.log("[enquiry]", JSON.stringify(payload, null, 2));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] failed", err);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 500 });
  }
}
