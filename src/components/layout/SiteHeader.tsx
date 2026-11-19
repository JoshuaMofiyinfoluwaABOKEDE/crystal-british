import Image from "next/image";
import Link from "next/link";
import { school, whatsappLink } from "@/config/school";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/shared/Icons";
import crest from "@/assets/crest-240.webp";

/** Thin strip above the header: where we are, and one tap to call or WhatsApp. */
export function TopBar() {
  return (
    <div className="bg-navy-deep text-[0.84rem] text-silver">
      <div className="container-site flex min-h-10 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <p className="hidden items-center gap-2 md:flex">
          <PinIcon className="size-3.5 text-gold" />
          {school.address.full}
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <li>
            <a href={`tel:${school.phones[0].tel}`} className="flex items-center gap-2 hover:text-white hover:underline">
              <PhoneIcon className="size-3.5 text-gold" />
              Call {school.phones[0].display}
            </a>
          </li>
          <li>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white hover:underline"
            >
              <WhatsAppIcon className="size-3.5 text-gold" />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-silver bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-site relative flex h-[4.75rem] items-center justify-between gap-4 md:h-[5.5rem]">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${school.name}, home`}>
          <Image src={crest} alt="" className="h-12 w-auto md:h-[3.75rem]" preload />
          <span className="leading-none">
            <span className="block font-display text-[1.7rem] text-navy md:text-[1.95rem]">{school.shortName}</span>
            <span className="mt-1 block text-[0.72rem] font-medium tracking-[0.06em] text-muted md:text-[0.78rem]">
              {school.name.slice(school.shortName.length).trim()}
            </span>
          </span>
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-3">
          <Link href="/admissions" className="btn btn-gold hidden !min-h-11 whitespace-nowrap !px-5 sm:inline-flex">
            Admissions
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
