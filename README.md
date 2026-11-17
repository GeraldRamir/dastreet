# Da'Street 92

Catálogo web de la tienda en Santo Domingo Este. El cliente arma el pedido y lo envía por WhatsApp. No hay pasarela de pago.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Qué editar

| Qué | Dónde |
| --- | --- |
| WhatsApp, Instagram, horario, dirección, marquee, preguntas | `config/site.ts` |
| Productos, precios, tallas, fotos, agotado, new drop | `data/products.ts` |
| Fotos del lookbook | `data/lookbook.ts` |
| Logo | `public/logo.png` |
| Fotos del feed | `public/images/ig/post-001.jpg` … |

El número de WhatsApp está en `config/site.ts` como `whatsappUrl` (`https://wa.me/18498539709`). Si cambia el número, actualiza también `phoneDisplay` y `phoneE164`.

Los precios van en pesos, sin símbolo: `2500` se muestra como `RD$2,500`.

`isNew: true` mete la pieza en el carrusel de inicio. `soldOut: true` muestra AGOTADO y bloquea el carrito.

## Fotos

Las imágenes del zip quedaron en `public/images/ig/`. `post-001.jpg` es la publicación más reciente. En cada producto, la primera ruta es la foto principal y la segunda sale al pasar el mouse.

`next/image` las sirve en AVIF o WebP. Solo el hero carga con prioridad.

## Deploy en Vercel

1. Sube el proyecto a un repositorio de GitHub (el zip original no hace falta).
2. En [vercel.com](https://vercel.com) importa el repo. Framework: Next.js. No cambies el comando de build.
3. Agrega la variable `NEXT_PUBLIC_SITE_URL` con la URL final, por ejemplo `https://dastreet92.vercel.app`. Sirve para el sitemap, Open Graph y los enlaces del mensaje de WhatsApp cuando todavía no hay `window`.
4. Deploy.

## Más adelante

El carrito vive en el navegador (`localStorage`). Para cobrar en línea, el botón de WhatsApp se puede cambiar por un checkout de Shopify o Stripe sin rehacer el catálogo: los productos ya están en un solo archivo.
