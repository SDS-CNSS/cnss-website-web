"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { User, Mail, Phone, MessageSquare, MapPin, AlignLeft, CheckCircle2 } from "lucide-react";

type ContactFormProps = {
  title: string;
  subjectPlaceholder: string;
  contactPointPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
};

type FormState = {
  nom: string;
  prenoms: string;
  email: string;
  telephone: string;
  sujet: string;
  pointsContact: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  nom: "",
  prenoms: "",
  email: "",
  telephone: "",
  sujet: "",
  pointsContact: "",
  message: "",
};

const REQUIRED_FIELDS: (keyof FormState)[] = ["nom", "prenoms", "email", "sujet", "message"];

type Status = "idle" | "submitting" | "success" | "error";

const inputClassName = "w-full text-base text-ink placeholder:text-muted focus:outline-none";
const fieldWrapperClassName = "flex h-12 w-full items-center gap-3 rounded-md border border-line bg-surface px-3";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-base font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm({
  title,
  subjectPlaceholder,
  contactPointPlaceholder,
  messagePlaceholder,
  submitLabel,
  submittingLabel,
  successMessage,
  errorMessage,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const hasEmptyField = REQUIRED_FIELDS.some((field) => form[field].trim() === "");
    if (hasEmptyField) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setForm(INITIAL_STATE);
  }

  if (status === "success") {
    return (
      <div className="flex w-full flex-1 flex-col items-start gap-6">
        <h2 className="font-heading text-h3 font-bold text-primary-800 lg:text-h2">{title}</h2>
        <div className="flex w-full flex-col items-center gap-4 rounded-2xl bg-surface p-10 text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)]">
          <div className="flex size-14 items-center justify-center rounded-full bg-surface-light text-primary">
            <CheckCircle2 className="size-7" />
          </div>
          <p className="text-paragraph-lg font-medium text-ink">{successMessage}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-base font-semibold text-primary underline"
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-1 flex-col items-start gap-6">
      <h2 className="font-heading text-h3 font-bold text-primary-800 lg:text-h2">{title}</h2>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col gap-5 rounded-2xl bg-surface p-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] sm:p-6"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Nom" htmlFor="nom">
            <label className={fieldWrapperClassName}>
              <User className="size-4 shrink-0 text-muted" />
              <input
                id="nom"
                type="text"
                placeholder="Nom"
                value={form.nom}
                onChange={(event) => updateField("nom", event.target.value)}
                className={inputClassName}
              />
            </label>
          </Field>

          <Field label="Prénoms" htmlFor="prenoms">
            <label className={fieldWrapperClassName}>
              <User className="size-4 shrink-0 text-muted" />
              <input
                id="prenoms"
                type="text"
                placeholder="Prénoms"
                value={form.prenoms}
                onChange={(event) => updateField("prenoms", event.target.value)}
                className={inputClassName}
              />
            </label>
          </Field>

          <Field label="Adresse mail" htmlFor="email">
            <label className={fieldWrapperClassName}>
              <Mail className="size-4 shrink-0 text-muted" />
              <input
                id="email"
                type="email"
                placeholder="Adresse mail"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={inputClassName}
              />
            </label>
          </Field>

          <Field label="Téléphone" htmlFor="telephone">
            <label className={fieldWrapperClassName}>
              <Phone className="size-4 shrink-0 text-muted" />
              <input
                id="telephone"
                type="tel"
                placeholder="Téléphone"
                value={form.telephone}
                onChange={(event) => updateField("telephone", event.target.value)}
                className={inputClassName}
              />
            </label>
          </Field>
        </div>

        <Field label="Sujet du message" htmlFor="sujet">
          <label className={fieldWrapperClassName}>
            <MessageSquare className="size-4 shrink-0 text-muted" />
            <input
              id="sujet"
              type="text"
              placeholder={subjectPlaceholder}
              value={form.sujet}
              onChange={(event) => updateField("sujet", event.target.value)}
              className={inputClassName}
            />
          </label>
        </Field>

        <Field label="Points de contact concernés" htmlFor="pointsContact">
          <label className={fieldWrapperClassName}>
            <MapPin className="size-4 shrink-0 text-muted" />
            <input
              id="pointsContact"
              type="text"
              placeholder={contactPointPlaceholder}
              value={form.pointsContact}
              onChange={(event) => updateField("pointsContact", event.target.value)}
              className={inputClassName}
            />
          </label>
        </Field>

        <Field label="Message" htmlFor="message">
          <label className="flex w-full items-start gap-3 rounded-md border border-line bg-surface px-3 py-2.5">
            <AlignLeft className="size-4 shrink-0 text-muted" />
            <textarea
              id="message"
              rows={5}
              placeholder={messagePlaceholder}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="w-full resize-none text-base text-ink placeholder:text-muted focus:outline-none"
            />
          </label>
        </Field>

        {status === "error" && <p className="text-sm font-medium text-red-600">{errorMessage}</p>}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex h-12 w-full items-center justify-center rounded-md bg-primary text-base font-medium text-on-primary transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? submittingLabel : submitLabel}
        </button>
      </form>
    </div>
  );
}
