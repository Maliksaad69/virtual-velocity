import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  designation?: string;
  budget?: string;
  hearAbout?: string;
  message?: string;
  services?: string[];
  website?: string; // Honeypot field
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // 1. Honeypot check: If the hidden 'website' field is filled, silently drop spam
    if (body.website && body.website.trim().length > 0) {
      console.warn("[Contact API] Bot honeypot triggered from IP/UserAgent.");
      return NextResponse.json(
        { success: true, message: "Inquiry received successfully." },
        { status: 200 }
      );
    }

    const {
      name,
      email,
      phone,
      company,
      designation,
      budget,
      hearAbout,
      message,
      services,
    } = body;

    // 2. Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const cleanedPhone = (phone || "").replace(/\D/g, "");
    if (cleanedPhone.length < 7) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    const selectedServices = Array.isArray(services) && services.length > 0
      ? services
      : ["General Growth & Strategy"];

    // 3. Log inquiry details to server stdout (accessible in Vercel / Docker logs)
    console.log("==========================================");
    console.log("[Contact API] New Inbound Client Inquiry:");
    console.log(`Name:        ${name.trim()}`);
    console.log(`Email:       ${email.trim()}`);
    console.log(`Phone:       ${phone?.trim()}`);
    console.log(`Company:     ${company?.trim() || "Not specified"}`);
    console.log(`Role:        ${designation?.trim() || "Not specified"}`);
    console.log(`Budget:      ${budget || "Not specified"}`);
    console.log(`Source:      ${hearAbout || "Not specified"}`);
    console.log(`Services:    ${selectedServices.join(", ")}`);
    console.log(`Message:     ${message?.trim() || "None"}`);
    console.log("==========================================");

    // 4. Optional: forward to webhook if configured (Slack, Discord, Zapier, Make, etc.)
    const forwardWebhook = process.env.CONTACT_WEBHOOK_URL;
    if (forwardWebhook) {
      try {
        await fetch(forwardWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "new_contact_lead",
            timestamp: new Date().toISOString(),
            lead: {
              name: name.trim(),
              email: email.trim(),
              phone: phone?.trim(),
              company: company?.trim(),
              designation: designation?.trim(),
              budget,
              hearAbout,
              services: selectedServices,
              message: message?.trim(),
            },
          }),
        });
      } catch (webhookErr) {
        console.error("[Contact API] Failed forwarding to webhook:", webhookErr);
      }
    }

    // 5. Optional: Record to Supabase if table exists
    if (supabaseServer) {
      try {
        await supabaseServer.from("contact_inquiries").insert([
          {
            name: name.trim(),
            email: email.trim(),
            phone: phone?.trim(),
            company: company?.trim(),
            designation: designation?.trim(),
            budget,
            hear_about: hearAbout,
            services: selectedServices,
            message: message?.trim(),
            created_at: new Date().toISOString(),
          },
        ]);
      } catch {
        // Table may not exist; logging above ensures lead is never lost.
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting Virtual Velocity. Our senior strategists will formulate your ROI roadmap within 12 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Internal error processing inquiry:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please reach out via hello@virtualvelocity.agency.",
      },
      { status: 500 }
    );
  }
}
