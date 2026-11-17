import { site } from "@config/site";
import { formatPrice } from "@/lib/format";

export function whatsappLink(text: string) {
  return `${site.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export function productUrl(slug: string) {
  const origin =
    typeof window !== "undefined" ? window.location.origin : site.url;
  return `${origin}/producto/${slug}`;
}

export function productMessage(input: {
  name: string;
  size: string;
  price: number;
  slug: string;
  soldOut?: boolean;
}) {
  const intro = input.soldOut
    ? `Hola Da'Street 92 👽, ¿tienes disponible este producto?`
    : `Hola Da'Street 92 👽, quiero este producto:`;
  return `${intro} ${input.name} – Talla ${input.size} – ${formatPrice(input.price)}. ${productUrl(input.slug)}`;
}

export type OrderLine = {
  name: string;
  size: string;
  quantity: number;
  price: number;
};

export function orderMessage(input: {
  lines: OrderLine[];
  name: string;
  zone: string;
  delivery: string;
  note?: string;
}) {
  const rows = input.lines
    .map((line, index) => {
      const lineTotal = line.price * line.quantity;
      return `${index + 1}. ${line.name} – Talla ${line.size} – x${line.quantity} – ${formatPrice(lineTotal)}`;
    })
    .join("\n");
  const total = input.lines.reduce(
    (sum, line) => sum + line.price * line.quantity,
    0,
  );
  const note = input.note?.trim() ? `\nNota: ${input.note.trim()}` : "";
  return `Hola Da'Street 92 👽, quiero hacer este pedido:\n\n${rows}\n\nTotal: ${formatPrice(total)}\nNombre: ${input.name}\nSector / provincia: ${input.zone}\nEntrega: ${input.delivery}${note}`;
}
