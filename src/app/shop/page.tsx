import type { Metadata } from "next";
import { ShopBrowser } from "@/components/shop-browser";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Catálogo de Da'Street 92: baggy, shirts, outfits, hoodies, gorras y calzado. Pide por WhatsApp.",
};

export default function ShopPage() {
  return (
    <div className="pt-16">
      <header className="px-4 pt-8 md:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-alien">Shop</p>
        <h1 className="type-display">Catálogo</h1>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Precios de ejemplo en RD$. Cuando tengas el precio real, cámbialo en el archivo de productos.
        </p>
      </header>
      <ShopBrowser category="all" />
    </div>
  );
}
