import Image from "next/image";
import { photos, type PhotoKey } from "@/content/photos";

/**
 * A school photograph from src/content/photos.ts, cropped to the given shape.
 * Alt text comes from the photo list, so it is written once and reused.
 */
export function SitePhoto({
  name,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  caption = false,
  preload = false,
}: {
  name: PhotoKey;
  aspect?: string;
  sizes?: string;
  className?: string;
  /** Show the photo's caption underneath. */
  caption?: boolean;
  preload?: boolean;
}) {
  const photo = photos[name];
  const focus = "focus" in photo ? photo.focus : undefined;
  const img = (
    <div className={`relative overflow-hidden rounded-[3px] bg-navy-soft ${aspect} ${caption ? "" : className}`}>
      <Image
        src={photo.image}
        alt={photo.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        preload={preload}
        className="object-cover"
        style={focus ? { objectPosition: focus } : undefined}
      />
    </div>
  );
  if (!caption) return img;
  return (
    <figure className={className}>
      {img}
      <figcaption className="mt-3 font-serif text-[0.95rem] text-muted italic">{photo.caption}</figcaption>
    </figure>
  );
}

/**
 * The hero roundel: a photograph inside a gold ring, with the school's name
 * lettered around it, after the ring and lettering on the crest.
 */
export function Roundel({ name, lettering }: { name: PhotoKey; lettering: string }) {
  const photo = photos[name];
  const focus = "focus" in photo ? photo.focus : undefined;
  // Geometry in a 600 x 600 drawing: photo circle r=228, gold ring r=242,
  // lettering on r=270 running over the top (300 degrees), outer hairline r=296.
  const ring = 2 * Math.PI * 242;
  const letteringPath = 270 * (300 / 180) * Math.PI;
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-[12%] overflow-hidden rounded-full bg-navy-deep">
        <Image
          src={photo.image}
          alt={photo.alt}
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1024px) 34rem, 80vw"
          className="object-cover"
          style={focus ? { objectPosition: focus } : undefined}
        />
      </div>
      <svg viewBox="0 0 600 600" className="pointer-events-none absolute inset-0 size-full" aria-hidden focusable="false">
        <defs>
          {/* From bottom-left, clockwise over the top, to bottom-right, as on the crest. */}
          <path id="roundel-text" d="M165 533.83 A270 270 0 1 1 435 533.83" fill="none" />
        </defs>
        <circle cx="300" cy="300" r="296" fill="none" stroke="rgb(220 224 232 / 0.35)" strokeWidth="1.5" />
        <circle
          cx="300"
          cy="300"
          r="242"
          fill="none"
          stroke="#f4a41c"
          strokeWidth="9"
          className="roundel-ring"
          style={{ "--ring-length": ring } as React.CSSProperties}
          transform="rotate(-90 300 300)"
        />
        <g className="roundel-lettering">
          <text fill="#dce0e8" fontSize="22" fontWeight="700" style={{ fontFamily: "var(--font-serif)" }}>
            <textPath href="#roundel-text" textLength={letteringPath} lengthAdjust="spacing">
              {lettering.replace(/ /g, "\u00a0\u00a0")}
            </textPath>
          </text>
          <Star cx={300} cy={571} r={11} />
        </g>
      </svg>
    </div>
  );
}

/** Five-pointed star, as on either side of the crest's ring. */
export function Star({ cx, cy, r, fill = "#f4a41c" }: { cx: number; cy: number; r: number; fill?: string }) {
  const points = Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.42;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");
  return <polygon points={points} fill={fill} />;
}
