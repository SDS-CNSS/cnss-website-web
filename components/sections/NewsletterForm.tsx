"use client";

import { useState, type FormEvent } from "react";
import { User, Mail, CheckCircle2 } from "lucide-react";

type NewsletterFormProps = {
  firstNamePlaceholder: string;
  emailPlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm({
  firstNamePlaceholder,
  emailPlaceholder,
  submitLabel,
  submittingLabel,
  successMessage,
  errorMessage,
}: NewsletterFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!firstName.trim() || !email.trim()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setFirstName("");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="flex w-full items-center gap-3 rounded-[18px] bg-surface p-3 drop-shadow-[0px_2px_1px_rgba(0,0,0,0.1)]">
        <CheckCircle2 className="size-5 shrink-0 text-primary" />
        <p className="text-base font-medium text-ink">{successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full flex-col items-start gap-2 rounded-[18px] bg-surface p-3 drop-shadow-[0px_2px_1px_rgba(0,0,0,0.1)]"
    >
      <label className="flex w-full items-center gap-3 rounded-md border border-line px-3 py-2">
        <User className="size-4 text-muted" />
        <input
          type="text"
          name="firstName"
          placeholder={firstNamePlaceholder}
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="w-full text-base text-ink placeholder:text-muted focus:outline-none"
        />
      </label>
      <label className="flex w-full items-center gap-3 rounded-md border border-line px-3 py-2">
        <Mail className="size-4 text-muted" />
        <input
          type="email"
          name="email"
          placeholder={emailPlaceholder}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="w-full flex-1 text-base text-ink placeholder:text-muted focus:outline-none"
        />
      </label>

      {status === "error" && (
        <p className="px-1 text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md border border-primary bg-primary px-8 py-2 text-paragraph-lg font-medium text-on-primary shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? submittingLabel : submitLabel}
      </button>
    </form>
  );
}
