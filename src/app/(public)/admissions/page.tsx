import Link from "next/link";
import { maps, school, whatsappLink } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import { sections } from "@/content/sections";
import { PageHeader, SectionHeading } from "@/components/shared/PageHeader";
import { ChevronDownIcon, PhoneIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata = pageMetadata({
  title: "Admissions",
  description: `How to apply to ${school.name}, Abakaliki, for Nursery, Primary or Secondary: the steps, what to bring, and an admission enquiry form.`,
  path: "/admissions",
});

const steps = [
  {
    title: "Get in touch",
    text: `Send an admission enquiry using the form on this page, or call or WhatsApp us on ${school.phones[0].display}. Tell us your child's age and the stage you are interested in.`,
  },
  {
    title: "Visit the school",
    text: "Come and see the classrooms, courtyard and field, meet members of staff and ask your questions. We will arrange a time that suits you.",
  },
  {
    title: "Apply",
    text: "Complete the school's application form. The admissions team will tell you everything needed for your child's stage and class.",
  },
  {
    title: "Join Crystal",
    text: "Once a place is offered and accepted, the school confirms your child's class and start date, and we welcome your family to Crystal.",
  },
];

const bringList = [
  "Your child's birth certificate",
  "Recent passport photographs of your child",
  "Recent reports from your child's previous school, if they are moving from another school",
];

const faqs = [
  {
    q: "Which stages can my child join?",
    a: `${school.name} takes children in Nursery, Primary and Secondary. Call or WhatsApp us to ask about places in your child's class.`,
  },
  {
    q: "Do you offer boarding?",
    a: "No. Crystal is a day school. Pupils come to school each morning and return home to their families each afternoon.",
  },
  {
    q: "Which curriculum do you follow?",
    a: "Our teaching combines the British, Nigerian and American curricula. You can read more on our Academic Programme page.",
    link: { href: "/academics", label: "Read about our academic programme" },
  },
  {
    q: "Where is the school?",
    a: `We are on ${school.address.full}.`,
    link: { href: maps.directionsUrl, label: "Get directions in Google Maps", external: true },
  },
  {
    q: "How much are the school fees?",
    a: "The admissions team will give you the current fees for your child's class when you get in touch.",
  },
  {
    q: "Can I visit before applying?",
    a: "Yes, and we encourage it. Tick “I would like to arrange a visit” on the enquiry form, or send us a WhatsApp message.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions"
        intro="Thank you for considering Crystal for your child. Here is how to join us, from your first enquiry to your child's first day."
        photo="pupilInUniform"
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#enquire" className="btn btn-gold">
            Start an admission enquiry
          </a>
          <a href={whatsappLink(school.whatsapp.admission)} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-5" /> WhatsApp {school.whatsapp.display}
          </a>
        </div>
      </PageHeader>

      {/* Steps */}
      <section aria-labelledby="steps-heading" className="container-site section-pad">
        <SectionHeading
          id="steps-heading"
          title="How admission works"
          intro="Four steps from your first question to your child's first day."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative border-t-[3px] border-navy pt-6">
              <span aria-hidden className="font-display text-5xl text-gold">
                {i + 1}
              </span>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mt-2 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Requirements and stages */}
      <section aria-labelledby="requirements-heading" className="bg-porcelain">
        <div className="container-site section-pad grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="requirements-heading" className="text-[2.25rem] md:text-[2.75rem]">
              What to have ready
            </h2>
            <p className="mt-4 text-muted">
              Please have these documents ready. The admissions team will give you the full list for your child&rsquo;s class.
            </p>
            <ul className="mt-8 grid gap-4">
              {bringList.map((item) => (
                <li key={item} className="flex gap-4 border-b border-silver pb-4">
                  <span aria-hidden className="mt-2 size-2.5 shrink-0 rounded-full border-2 border-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[2.25rem] md:text-[2.75rem]">Stages open for enquiry</h2>
            <ul className="mt-8 divide-y divide-silver border-y border-silver">
              {sections.map((section) => (
                <li key={section.slug} className="py-5">
                  <Link href={`/our-school/${section.slug}`} className="font-display text-2xl text-navy hover:underline hover:decoration-gold hover:underline-offset-4">
                    {section.name}
                  </Link>
                  <p className="mt-1 text-[0.97rem] text-muted">{section.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" aria-labelledby="enquire-heading" className="scroll-mt-28">
        <div className="container-site section-pad grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              id="enquire-heading"
              title="Admission enquiry"
              intro="Tell us about your child and we will get back to you to talk about places, fees and a visit."
            />
            <div className="mt-10 grid gap-4 border-t border-silver pt-8">
              <p className="text-muted">Prefer to talk now?</p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${school.phones[0].tel}`} className="btn btn-outline">
                  <PhoneIcon /> Call {school.phones[0].display}
                </a>
                <a href={whatsappLink(school.whatsapp.admission)} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-[3px] border border-silver border-t-4 border-t-gold p-6 md:p-10">
            <EnquiryForm variant="admission" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="faq-heading" className="bg-navy text-white">
        <div className="container-site section-pad grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading id="faq-heading" title="Questions parents ask" light />
          <div className="divide-y divide-white/15 border-y border-white/15">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-serif text-lg font-bold text-white md:text-xl">
                  {faq.q}
                  <ChevronDownIcon className="size-5 shrink-0 text-gold transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-white/80">
                  <p>{faq.a}</p>
                  {faq.link &&
                    ("external" in faq.link ? (
                      <a href={faq.link.href} target="_blank" rel="noopener noreferrer" className="text-link-light mt-3 inline-block">
                        {faq.link.label}
                      </a>
                    ) : (
                      <Link href={faq.link.href} className="text-link-light mt-3 inline-block">
                        {faq.link.label}
                      </Link>
                    ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
