import type { MetadataRoute } from "next";
import { site } from "@config/site";
import { categories, products } from "@data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-17");
  const staticRoutes = ["", "/shop", "/lookbook", "/contacto", "/carrito"].map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const categoryRoutes = categories.map((category) => ({
    url: `${site.url}/shop/${category.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const productRoutes = products.map((product) => ({
    url: `${site.url}/producto/${product.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
