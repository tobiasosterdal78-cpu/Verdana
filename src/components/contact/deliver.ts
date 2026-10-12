import { enquiryText, type Enquiry } from "@/components/contact/enquiry";
import type { ContactFormCopy } from "@/content/types";
import { company } from "@/lib/site";

/**
 * Sends the enquiry to the company address through Microsoft Graph, as the
 * mailbox itself: vardena.se receives its mail in Microsoft 365. Needs an
 * app registration with the Mail.Send application permission (see
 * docs/DEPLOYMENT.md). Replies go to the person who wrote.
 */
async function sendMail(values: Enquiry, t: ContactFormCopy) {
  const tenant = process.env.MS_TENANT_ID;
  const client = process.env.MS_CLIENT_ID;
  const secret = process.env.MS_CLIENT_SECRET;
  if (!tenant || !client || !secret) return null;
  const mailbox = process.env.CONTACT_MAILBOX ?? company.email;

  const tokenResponse = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenant)}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: client,
      client_secret: secret,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!tokenResponse.ok) throw new Error(`Microsoft sign-in responded ${tokenResponse.status}`);
  const { access_token: token } = (await tokenResponse.json()) as { access_token?: string };
  if (!token) throw new Error("Microsoft sign-in returned no token");

  const response = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailbox)}/sendMail`, {
    method: "POST",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({
      message: {
        subject: `${t.emailSubject}: ${values.company}`,
        body: { contentType: "Text", content: enquiryText(values, t.labels) },
        toRecipients: [{ emailAddress: { address: company.email } }],
        replyTo: [{ emailAddress: { address: values.email, name: values.name } }],
      },
      saveToSentItems: false,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`Microsoft Graph sendMail responded ${response.status}`);
  return true;
}

/** Optional second channel: the enquiry as JSON to a webhook. */
async function postWebhook(values: Enquiry, locale: string) {
  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) return null;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(process.env.CONTACT_WEBHOOK_TOKEN ? { authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` } : {}),
    },
    body: JSON.stringify({ ...values, locale, to: company.email, source: "vardena-contact-form", receivedAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
  return true;
}

/**
 * Delivers through every channel that is configured. "sent" if at least one
 * took the enquiry, "failed" if all of them refused, "unavailable" if none
 * is configured.
 */
export async function deliver(values: Enquiry, locale: string, t: ContactFormCopy): Promise<"sent" | "failed" | "unavailable"> {
  const results = await Promise.allSettled([sendMail(values, t), postWebhook(values, locale)]);
  for (const result of results) {
    if (result.status === "rejected") console.error("Contact delivery failed", result.reason);
  }
  if (results.some((result) => result.status === "fulfilled" && result.value === true)) return "sent";
  return results.some((result) => result.status === "rejected") ? "failed" : "unavailable";
}
