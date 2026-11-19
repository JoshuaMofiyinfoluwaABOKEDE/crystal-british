"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { photos, type PhotoKey } from "@/content/photos";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/shared/Icons";

type Album = { title: string; photos: PhotoKey[] };

/**
 * Photo gallery with album filters and a full-screen viewer.
 * The viewer is a native <dialog>, so Escape closes it and keyboard focus
 * stays inside while it is open. Left and right arrow keys move between photos.
 */
export function Gallery({ albums }: { albums: Album[] }) {
  const [active, setActive] = useState<string>("All photos");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const visible = useMemo(() => {
    const list = active === "All photos" ? albums : albums.filter((a) => a.title === active);
    return list.flatMap((album) => album.photos.map((key) => ({ key, album: album.title })));
  }, [active, albums]);

  const open = (index: number, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger;
    setOpenIndex(index);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (delta: number) => setOpenIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    const onClose = () => {
      setOpenIndex(null);
      lastTrigger.current?.focus();
    };
    dialog.addEventListener("keydown", onKey);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      dialog.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = openIndex !== null ? visible[openIndex] : null;
  const filters = ["All photos", ...albums.map((a) => a.title)];

  return (
    <>
      <div role="group" aria-label="Choose an album" className="flex flex-wrap gap-2">
        {filters.map((title) => (
          <button
            key={title}
            type="button"
            aria-pressed={active === title}
            onClick={() => setActive(title)}
            className="min-h-11 rounded-[3px] border border-silver px-4 py-2 text-[0.95rem] font-medium text-navy transition-colors hover:bg-porcelain aria-pressed:border-navy aria-pressed:bg-navy aria-pressed:text-white"
          >
            {title}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} photos{active === "All photos" ? "" : ` from ${active}`}.
      </p>

      <ul className="mt-10 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
        {visible.map(({ key, album }, index) => {
          const photo = photos[key];
          return (
            <li key={`${album}-${key}`} className="mb-3 break-inside-avoid md:mb-4">
              <button
                type="button"
                onClick={(event) => open(index, event.currentTarget)}
                className="group block w-full overflow-hidden rounded-[3px] bg-navy-soft text-left"
                aria-label={`Open photo: ${photo.caption}`}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 48vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-white backdrop:bg-navy-deep/95"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
              <p className="text-sm text-silver">
                {current.album}: {openIndex! + 1} of {visible.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="flex min-h-11 items-center gap-2 rounded-[3px] px-3 text-sm font-medium hover:bg-white/10"
                autoFocus
              >
                <CloseIcon className="size-5" /> Close
              </button>
            </div>
            <figure className="relative mx-4 grow md:mx-20">
              <Image
                key={current.key}
                src={photos[current.key].image}
                alt={photos[current.key].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </figure>
            <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
              <button
                type="button"
                onClick={() => step(-1)}
                className="flex size-12 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
                aria-label="Previous photo"
              >
                <ChevronLeftIcon />
              </button>
              <p className="max-w-xl text-center font-serif text-lg italic">{photos[current.key].caption}</p>
              <button
                type="button"
                onClick={() => step(1)}
                className="flex size-12 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
                aria-label="Next photo"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
