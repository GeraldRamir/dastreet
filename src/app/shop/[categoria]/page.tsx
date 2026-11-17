import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { categories, getCategory, isCategory } from "@data/products";
import { ShopBrowser } from "@/components/shop-browser";

export function generateStaticParams() {
  return categories.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) return { title: "Catálogo" };
  return {
    title: category.name,
    description: `${category.name} de Da'Street 92. ${category.blurb} Envíos a todo el país.`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  return (
    <Suspense fallback={<p className="px-4 pt-28 text-sm text-muted">Cargando categoría…</p>}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  if (!isCategory(categoria)) notFound();
  const category = getCategory(categoria);
  if (!category) notFound();

  return (
    <div className="pt-16">
      <header className="px-4 pt-8 md:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-alien">Shop</p>
        <h1 className="type-display">{category.name}</h1>
        <p className="mt-3 max-w-xl text-sm text-muted">{category.blurb}</p>
      </header>
      <ShopBrowser category={categoria} />
    </div>
  );
}
