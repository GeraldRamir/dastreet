"use client";

import { useState } from "react";
import type { LookPhoto } from "@data/lookbook";
import { Lightbox } from "@/components/lightbox";
import { Photo } from "@/components/photo";

export function LookbookGrid({ photos }: { photos: LookPhoto[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 xl:columns-4">
        {photos.map((photo, photoIndex) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setIndex(photoIndex)}
            aria-label={photo.alt}
            className="relative mb-3 block w-full break-inside-avoid overflow-hidden bg-panel text-left"
          >
            <span className="relative block aspect-[4/5]">
              <Photo
                src={photo.src}
                alt={photo.alt}
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </span>
          </button>
        ))}
      </div>
      <Lightbox
        photos={photos}
        index={index}
        onClose={() => setIndex(null)}
        onIndex={setIndex}
      />
    </>
  );
}
