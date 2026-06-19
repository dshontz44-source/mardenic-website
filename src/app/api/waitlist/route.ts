import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter (resets per cold start; fine for MVP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60_000; // 1 minute

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const ip = getClientIp(req);

    // Rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { email, hp } = body as { email?: string; hp?: string };

    // Honeypot — if filled, silently succeed (fool bots)
    if (hp && hp.length > 0) {
      return NextResponse.json({ message: "You're on the list." });
    }

    // Validate email
    if (!email || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Try to add to Resend audience if configured
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (audienceId) {
      await resend.contacts.create({
        email: cleanEmail,
        audienceId,
        unsubscribed: false,
      });
    } else {
      // Send a notification email to ourselves as fallback
      const fromEmail = process.env.WAITLIST_FROM_EMAIL ?? "onboarding@resend.dev";
      await resend.emails.send({
        from: fromEmail,
        to: "dshontz44@gmail.com",
        subject: "New Korith Waitlist Signup",
        text: `New waitlist signup: ${cleanEmail}`,
        html: `<p>New waitlist signup: <strong>${cleanEmail}</strong></p><p>Source: Mardenic website</p>`,
      });
    }

    return NextResponse.json({
      message:
        "You're on the list. We'll reach out when Korith is ready to share.",
    });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
