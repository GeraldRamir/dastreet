"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@config/site";
import type { Product } from "@data/products";
import { Photo } from "@/components/photo";
import { formatPrice } from "@/lib/format";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import { useCart } from "@/store/cart";

export function ProductView({ product }: { product: Product }) {
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const [notice, setNotice] = useState("");
  const add = useCart((state) => state.add);
  const guideKind = product.sizes.includes("28")
    ? "pants"
    : product.sizes.includes("40")
      ? "shoes"
      : product.sizes[0] === "Única"
        ? "one"
        : "tops";

  function requireSize() {
    if (!size) {
      setNotice("Elige una talla para continuar.");
      return false;
    }
    setNotice("");
    return true;
  }

  function orderOnWhatsapp() {
    if (!requireSize()) return;
    const href = whatsappLink(
      productMessage({
        name: product.name,
        size,
        price: product.price,
        slug: product.slug,
        soldOut: product.soldOut,
      }),
    );
    window.open(href, "_blank", "noopener,noreferrer");
  }

  function addToCart() {
    if (product.soldOut) return;
    if (!requireSize()) return;
    add(product.id, size, qty);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
      <div>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto lg:hidden">
          {product.images.map((src, index) => (
            <div key={src} className="relative aspect-[4/5] w-[86%] shrink-0 snap-center bg-panel">
              <Photo src={src} alt={index === 0 ? product.alt : ""} sizes="86vw" />
            </div>
          ))}
        </div>
        <div className="hidden gap-3 lg:grid lg:grid-cols-[72px_minmax(0,1fr)]">
          <div className="flex flex-col gap-2">
            {product.images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(index)}
                className={`relative aspect-[4/5] overflow-hidden bg-panel ${
                  active === index ? "ring-2 ring-alien" : ""
                }`}
                aria-label={`Ver foto ${index + 1}`}
              >
                <Photo src={src} alt="" sizes="72px" />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] bg-panel">
            <Photo
              src={product.images[active] ?? product.images[0]}
              alt={product.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <p className="text-xs uppercase tracking-[0.22em] text-alien">{label(product.category)}</p>
        <h1 className="type-display mt-2">{product.name}</h1>
        <p className="mt-4 font-display text-4xl">{formatPrice(product.price)}</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{product.description}</p>

        <fieldset className="mt-6">
          <legend className="text-xs uppercase tracking-[0.18em] text-muted">Talla</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSize(item);
                  setNotice("");
                }}
                aria-pressed={size === item}
                className={`min-w-12 px-3 py-2 font-display text-2xl ${
                  size === item ? "bg-alien text-ink" : "border border-white/20 text-bone"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="mt-5 block text-xs uppercase tracking-[0.18em] text-muted">
          Cantidad
          <input
            type="number"
            min={1}
            max={9}
            value={qty}
            onChange={(event) => setQty(Math.max(1, Number(event.target.value) || 1))}
            className="mt-2 w-24 border border-white/15 bg-ink px-3 py-3 text-base normal-case tracking-normal text-bone"
          />
        </label>

        {notice ? (
          <p className="mt-4 text-sm text-alien" role="status">
            {notice}
          </p>
        ) : null}

        <div className="mt-6 grid gap-3">
          <button
            type="button"
            onClick={orderOnWhatsapp}
            className="bg-alien px-4 py-4 font-display text-3xl tracking-wide text-ink hover:bg-bone"
          >
            {product.soldOut ? "Preguntar por WhatsApp" : "Pedir por WhatsApp"}
          </button>
          <button
            type="button"
            onClick={addToCart}
            disabled={product.soldOut}
            className="border border-bone/30 px-4 py-4 font-display text-3xl tracking-wide text-bone hover:border-alien hover:text-alien disabled:cursor-not-allowed disabled:opacity-40"
          >
            {product.soldOut ? "Agotado" : "Agregar al carrito"}
          </button>
        </div>

        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          <details className="group py-4">
            <summary className="cursor-pointer font-display text-2xl tracking-wide">ENVÍOS</summary>
            <p className="pt-3 text-sm leading-relaxed text-muted">{site.shippingDetail}</p>
          </details>
          <details className="group py-4">
            <summary className="cursor-pointer font-display text-2xl tracking-wide">TALLAS</summary>
            <p className="pt-3 text-sm text-muted">{site.sizeNote}</p>
            {guideKind === "shoes" ? (
              <p className="pt-3 text-sm text-muted">Calzado del 40 al 44. Si usas media talla, escribe y te decimos.</p>
            ) : null}
            {guideKind === "one" ? (
              <p className="pt-3 text-sm text-muted">Talla única, ajustable.</p>
            ) : null}
            {guideKind === "tops" || guideKind === "pants" ? (
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs uppercase tracking-[0.14em] text-muted">
                    <tr>
                      <th className="py-2 pr-4">Talla</th>
                      <th className="py-2 pr-4">{guideKind === "pants" ? "Cintura" : "Pecho"}</th>
                      {guideKind === "tops" ? <th className="py-2">Largo</th> : null}
                    </tr>
                  </thead>
                  <tbody>
                    {(guideKind === "pants" ? site.sizeGuide.pants : site.sizeGuide.tops).map((row) => (
                      <tr key={row.size} className="border-t border-white/10">
                        <td className="py-2 pr-4">{row.size}</td>
                        <td className="py-2 pr-4">{"waist" in row ? row.waist : row.chest}</td>
                        {"length" in row ? <td className="py-2">{row.length}</td> : null}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </details>
          <details className="group py-4">
            <summary className="cursor-pointer font-display text-2xl tracking-wide">CUIDADO</summary>
            <p className="pt-3 text-sm leading-relaxed text-muted">{site.care}</p>
          </details>
        </div>

        <p className="mt-4 text-xs text-muted">
          ¿Dudas con la talla?{" "}
          <Link href="/contacto" className="text-bone underline">
            Escríbenos
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function label(category: Product["category"]) {
  const names: Record<Product["category"], string> = {
    baggy: "Baggy",
    shirts: "Shirts",
    outfits: "Outfits",
    hoodies: "Hoodies",
    gorras: "Gorras",
    calzado: "Calzado",
  };
  return names[category];
}
