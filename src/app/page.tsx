import Link from "next/link";
import { site } from "@config/site";
import { categories, products } from "@data/products";
import { homeLookbook, instagramThumbs } from "@data/lookbook";
import { LookbookGrid } from "@/components/lookbook-grid";
import { Marquee } from "@/components/marquee";
import { Photo } from "@/components/photo";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

const featured = ["baggy", "shirts", "outfits", "hoodies"] as const;

export default function HomePage() {
  const drops = products.filter((product) => product.isNew);
  const extra = categories.filter(
    (category) => category.slug === "gorras" || category.slug === "calzado",
  );

  return (
    <>
      <section className="relative min-h-[100svh] bg-ink">
        <div className="grid min-h-[100svh] md:grid-cols-12">
          <div className="relative min-h-[100svh] md:col-span-7">
            <Photo
              src={site.hero.image}
              alt={site.hero.imageAlt}
              sizes="(max-width: 768px) 100vw, 58vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />
          </div>
          <div className="hidden md:col-span-5 md:grid md:grid-rows-2">
            {site.hero.side.map((photo) => (
              <div key={photo.src} className="relative">
                <Photo src={photo.src} alt={photo.alt} sizes="42vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <Reveal immediate className="absolute inset-x-0 bottom-0 z-10 px-4 pb-24 md:px-8 md:pb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-alien">
            {site.location} {site.emoji}
          </p>
          <h1 className="max-w-full font-display text-[clamp(3.4rem,16vw,7.5rem)] uppercase leading-[0.82] text-bone">
            Streetwear
            <br />
            sin reglas
          </h1>
          <p className="mt-3 max-w-md text-sm text-bone/80 md:text-base">{site.hero.subtitle}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/shop"
              className="bg-alien px-5 py-3 text-center font-display text-2xl tracking-wide text-ink hover:bg-bone sm:w-auto"
            >
              Ver catálogo
            </Link>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-bone/40 px-5 py-3 text-center font-display text-2xl tracking-wide text-bone hover:border-alien hover:text-alien"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </Reveal>
        <span className="absolute right-4 top-24 -rotate-3 bg-alien px-3 py-2 font-display text-2xl tracking-wide text-ink md:right-8">
          NEW DROP
        </span>
      </section>

      <Marquee />

      <Reveal>
      <section className="px-4 py-14 md:px-8" aria-labelledby="categorias">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <h2 id="categorias" className="type-display min-w-0">
            Elige tu calle
          </h2>
          <Link href="/shop" className="text-xs uppercase tracking-[0.18em] text-muted hover:text-alien">
            Ver todo
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {featured.map((slug) => {
            const category = categories.find((item) => item.slug === slug);
            if (!category) return null;
            return (
              <Link
                key={category.slug}
                href={`/shop/${category.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-panel md:aspect-[16/11]"
              >
                <Photo
                  src={category.image}
                  alt={category.imageAlt}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent transition group-hover:bg-ink/35" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="font-display text-[clamp(2.8rem,12vw,4.5rem)] uppercase leading-none">{category.name}</p>
                  <p className="mt-2 max-w-xs text-sm text-bone/80">{category.blurb}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {extra.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="group relative block aspect-[16/8] overflow-hidden bg-panel"
            >
              <Photo
                src={category.image}
                alt={category.imageAlt}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/35 transition group-hover:bg-ink/50" />
              <p className="absolute bottom-4 left-4 right-4 font-display text-[clamp(2.4rem,10vw,3.5rem)] uppercase leading-none">{category.name}</p>
            </Link>
          ))}
        </div>
      </section>
      </Reveal>

      <section className="py-6" aria-labelledby="new-drop">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 px-4 md:px-8">
          <h2 id="new-drop" className="type-display min-w-0">
            New drop
          </h2>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Desliza</p>
        </div>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 md:px-8">
          {drops.map((product) => (
            <div key={product.id} className="w-[68%] shrink-0 snap-start sm:w-[42%] lg:w-[24%]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 md:px-8" aria-labelledby="lookbook">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <h2 id="lookbook" className="type-display min-w-0">
            Lookbook
          </h2>
          <Link href="/lookbook" className="text-xs uppercase tracking-[0.18em] text-muted hover:text-alien">
            Ver feed
          </Link>
        </div>
        <LookbookGrid photos={homeLookbook} />
      </section>

      <section className="grid md:grid-cols-2" aria-labelledby="tienda">
        <div className="relative min-h-[420px]">
          <Photo
            src={site.storeImage.src}
            alt={site.storeImage.alt}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-12 md:px-10">
          <p className="text-xs uppercase tracking-[0.22em] text-alien">La tienda</p>
          <h2 id="tienda" className="type-display mt-2">
            {site.location}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Paredes de pósters, racks llenos y el piso de madera donde armamos los flat lays.
            Pasa por el local o pide y te lo mandamos.
          </p>
          <p className="mt-6 text-sm">{site.hours}</p>
          <p className="text-xs text-muted">{site.hoursNote}</p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-fit border border-globe px-4 py-3 font-display text-2xl tracking-wide text-bone hover:bg-globe"
          >
            Cómo llegar
          </a>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8" aria-labelledby="como">
        <h2 id="como" className="type-display">
          Cómo comprar
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Elige tu pieza", "Mira talla, foto y precio. Agrégala al carrito o pídela sola."],
            ["02", "Escríbenos por WhatsApp", "El mensaje sale armado con lo que escogiste. Nosotros confirmamos."],
            ["03", "Te lo enviamos", "A Santo Domingo o a cualquier provincia. También puedes pasar por la tienda."],
          ].map(([step, title, text]) => (
            <li key={step} className="border-t border-white/15 pt-4">
              <p className="font-display text-5xl text-alien">{step}</p>
              <h3 className="mt-2 font-display text-3xl uppercase tracking-wide">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-4 pb-16 md:px-8" aria-labelledby="ig">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <h2 id="ig" className="type-display min-w-0">
            Síguenos @{site.handle}
          </h2>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.18em] text-alien"
          >
            Instagram
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
          {instagramThumbs.map((photo) => (
            <a
              key={photo.src}
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={photo.alt}
              className="relative block aspect-[4/5] overflow-hidden bg-panel"
            >
              <Photo src={photo.src} alt={photo.alt} sizes="(max-width: 768px) 33vw, 16vw" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
