import Image from "next/image";
import Link from "next/link";
import { maps, school, sectionLinks, studentLifeLinks, whatsappLink } from "@/config/school";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/shared/Icons";
import crest from "@/assets/crest-480.webp";

export function SiteFooter() {
  const schoolLinks = [
    { label: "About us", href: "/about" },
    { label: "Academic programme", href: "/academics" },
    { label: "Facilities", href: "/facilities" },
    { label: "News & events", href: "/news" },
  ];
  const parentLinks = [
    { label: "Admissions", href: "/admissions" },
    { label: "Admission enquiry", href: "/admissions#enquire" },
    { label: "Contact us", href: "/contact" },
  ];
  return (
    <footer className="bg-navy-deep text-silver">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.35fr]">
        <div>
          <div className="inline-flex rounded-[3px] bg-white px-4 py-3">
            <Image src={crest} alt={`${school.name} crest`} className="h-24 w-auto" sizes="96px" />
          </div>
          <p className="mt-6 font-display text-[1.75rem] leading-tight text-white">{school.motto}</p>
          <p className="mt-3 max-w-xs text-sm text-silver/80">
            {school.stages}. A day school in Abakaliki, founded {school.founded.display}.
          </p>
        </div>

        <div className="grid content-start gap-10">
          <FooterLinks title="Our school" links={[...sectionLinks, ...schoolLinks]} />
        </div>
        <div className="grid content-start gap-10">
          <FooterLinks title="Student life" links={studentLifeLinks} />
          <FooterLinks title="For parents" links={parentLinks} />
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-gold">Visit and contact</h2>
          <ul className="mt-5 grid gap-4 text-[0.95rem]">
            <li className="flex gap-3">
              <PinIcon className="mt-1 size-4 shrink-0 text-gold" />
              <span>
                {school.address.full}
                <br />
                <a
                  href={maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-gold underline-offset-4 hover:decoration-white"
                >
                  Get directions
                </a>
              </span>
            </li>
            {school.phones.map((phone) => (
              <li key={phone.tel} className="flex gap-3">
                <PhoneIcon className="mt-1 size-4 shrink-0 text-gold" />
                <a href={`tel:${phone.tel}`} className="hover:text-white hover:underline">
                  Call {phone.display}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-1 size-4 shrink-0 text-gold" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                WhatsApp {school.whatsapp.display}
              </a>
            </li>
            {school.email && (
              <li className="flex gap-3">
                <MailIcon className="mt-1 size-4 shrink-0 text-gold" />
                <a href={`mailto:${school.email}`} className="break-all hover:text-white hover:underline">
                  {school.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-[0.8rem] text-silver/65 sm:flex-row sm:justify-between">
          <p>
            &copy; {process.env.NEXT_PUBLIC_BUILD_YEAR} {school.name}. All rights reserved.
          </p>
          <p>Day school for Nursery, Primary and Secondary.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold text-gold">{title}</h2>
      <ul className="mt-5 grid gap-3 text-[0.95rem]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-white hover:underline hover:underline-offset-4">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Floating WhatsApp button, on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp-dark text-white shadow-[0_10px_24px_-8px_rgb(0_0_0/0.45)] transition-transform hover:scale-105 md:right-6 md:bottom-6"
      aria-label={`Chat with ${school.shortName} on WhatsApp`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
