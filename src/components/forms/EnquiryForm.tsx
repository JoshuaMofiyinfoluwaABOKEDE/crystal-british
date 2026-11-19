"use client";

import { useState } from "react";
import { school, whatsappLink } from "@/config/school";
import { CheckIcon, CopyIcon, MailIcon, WhatsAppIcon } from "@/components/shared/Icons";

/**
 * Enquiry forms for the Contact page ("general") and the Admissions page
 * ("admission").
 *
 * Nothing is stored on a server. After the form is checked, the parent sends
 * the prepared message on WhatsApp (or by email, once the school's email
 * address is confirmed in src/config/school.ts), or copies it. A later phase
 * can save enquiries to a database and notify the school directly.
 */

const generalTopics = ["Admissions", "Visiting the school", "Nursery", "Primary", "Secondary", "School fees", "Something else"];
const stages = ["Nursery", "Primary", "Secondary", "Not sure yet"];

type FieldName = "name" | "phone" | "email" | "topic" | "message" | "childName" | "childAge" | "stage";
type Errors = Partial<Record<FieldName, string>>;

export function EnquiryForm({ variant = "general" }: { variant?: "general" | "admission" }) {
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState<{ text: string; subject: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const isAdmission = variant === "admission";
  const id = (name: string) => `${variant}-${name}`;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const name = get("name");
    const phone = get("phone");
    const email = get("email");
    const message = get("message");
    const topic = get("topic");
    const childName = get("childName");
    const childAge = get("childAge");
    const stage = get("stage");
    const wantsVisit = data.get("visit") === "yes";

    const next: Errors = {};
    if (name.length < 2) next.name = "Enter your full name.";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Enter a phone number we can call, for example 0803 123 4567.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address, or leave this blank.";
    if (isAdmission) {
      if (childName.length < 2) next.childName = "Enter your child's name.";
      if (!childAge) next.childAge = "Enter your child's age, for example 4 years.";
      if (!stage) next.stage = "Choose the stage you are interested in.";
    } else {
      if (!topic) next.topic = "Choose what your enquiry is about.";
      if (message.length < 10) next.message = "Tell us a little more about your enquiry.";
    }
    setErrors(next);
    setCopied(false);
    if (Object.keys(next).length > 0) {
      setPrepared(null);
      const firstInvalid = Object.keys(next)[0];
      event.currentTarget.querySelector<HTMLElement>(`#${id(firstInvalid)}`)?.focus();
      return;
    }

    const lines = isAdmission
      ? [
          `Admission enquiry for ${school.name}`,
          `Parent or guardian: ${name}`,
          `Phone: ${phone}`,
          email ? `Email: ${email}` : null,
          `Child: ${childName}, age ${childAge}`,
          `Stage: ${stage}`,
          wantsVisit ? "I would like to arrange a visit to the school." : null,
          message ? `\n${message}` : null,
        ]
      : [
          `Enquiry about: ${topic}`,
          `Name: ${name}`,
          `Phone: ${phone}`,
          email ? `Email: ${email}` : null,
          "",
          message,
        ];
    const text = lines.filter((line) => line !== null).join("\n");
    setPrepared({
      text,
      subject: isAdmission ? `Admission enquiry: ${stage}` : `Website enquiry: ${topic}`,
    });
  }

  async function copyMessage() {
    if (!prepared) return;
    try {
      await navigator.clipboard.writeText(prepared.text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const field =
    "mt-2 block w-full rounded-[3px] border border-silver bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-navy focus:outline-none focus:ring-2 focus:ring-gold/50 aria-[invalid=true]:border-claret";

  const describedBy = (name: FieldName) => (errors[name] ? `${id(name)}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={isAdmission ? "Parent or guardian's name" : "Your name"} id={id("name")} error={errors.name}>
          <input id={id("name")} name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={describedBy("name")} />
        </Field>
        <Field label="Phone number" hint="WhatsApp if possible" id={id("phone")} error={errors.phone}>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} aria-invalid={!!errors.phone} aria-describedby={describedBy("phone")} />
        </Field>
      </div>
      <Field label="Email address" hint="optional" id={id("email")} error={errors.email}>
        <input id={id("email")} name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={describedBy("email")} />
      </Field>

      {isAdmission ? (
        <>
          <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
            <Field label="Child's name" id={id("childName")} error={errors.childName}>
              <input id={id("childName")} name="childName" autoComplete="off" className={field} aria-invalid={!!errors.childName} aria-describedby={describedBy("childName")} />
            </Field>
            <Field label="Child's age" id={id("childAge")} error={errors.childAge}>
              <input id={id("childAge")} name="childAge" placeholder="e.g. 4 years" className={field} aria-invalid={!!errors.childAge} aria-describedby={describedBy("childAge")} />
            </Field>
          </div>
          <fieldset aria-describedby={describedBy("stage")}>
            <legend id={id("stage")} tabIndex={-1} className="text-sm font-semibold text-navy">
              Stage you are interested in
            </legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {stages.map((s) => (
                <label
                  key={s}
                  className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-[3px] border border-silver px-4 py-2 text-[0.97rem] has-[:checked]:border-navy has-[:checked]:bg-navy-soft has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-gold"
                >
                  <input type="radio" name="stage" value={s} className="size-4 accent-navy" />
                  {s}
                </label>
              ))}
            </div>
            {errors.stage && (
              <p id={`${id("stage")}-error`} className="mt-2 text-sm text-claret">
                {errors.stage}
              </p>
            )}
          </fieldset>
          <label className="flex cursor-pointer items-start gap-3 text-[0.97rem]">
            <input type="checkbox" name="visit" value="yes" className="mt-1 size-4 accent-navy" />
            I would like to arrange a visit to the school.
          </label>
          <Field label="Anything else we should know?" hint="optional" id={id("message")} error={errors.message}>
            <textarea id={id("message")} name="message" rows={4} className={field} />
          </Field>
        </>
      ) : (
        <>
          <Field label="What is your enquiry about?" id={id("topic")} error={errors.topic}>
            <select id={id("topic")} name="topic" defaultValue="" className={field} aria-invalid={!!errors.topic} aria-describedby={describedBy("topic")}>
              <option value="" disabled>
                Choose a topic
              </option>
              {generalTopics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="Your message" id={id("message")} error={errors.message}>
            <textarea id={id("message")} name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={describedBy("message")} />
          </Field>
        </>
      )}

      <button type="submit" className="btn btn-navy justify-self-start">
        {isAdmission ? "Prepare my admission enquiry" : "Prepare my enquiry"}
      </button>

      {prepared && (
        <div role="status" className="rounded-[3px] border-l-4 border-gold bg-porcelain p-5 md:p-6">
          <p className="font-serif text-lg font-bold text-navy">Your enquiry is ready. Send it to the school:</p>
          <pre className="mt-4 max-h-48 overflow-auto rounded-[3px] border border-silver bg-white p-4 font-sans text-sm whitespace-pre-wrap text-ink">
            {prepared.text}
          </pre>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={whatsappLink(prepared.text)} target="_blank" rel="noopener noreferrer" className="btn bg-whatsapp-dark text-white hover:bg-[#0e7a3f]">
              <WhatsAppIcon className="size-5" /> Send on WhatsApp
            </a>
            {school.email && (
              <a
                href={`mailto:${school.email}?subject=${encodeURIComponent(prepared.subject)}&body=${encodeURIComponent(prepared.text)}`}
                className="btn btn-outline"
              >
                <MailIcon /> Send by email
              </a>
            )}
            <button type="button" onClick={copyMessage} className="btn btn-outline">
              {copied ? <CheckIcon className="size-4" /> : <CopyIcon />} {copied ? "Copied" : "Copy message"}
            </button>
          </div>
          <p className="mt-4 text-sm text-muted">
            If WhatsApp does not open, call{" "}
            <a href={`tel:${school.phones[0].tel}`} className="text-link">
              {school.phones[0].display}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  hint,
  id,
  error,
  children,
}: {
  label: string;
  hint?: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label} {hint && <span className="font-normal text-muted">({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-claret">
          {error}
        </p>
      )}
    </div>
  );
}
