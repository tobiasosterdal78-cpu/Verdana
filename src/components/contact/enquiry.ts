import type { ContactFormCopy } from "@/content/types";

export type Enquiry = { name: string; company: string; email: string; phone: string; interest: string; message: string };

/** The enquiry as the plain text of an email, with the form's own labels. */
export function enquiryText(values: Enquiry, labels: ContactFormCopy["labels"]) {
  // "What is it about?" is a label on the form; in the email it reads better without the question mark.
  const line = (label: string, value: string) => (value ? `${label.replace(/\?$/, "")}: ${value}` : null);
  return [
    line(labels.name, values.name),
    line(labels.company, values.company),
    line(labels.email, values.email),
    line(labels.phone, values.phone),
    line(labels.interest, values.interest),
    "",
    values.message,
  ]
    .filter((part) => part !== null)
    .join("\n");
}
