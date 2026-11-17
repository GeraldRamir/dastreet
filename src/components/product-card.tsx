import Link from "next/link";
import type { Product } from "@data/products";
import { Photo } from "@/components/photo";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const hover = product.images[1];
  return (
    <article>
      <Link
        href={`/producto/${product.slug}`}
        className="group block focus-visible:outline-offset-4"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-panel">
          <Photo
            src={product.images[0]}
            alt={product.alt}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition duration-500 group-hover:scale-105 ${hover ? "group-hover:opacity-0" : ""}`}
          />
          {hover ? (
            <Photo
              src={hover}
              alt=""
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
          ) : null}
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {product.isNew ? (
              <span className="-rotate-2 bg-alien px-2 py-1 font-display text-lg leading-none tracking-wide text-ink">
                NEW DROP
              </span>
            ) : null}
            {product.soldOut ? (
              <span className="bg-bone px-2 py-1 font-display text-lg leading-none tracking-wide text-ink">
                AGOTADO
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-1 pt-3 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-sm uppercase leading-tight tracking-wide text-bone">{product.name}</h3>
          <p className="text-sm text-muted">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
