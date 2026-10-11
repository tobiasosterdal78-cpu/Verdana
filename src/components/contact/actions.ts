"use server";

import { getContent } from "@/content";
import type { ContactField } from "@/content/types";
import { LOCALES, type Locale } from "@/lib/i18n";

export type ContactState = {
  status: "idle" | "invalid" | "unavailable" | "failed" | "sent";
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<Exclude<ContactField, "consent">, string>>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+0-9 ()-]{6,20}$/;
// Submissions faster than this are almost certainly automated.
const MIN_FILL_MS = 2500;

const text = (value: FormDataEntryValue | null) => (typeof value === "string" ? value.trim() : "");

export async function sendContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const requested = text(formData.get("locale"));
  const locale: Locale = (LOCALES as readonly string[]).includes(requested) ? (requested as Locale) : "en";
  const t = getContent(locale).pages.contact.form;
  const values = {
    name: text(formData.get("name")),
    company: text(formData.get("company")),
    email: text(formData.get("email")),
    phone: text(formData.get("phone")),
    interest: text(formData.get("interest")),
    message: text(formData.get("message")),
  };

  // Honeypot and timing trap: pretend success so bots learn nothing.
  const startedAt = Number(text(formData.get("startedAt")));
  if (text(formData.get("website")) || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "sent" };
  }

  const errors: Partial<Record<ContactField, string>> = {};
  if (values.name.length < 2 || values.name.length > 100) errors.name = t.errors.name;
  if (values.company.length < 2 || values.company.length > 120) errors.company = t.errors.company;
  if (!EMAIL.test(values.email) || values.email.length > 160) errors.email = t.errors.email;
  if (values.phone && !PHONE.test(values.phone)) errors.phone = t.errors.phone;
  if (values.interest && !t.interests.includes(values.interest)) errors.interest = t.errors.interest;
  if (values.message.length < 10 || values.message.length > 4000) errors.message = t.errors.message;
  if (formData.get("consent") !== "on") errors.consent = t.errors.consent;

  if (Object.keys(errors).length > 0) return { status: "invalid", errors, values };

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) return { status: "unavailable", values };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_TOKEN ? { authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify({ ...values, locale, source: "verdana-contact-form", receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
    return { status: "sent" };
  } catch (error) {
    console.error("Contact delivery failed", error);
    return { status: "failed", values };
  }
}
