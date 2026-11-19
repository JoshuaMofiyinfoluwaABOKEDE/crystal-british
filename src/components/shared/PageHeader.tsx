import Link from "next/link";
import type { PhotoKey } from "@/content/photos";
import { SitePhoto } from "./Photo";

type Crumb = { label: string; href: string };


/**
 * Navy title band at the top of every inner page, with breadcrumbs.
 * With a photo, the band splits: title on the left, photograph on the right.
 */
export function PageHeader({
  title,
  intro,
  crumbs = [],
  photo,
  children,
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  photo?: PhotoKey;
  children?: React.ReactNode;
}) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className={`container-site relative grid gap-10 py-14 md:py-20 ${
          photo ? "lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16" : ""
        }`}
      >
        <div>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-silver/80">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {trail.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link href={crumb.href} className="underline-offset-4 hover:text-white hover:underline">
                    {crumb.label}
                  </Link>
                  <span aria-hidden className="text-gold">
                    /
                  </span>
                </li>
              ))}
              <li>
                <span aria-current="page" className="text-white">
                  {title}
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="max-w-[16ch] text-[2.75rem] !text-white sm:text-6xl lg:text-[4.25rem]">{title}</h1>
          <span aria-hidden className="mt-7 block h-[3px] w-16 bg-gold" />
          {intro && <p className="measure lead mt-7 text-white/85">{intro}</p>}
          {children}
        </div>
        {photo && (
          <SitePhoto
            name={photo}
            aspect="aspect-[4/3] lg:aspect-[6/5]"
            sizes="(min-width: 1024px) 34rem, 100vw"
            preload
          />
        )}
      </div>
    </section>
  );
}


/** Standard heading block for a page section. */
export function SectionHeading({
  id,
  title,
  intro,
  className = "",
  light = false,
}: {
  id?: string;
  title: string;
  intro?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={className}>
      <h2 id={id} className={`text-[2.25rem] md:text-5xl ${light ? "!text-white" : ""}`}>
        {title}
      </h2>
      {intro && <p className={`measure lead mt-5 ${light ? "text-white/80" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}
