"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { categories, products, type CategorySlug } from "@data/products";
import { ProductCard } from "@/components/product-card";

type SortKey = "new" | "asc" | "desc";

const priceBands = [
  { id: "all", label: "Todo precio", min: 0, max: 99999 },
  { id: "low", label: "Hasta RD$2,000", min: 0, max: 2000 },
  { id: "mid", label: "RD$2,000–3,000", min: 2000, max: 3000 },
  { id: "high", label: "RD$3,000–4,000", min: 3000, max: 4000 },
  { id: "top", label: "RD$4,000+", min: 4000, max: 99999 },
];

export function ShopBrowser({ category }: { category: CategorySlug | "all" }) {
  const [size, setSize] = useState("all");
  const [band, setBand] = useState("all");
  const [sort, setSort] = useState<SortKey>("new");

  const sizes = useMemo(() => {
    const pool =
      category === "all" ? products : products.filter((item) => item.category === category);
    return Array.from(new Set(pool.flatMap((item) => item.sizes)));
  }, [category]);

  const visible = useMemo(() => {
    const selectedBand = priceBands.find((item) => item.id === band) ?? priceBands[0];
    const filtered = products.filter((product) => {
      if (category !== "all" && product.category !== category) return false;
      if (size !== "all" && !product.sizes.includes(size)) return false;
      if (product.price < selectedBand.min || product.price > selectedBand.max) return false;
      return true;
    });
    return filtered.sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
      return a.id.localeCompare(b.id);
    });
  }, [category, size, band, sort]);

  return (
    <div className="px-4 py-8 md:px-8">
      <div className="flex gap-2 overflow-x-auto pb-4">
        <Chip href="/shop" active={category === "all"}>
          Todo
        </Chip>
        {categories.map((item) => (
          <Chip key={item.slug} href={`/shop/${item.slug}`} active={category === item.slug}>
            {item.name}
          </Chip>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-y border-white/10 py-4">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          <FilterButton active={size === "all"} onClick={() => setSize("all")}>
            Tallas
          </FilterButton>
          {sizes.map((item) => (
            <FilterButton key={item} active={size === item} onClick={() => setSize(item)}>
              {item}
            </FilterButton>
          ))}
        </div>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {priceBands.map((item) => (
            <FilterButton key={item.id} active={band === item.id} onClick={() => setBand(item.id)}>
              {item.label}
            </FilterButton>
          ))}
          <label className="ml-auto text-xs uppercase tracking-[0.16em] text-muted">
            <span className="sr-only">Ordenar</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              className="border border-white/15 bg-ink px-3 py-2 text-xs uppercase tracking-[0.14em] text-bone"
            >
              <option value="new">Nuevo</option>
              <option value="asc">Precio ↑</option>
              <option value="desc">Precio ↓</option>
            </select>
          </label>
        </div>
      </div>

      <p className="py-4 text-xs uppercase tracking-[0.18em] text-muted">
        {visible.length} {visible.length === 1 ? "pieza" : "piezas"}
      </p>

      {visible.length === 0 ? (
        <p className="py-16 text-muted">No hay piezas con esos filtros. Prueba otra talla o precio.</p>
      ) : (
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`shrink-0 px-4 py-2 font-display text-2xl tracking-wide ${
        active ? "bg-alien text-ink" : "border border-white/15 text-bone hover:border-alien"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap px-3 py-2 text-xs uppercase tracking-[0.14em] ${
        active ? "bg-bone text-ink" : "border border-white/10 text-muted hover:text-bone"
      }`}
    >
      {children}
    </button>
  );
}
