"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, school, whatsappLink } from "@/config/school";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { normalisePath } from "./DesktopNav";

/**
 * Phone and tablet menu. Built on <details>, so it opens and closes even
 * before JavaScript loads; the effect below closes it after navigation.
 */
export function MobileNav() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = normalisePath(usePathname());

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  const linkClass = (href: string) =>
    `block rounded-[2px] px-3 py-3 text-base ${pathname === href ? "bg-navy-soft font-semibold text-navy" : "text-ink hover:bg-porcelain"}`;

  return (
    <details ref={ref} className="group xl:hidden">
      <summary
        className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-[3px] border border-silver px-4 py-2 font-medium text-navy hover:bg-porcelain"
      >
        <MenuIcon className="size-5 group-open:hidden" />
        <CloseIcon className="hidden size-5 group-open:block" />
        <span className="group-open:hidden">Menu</span>
        <span className="hidden group-open:inline">Close</span>
      </summary>
      <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-silver bg-white shadow-[0_24px_40px_-24px_rgb(32_32_84/0.45)]">
        <nav aria-label="Main" className="container-site py-4">
          <ul className="grid gap-1">
            <li>
              <Link href="/" className={linkClass("/")}>
                Home
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-3 grid gap-0.5 border-l-2 border-gold/60 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className={`${linkClass(child.href)} !py-2 text-[0.95rem]`}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3 border-t border-silver pt-5">
            <Link href="/admissions" className="btn btn-gold">
              Admissions
            </Link>
            <a href={`tel:${school.phones[0].tel}`} className="btn btn-outline">
              <PhoneIcon /> Call {school.phones[0].display}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <WhatsAppIcon className="size-5" /> WhatsApp {school.whatsapp.display}
            </a>
          </div>
        </nav>
      </div>
    </details>
  );
}
