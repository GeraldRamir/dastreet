import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProduct, products, relatedProducts } from "@data/products";
import { ProductCard } from "@/components/product-card";
import { ProductView } from "@/components/product-view";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto" };
  return {
    title: product.name,
    description: `${product.name} · ${formatPrice(product.price)}. ${product.description}`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.images[0], alt: product.alt }],
    },
  };
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<p className="px-4 pt-28 text-sm text-muted">Cargando pieza…</p>}>
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = relatedProducts(product);

  return (
    <div className="px-4 pb-16 pt-24 md:px-8">
      <ProductView product={product} />
      <section className="mt-16" aria-labelledby="relacionados">
        <h2 id="relacionados" className="type-display">
          También te puede gustar
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
