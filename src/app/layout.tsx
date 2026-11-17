import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import { site } from "@config/site";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsappFloat } from "@/components/whatsapp-float";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Da'Street 92 | Streetwear en Santo Domingo Este",
    template: "%s · Da'Street 92",
  },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    type: "website",
    locale: "es_DO",
    siteName: site.name,
    title: "Da'Street 92 | Streetwear en Santo Domingo Este",
    description: site.description,
    images: [
      {
        url: site.ogImage,
        alt: "Look de Da'Street 92 en la calle de Santo Domingo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Da'Street 92",
    description: site.description,
    images: [site.ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}${site.ogImage}`,
  telephone: site.phoneE164,
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santo Domingo Este",
    addressRegion: "Santo Domingo",
    addressCountry: "DO",
  },
  areaServed: "República Dominicana",
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${bebas.variable} ${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink text-bone">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-alien focus:px-3 focus:py-2 focus:text-ink"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <CartDrawer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
