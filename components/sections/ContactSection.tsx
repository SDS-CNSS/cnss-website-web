import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import type { ContactContent } from "@/types/contact";

type ContactSectionProps = {
  coordonnees: ContactContent["coordonnees"];
  form: ContactContent["form"];
};

export function ContactSection({ coordonnees, form }: ContactSectionProps) {
  return (
    <section className="flex w-full flex-col items-stretch gap-10 bg-surface p-6 sm:p-10 lg:flex-row lg:gap-16 lg:p-20">
      <ContactInfo title={coordonnees.title} locations={coordonnees.locations} />
      <ContactForm
        title={form.title}
        subjectPlaceholder={form.subjectPlaceholder}
        contactPointPlaceholder={form.contactPointPlaceholder}
        messagePlaceholder={form.messagePlaceholder}
        submitLabel={form.submitLabel}
        submittingLabel={form.submittingLabel}
        successMessage={form.successMessage}
        errorMessage={form.errorMessage}
      />
    </section>
  );
}
