"use client";

import { useEffect } from "react";
import type { LookPhoto } from "@data/lookbook";
import { Photo } from "@/components/photo";
import { IconClose } from "@/components/icons";

type LightboxProps = {
  photos: LookPhoto[];
  index: number | null;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export function Lightbox({ photos, index, onClose, onIndex }: LightboxProps) {
  const open = index !== null;
  const photo = index !== null ? photos[index] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && index !== null) {
        onIndex((index + 1) % photos.length);
      }
      if (event.key === "ArrowLeft" && index !== null) {
        onIndex((index - 1 + photos.length) % photos.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, onClose, onIndex, photos.length]);

  if (!photo || index === null) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Foto del lookbook"
    >
      <button
        type="button"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center text-bone"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <IconClose className="h-6 w-6" />
      </button>
      <button
        type="button"
        className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center bg-ink/80 font-display text-4xl text-bone sm:bottom-auto sm:left-3 sm:top-1/2 sm:-translate-y-1/2"
        onClick={() => onIndex((index - 1 + photos.length) % photos.length)}
        aria-label="Foto anterior"
      >
        ‹
      </button>
      <figure className="relative aspect-[4/5] h-[min(82vh,860px)] w-auto max-w-[92vw]">
        <Photo
          src={photo.src}
          alt={photo.alt}
          sizes="92vw"
          className="object-contain"
          priority
        />
        <figcaption className="sr-only">{photo.alt}</figcaption>
      </figure>
      <button
        type="button"
        className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center bg-ink/80 font-display text-4xl text-bone sm:bottom-auto sm:right-3 sm:top-1/2 sm:-translate-y-1/2"
        onClick={() => onIndex((index + 1) % photos.length)}
        aria-label="Foto siguiente"
      >
        ›
      </button>
    </div>
  );
}
