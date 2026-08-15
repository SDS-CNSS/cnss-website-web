import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/layout/Container";
import type { ContactContent } from "@/types/contact";

type ContactSectionProps = {
  coordonnees: ContactContent["coordonnees"];
  form: ContactContent["form"];
};

export function ContactSection({ coordonnees, form }: ContactSectionProps) {
  return (
    <section className="flex w-full flex-col items-stretch bg-surface p-6 sm:p-10 lg:p-20">
      <Container className="flex flex-col items-stretch gap-10 lg:flex-row lg:gap-16">
        <ContactInfo
          title={coordonnees.title}
          locations={coordonnees.locations}
        />
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
      </Container>
    </section>
  );
}
