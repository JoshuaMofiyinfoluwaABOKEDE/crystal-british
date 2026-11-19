"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/school";
import { ChevronDownIcon } from "@/components/shared/Icons";

export function normalisePath(path: string | null) {
  if (!path) return "/";
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = normalisePath(usePathname());
  return (
    <nav aria-label="Main" className="hidden xl:block">
      <ul className="flex items-center gap-1">
        {mainNav.map((item) => {
          const active = isActive(pathname, item.href);
          const linkClass = `relative flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[0.93rem] font-medium transition-colors after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-gold after:transition-transform after:duration-200 ${
            active ? "text-navy after:scale-x-100" : "text-ink after:scale-x-0 hover:text-navy hover:after:scale-x-100"
          }`;
          if (!item.children) {
            return (
              <li key={item.href}>
                <Link href={item.href} className={linkClass} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          }
          return (
            <li key={item.href} className="group relative">
              <Link href={item.href} className={linkClass} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
                <ChevronDownIcon className="size-4 opacity-60 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="min-w-56 rounded-[3px] border border-silver border-t-2 border-t-gold bg-white p-2 shadow-[0_18px_40px_-20px_rgb(32_32_84/0.45)]">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        aria-current={pathname === child.href ? "page" : undefined}
                        className={`block rounded-[2px] px-3 py-2.5 text-[0.94rem] transition-colors hover:bg-porcelain hover:text-navy ${
                          pathname === child.href ? "font-semibold text-navy" : "text-ink"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
