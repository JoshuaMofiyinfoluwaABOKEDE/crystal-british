import { maps, school, whatsappLink } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import { PageHeader } from "@/components/shared/PageHeader";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Contact ${school.name}: ${school.address.full}. Call or WhatsApp ${school.phones[0].display}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        intro="Call, send a WhatsApp message or visit us. You can also send an enquiry using the form on this page."
      />

      <section className="container-site section-pad grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-[2.25rem] md:text-[2.75rem]">Get in touch</h2>
          <ul className="mt-10 grid gap-8">
            <ContactRow icon={<PhoneIcon className="size-5" />} label="Call us">
              {school.phones.map((phone) => (
                <a key={phone.tel} href={`tel:${phone.tel}`} className="text-link text-lg">
                  {phone.display}
                </a>
              ))}
            </ContactRow>
            <ContactRow icon={<WhatsAppIcon className="size-5" />} label="WhatsApp">
              <a href={whatsappLink()} className="text-link text-lg" target="_blank" rel="noopener noreferrer">
                Chat with us on {school.whatsapp.display}
              </a>
            </ContactRow>
            {school.email && (
              <ContactRow icon={<MailIcon className="size-5" />} label="Email">
                <a href={`mailto:${school.email}`} className="text-link break-all text-lg">
                  {school.email}
                </a>
              </ContactRow>
            )}
            <ContactRow icon={<PinIcon className="size-5" />} label="Visit us">
              <p className="text-lg">
                {school.address.street}
                <br />
                {school.address.area}, {school.address.city}
                <br />
                {school.address.state}
              </p>
            </ContactRow>
          </ul>
        </div>

        <div id="enquiry" className="scroll-mt-28 rounded-[3px] border border-silver border-t-4 border-t-gold p-6 md:p-10">
          <h2 className="text-[2.25rem] md:text-[2.75rem]">Send an enquiry</h2>
          <p className="mt-3 mb-10 text-muted">
            Tell us what you need and how to reach you. We will get back to you by phone or WhatsApp.
          </p>
          <EnquiryForm />
        </div>
      </section>

      {/* Directions */}
      <section aria-labelledby="directions-heading" className="bg-porcelain">
        <div className="container-site section-pad grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="directions-heading" className="text-[2.25rem] md:text-[2.75rem]">
              Finding us
            </h2>
            <p className="measure mt-5 text-muted">
              The school is on {school.address.street} in {school.address.area}, Abakaliki. Look for the flags of the
              United Kingdom, Nigeria and the United States in front of the building.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={maps.directionsUrl} className="btn btn-navy" target="_blank" rel="noopener noreferrer">
                <PinIcon /> Get directions
              </a>
              <a href={whatsappLink(school.whatsapp.visit)} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" /> Arrange a visit
              </a>
            </div>
          </div>
          <iframe
            title={`Map showing ${school.name}, ${school.address.full}`}
            src={maps.embedUrl}
            className="aspect-[4/3] w-full rounded-[3px] border border-silver bg-white"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-5">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-gold text-navy">{icon}</span>
      <div>
        <h3 className="font-sans text-sm font-semibold text-muted">{label}</h3>
        <div className="mt-1 grid gap-1">{children}</div>
      </div>
    </li>
  );
}
