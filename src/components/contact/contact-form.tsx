"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendContact, type ContactState } from "@/components/contact/actions";
import { Icon } from "@/components/icons";
import type { ContactField, ContactFormCopy } from "@/content/types";
import type { Locale } from "@/lib/i18n";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-xl border border-control-edge/60 bg-canvas px-4 py-3 text-[1rem] text-fg outline-none transition-[border-color,box-shadow] placeholder:text-fg-subtle/80 hover:border-control-edge focus:border-accent focus:shadow-[0_0_0_4px_var(--accent-soft)] aria-[invalid=true]:border-[#d92d20]";

const errorText = "mt-2 text-[0.9rem] font-[560] text-[#d92d20] dark:text-[#ff8a80]";

export function ContactForm({ locale, t }: { locale: Locale; t: ContactFormCopy }) {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const [startedAt, setStartedAt] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => setStartedAt(String(Date.now())), []);

  useEffect(() => {
    if (state.status === "invalid") {
      formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
    } else if (state.status !== "idle") {
      statusRef.current?.focus();
    }
  }, [state]);

  if (state.status === "sent") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-3xl border border-hairline bg-surface p-8 outline-none md:p-10">
        <span className="flex size-12 items-center justify-center rounded-full bg-accent text-on-accent">
          <Icon name="check" size={22} weight="bold" />
        </span>
        <h2 className="type-h3 mt-6 text-fg">{t.sent.title}</h2>
        <p className="mt-3 text-[1.02rem] leading-relaxed text-fg-muted">{t.sent.text}</p>
      </div>
    );
  }

  const error = (field: ContactField) => state.errors?.[field];
  const describedBy = (field: ContactField) => (error(field) ? `${field}-error` : undefined);
  const values = state.values ?? {};
  const input = (field: Exclude<ContactField, "consent" | "interest" | "message">, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
      id={field}
      name={field}
      defaultValue={values[field]}
      aria-invalid={error(field) ? true : undefined}
      aria-describedby={describedBy(field)}
      className={inputClass}
      {...props}
    />
  );

  return (
    <form
      ref={formRef}
      key={JSON.stringify(values)}
      action={formAction}
      noValidate
      className="relative rounded-3xl border border-hairline bg-surface p-6 sm:p-8 md:p-10"
    >
      <input type="hidden" name="locale" value={locale} />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t.labels.name} field="name" error={error("name")}>
          {input("name", { autoComplete: "name", required: true })}
        </Field>
        <Field label={t.labels.company} field="company" error={error("company")}>
          {input("company", { autoComplete: "organization", required: true })}
        </Field>
        <Field label={t.labels.email} field="email" error={error("email")}>
          {input("email", { type: "email", autoComplete: "email", inputMode: "email", required: true })}
        </Field>
        <Field label={t.labels.phone} optional={t.optional} field="phone" error={error("phone")}>
          {input("phone", { type: "tel", autoComplete: "tel", inputMode: "tel" })}
        </Field>
        <Field label={t.labels.interest} optional={t.optional} field="interest" error={error("interest")} wide>
          <select
            id="interest"
            name="interest"
            defaultValue={values.interest ?? ""}
            aria-invalid={error("interest") ? true : undefined}
            aria-describedby={describedBy("interest")}
            className={`${inputClass} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-11`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cpath fill='%238792a8' d='M213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">{t.choose}</option>
            {t.interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t.labels.message} field="message" error={error("message")} wide>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            defaultValue={values.message}
            placeholder={t.messagePlaceholder}
            aria-invalid={error("message") ? true : undefined}
            aria-describedby={describedBy("message")}
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      {/* Honeypot and timing trap for automated submissions. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">{t.honeypot}</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-[0.95rem] leading-snug text-fg-muted">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={error("consent") ? true : undefined}
            aria-describedby={describedBy("consent")}
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded accent-[var(--accent)]"
          />
          {t.consent}
        </label>
        {error("consent") ? (
          <p id="consent-error" className={errorText}>
            {error("consent")}
          </p>
        ) : null}
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {state.status === "invalid" ? (
          <p className="mt-6 rounded-xl border border-[#d92d20]/30 px-4 py-3 text-[0.95rem] font-[560] text-[#d92d20] dark:text-[#ff8a80]">
            {t.status.invalid}
          </p>
        ) : null}
        {state.status === "unavailable" ? (
          <p className="mt-6 rounded-xl bg-accent-soft px-4 py-3 text-[0.95rem] text-fg">{t.status.unavailable}</p>
        ) : null}
        {state.status === "failed" ? (
          <p className="mt-6 rounded-xl border border-[#d92d20]/30 px-4 py-3 text-[0.95rem] font-[560] text-[#d92d20] dark:text-[#ff8a80]">
            {t.status.failed}
          </p>
        ) : null}
      </div>

      <div className="mt-8">
        <button type="submit" disabled={pending} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-80 sm:w-auto">
          {pending ? t.sending : t.submit}
          {pending ? null : <Icon name="arrowRight" size={18} />}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  field,
  error,
  optional,
  wide = false,
  children,
}: {
  label: string;
  field: ContactField;
  error?: string;
  optional?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <label htmlFor={field} className="text-[0.95rem] font-[560] text-fg">
        {label}
        {optional ? <span className="font-normal text-fg-subtle"> ({optional})</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${field}-error`} className={errorText}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
