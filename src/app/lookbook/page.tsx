import type { Metadata } from "next";
import { lookbook } from "@data/lookbook";
import { LookbookGrid } from "@/components/lookbook-grid";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "Fotos de la tienda, la calle y los outfits de Da'Street 92 en Santo Domingo Este.",
};

export default function LookbookPage() {
  return (
    <div className="px-4 pb-16 pt-24 md:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-alien">Feed</p>
      <h1 className="type-display">Lookbook</h1>
      <p className="mt-3 max-w-xl text-sm text-muted">
        La tienda, el piso de madera y la calle. Toca una foto para verla grande. Con el teclado,
        usa las flechas y Escape.
      </p>
      <div className="mt-8">
        <LookbookGrid photos={lookbook} />
      </div>
    </div>
  );
}
