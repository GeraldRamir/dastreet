/**
 * CATÁLOGO DE EJEMPLO — Da'Street 92
 *
 * Edita este archivo a mano. No hay backend.
 *
 * Cómo cambiar un producto:
 * - name: el nombre que ve el cliente.
 * - price: pesos dominicanos, sin símbolo. 2500 se muestra como RD$2,500.
 * - sizes: tops usan S–XL, pantalones 28–36, calzado 40–44, gorras "Única".
 * - images: rutas dentro de public/. La primera es la foto principal.
 *   La segunda aparece al pasar el mouse en la tarjeta.
 * - isNew: si es true, entra al carrusel "New Drop".
 * - soldOut: muestra AGOTADO y no deja agregarlo al carrito.
 * - category: "baggy" | "shirts" | "outfits" | "hoodies" | "gorras" | "calzado"
 *
 * Las fotos salen del feed en public/images/ig/. post-001.jpg es la más reciente.
 * Los nombres y precios son de ejemplo, sacados del tipo de pieza en la foto.
 * Reemplázalos por los reales antes de publicar.
 */

const img = (n: number) =>
  `/images/ig/post-${String(n).padStart(3, "0")}.jpg`;

const TOP = ["S", "M", "L", "XL"];
const PANT = ["28", "30", "32", "34", "36"];
const SHOE = ["40", "41", "42", "43", "44"];
const ONE = ["Única"];

export const categories = [
  {
    slug: "baggy",
    name: "Baggy",
    blurb: "Jeans anchos, lavados oscuros, bordados y nylon.",
    image: img(40),
    imageAlt: "Baggy de mezclilla clara con tribal blanco a los lados",
  },
  {
    slug: "shirts",
    name: "Shirts",
    blurb: "Gráficas vintage, polos rugby y camisas oversize.",
    image: img(12),
    imageAlt: "Camisa celeste de manga corta con bordado de flores de cerezo",
  },
  {
    slug: "outfits",
    name: "Outfits",
    blurb: "El look armado, listo para la calle.",
    image: img(6),
    imageAlt: "Outfit de calle con camisa blanca, corbata y pantalón de rayas",
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    blurb: "Zip-ups con grafismo, cruces y rhinestones.",
    image: img(3),
    imageAlt: "Dos zip-ups grises con cruces y calavera, sobre jeans negros",
  },
  {
    slug: "gorras",
    name: "Gorras",
    blurb: "Para cerrar el fit.",
    image: img(36),
    imageAlt: "Flat lay con gorra negra, camisa de cuadros y loafers",
  },
  {
    slug: "calzado",
    name: "Calzado",
    blurb: "Loafers de charol y botas de la tienda.",
    image: img(10),
    imageAlt: "Pared de loafers negros de charol en la tienda Da'Street 92",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  /** Pesos dominicanos. 2500 = RD$2,500 */
  price: number;
  sizes: string[];
  images: string[];
  isNew: boolean;
  soldOut: boolean;
  description: string;
  alt: string;
};

export const products: Product[] = [
  {
    id: "ds-001",
    slug: "joggers-amarillo-74",
    name: "Joggers Amarillo 74",
    category: "baggy",
    price: 2600,
    sizes: PANT,
    images: [img(2)],
    isNew: true,
    soldOut: false,
    description:
      "Joggers anchos en amarillo con estrella y número 74. Cintura con cordón, caída holgada.",
    alt: "Joggers amarillos anchos con gráfico negro y el número 74",
  },
  {
    id: "ds-002",
    slug: "zip-up-grafismo-gris",
    name: "Zip-up Grafismo Gris",
    category: "hoodies",
    price: 3800,
    sizes: TOP,
    images: [img(3)],
    isNew: true,
    soldOut: false,
    description:
      "Zip-up gris con cruces o calavera, según la pieza que quede. Confirma el gráfico por WhatsApp.",
    alt: "Zip-ups grises con cruces bordadas y estampado de calavera, sobre jeans negros",
  },
  {
    id: "ds-003",
    slug: "camiseta-grafica-vintage",
    name: "Camiseta Gráfica Vintage",
    category: "shirts",
    price: 1800,
    sizes: TOP,
    images: [img(4)],
    isNew: true,
    soldOut: false,
    description:
      "Camiseta blanca oversize con estampado de aula vintage. En la foto también se ve el resto del drop.",
    alt: "Camiseta blanca gráfica sobre piso de madera, con gorra, shorts y sneakers",
  },
  {
    id: "ds-004",
    slug: "outfit-workwear",
    name: "Outfit Workwear",
    category: "outfits",
    price: 4400,
    sizes: TOP,
    images: [img(5)],
    isNew: true,
    soldOut: false,
    description:
      "Camisa de rayas con pin, baggy oscuro y botas wheat. El precio es del conjunto de ejemplo.",
    alt: "Flat lay con jeans anchos, camisa azul de rayas, bolso café y botas wheat",
  },
  {
    id: "ds-005",
    slug: "outfit-calle-corbata",
    name: "Outfit Calle Corbata",
    category: "outfits",
    price: 4500,
    sizes: TOP,
    images: [img(6)],
    isNew: true,
    soldOut: false,
    description:
      "Camisa blanca corta, corbata negra y pantalón ancho de rayas. Look de calle en Santo Domingo.",
    alt: "Persona con camisa blanca, corbata y pantalón de rayas frente a una verja colonial",
  },
  {
    id: "ds-006",
    slug: "baggy-parches-camo",
    name: "Baggy Parches & Camo",
    category: "baggy",
    price: 3500,
    sizes: PANT,
    images: [img(7)],
    isNew: true,
    soldOut: false,
    description:
      "Selección de baggy: camuflaje, serpiente, script y parches. Dinos cuál de la foto quieres.",
    alt: "Varios jeans baggy con camuflaje, serpiente roja y bordados sobre piso de madera",
  },
  {
    id: "ds-007",
    slug: "polo-rugby-new-york",
    name: "Polo Rugby New York",
    category: "shirts",
    price: 2200,
    sizes: TOP,
    images: [img(8)],
    isNew: true,
    soldOut: false,
    description:
      "Polo rugby de rayas navy y crema con bordado rojo. Corte holgado, cuello blanco.",
    alt: "Polo rugby de rayas azul marino y crema junto a jeans oscuros y sneakers vino",
  },
  {
    id: "ds-008",
    slug: "loafers-charol",
    name: "Loafers Charol",
    category: "calzado",
    price: 3200,
    sizes: SHOE,
    images: [img(10)],
    isNew: true,
    soldOut: false,
    description:
      "Loafers de charol con suela gruesa. Hay varios herrajes en tienda: confirma el modelo por WhatsApp.",
    alt: "Nueve pares de loafers negros de charol exhibidos en el piso de la tienda",
  },
  {
    id: "ds-009",
    slug: "baggy-aguila",
    name: "Baggy Águila",
    category: "baggy",
    price: 3000,
    sizes: PANT,
    images: [img(11)],
    isNew: false,
    soldOut: false,
    description:
      "Baggy negro con águila gris en la pierna. Tiro alto y basta ancha.",
    alt: "Tres jeans de muestra, el de la derecha negro y ancho con un águila gris",
  },
  {
    id: "ds-010",
    slug: "camisa-cerezo",
    name: "Camisa Cerezo",
    category: "shirts",
    price: 2400,
    sizes: TOP,
    images: [img(12)],
    isNew: true,
    soldOut: false,
    description:
      "Camisa celeste de manga corta con rama de cerezo bordada. Cuello camp y botones perlados.",
    alt: "Camisa celeste bordada con flores de cerezo, abierta sobre piso de madera",
  },
  {
    id: "ds-011",
    slug: "pantalon-cuerda-gris",
    name: "Pantalón Cuerda Gris",
    category: "baggy",
    price: 2400,
    sizes: PANT,
    images: [img(13)],
    isNew: false,
    soldOut: false,
    description:
      "Pantalón ancho gris con cuerda gruesa en la cintura. Tela suave, caída relajada.",
    alt: "Pantalón gris ancho con cordón de cuerda sobre piso de madera",
  },
  {
    id: "ds-012",
    slug: "outfit-formal-loafers",
    name: "Outfit Formal Loafers",
    category: "outfits",
    price: 3900,
    sizes: TOP,
    images: [img(14)],
    isNew: true,
    soldOut: false,
    description:
      "Camisa crema, corbata negra, pantalón de rayas y loafers bicolor. Listo para salir.",
    alt: "Flat lay formal con camisa crema, corbata, pantalón de rayas y loafers",
  },
  {
    id: "ds-013",
    slug: "outfit-heaven",
    name: "Outfit Heaven",
    category: "outfits",
    price: 4100,
    sizes: TOP,
    images: [img(15)],
    isNew: true,
    soldOut: false,
    description:
      "Camiseta gráfica deslavada, baggy negro con flores bordadas y sneakers rosa.",
    alt: "Camiseta gráfica gris, jeans negros con flores y sneakers rosa sobre madera",
  },
  {
    id: "ds-014",
    slug: "zip-up-negro-limited",
    name: "Zip-up Negro Limited",
    category: "hoodies",
    price: 3400,
    sizes: TOP,
    images: [img(17)],
    isNew: false,
    soldOut: false,
    description:
      "Zip-up negro con tipografía deslavada. En la foto viene con el jogger a juego; pregunta si queda el set.",
    alt: "Zip-up negro y jogger a juego con letras deslavadas sobre piso de madera",
  },
  {
    id: "ds-015",
    slug: "outfit-en-tienda",
    name: "Outfit En Tienda",
    category: "outfits",
    price: 3800,
    sizes: TOP,
    images: [img(18)],
    isNew: true,
    soldOut: false,
    description:
      "Zip-up negro, baggy claro y gorra. Así se ve el fit dentro del local.",
    alt: "Modelo en la tienda con zip-up negro, baggy claro y gorra, frente a los racks",
  },
  {
    id: "ds-016",
    slug: "polo-flamas",
    name: "Polo Flamas",
    category: "shirts",
    price: 2100,
    sizes: TOP,
    images: [img(20)],
    isNew: true,
    soldOut: false,
    description:
      "Polo de flamas y camisa casino, con jorts de denim. Elige la de arriba al escribirnos.",
    alt: "Dos polos gráficos con jorts de mezclilla gris sobre piso de madera",
  },
  {
    id: "ds-017",
    slug: "camisetas-grafica-duo",
    name: "Camisetas Gráfica Dúo",
    category: "shirts",
    price: 1900,
    sizes: TOP,
    images: [img(21), img(24)],
    isNew: false,
    soldOut: false,
    description:
      "Raglan blanca con gráfico de Texas o camiseta con círculo negro. Precio por pieza.",
    alt: "Dos camisetas gráficas blancas sobre baggy negro con flamas y script",
  },
  {
    id: "ds-018",
    slug: "baggy-flamas-negro",
    name: "Baggy Flamas Negro",
    category: "baggy",
    price: 3400,
    sizes: PANT,
    images: [img(22), img(21)],
    isNew: true,
    soldOut: false,
    description:
      "Baggy negro con flamas blancas a los lados. Lavado oscuro y basta ancha.",
    alt: "Jeans baggy negros con flamas blancas tribales en ambas piernas",
  },
  {
    id: "ds-019",
    slug: "polo-rayas-ofcl",
    name: "Polo Rayas OFCL",
    category: "shirts",
    price: 2100,
    sizes: TOP,
    images: [img(23)],
    isNew: false,
    soldOut: false,
    description:
      "Polo rugby oversize. Entra en negro/crema o en rayas sunset. Confirma el color.",
    alt: "Dos polos rugby oversize, uno negro con crema y otro naranja con rosa",
  },
  {
    id: "ds-020",
    slug: "camiseta-houston",
    name: "Camiseta Houston",
    category: "shirts",
    price: 1850,
    sizes: TOP,
    images: [img(24)],
    isNew: false,
    soldOut: false,
    description:
      "Raglan blanca con mangas negras y gráfico western. Corte boxy.",
    alt: "Camiseta raglan blanca con mangas negras y estampado de Texas",
  },
  {
    id: "ds-021",
    slug: "hoodie-rhinestone-gris",
    name: "Hoodie Rhinestone Gris",
    category: "hoodies",
    price: 4200,
    sizes: TOP,
    images: [img(25)],
    isNew: false,
    soldOut: false,
    description:
      "Hoodie gris con strass y rayas en la manga. En la foto está el jogger a juego.",
    alt: "Hoodie gris con pedrería y jogger a rayas junto a loafers negros",
  },
  {
    id: "ds-022",
    slug: "camisa-devotion",
    name: "Camisa Devotion",
    category: "shirts",
    price: 2450,
    sizes: TOP,
    images: [img(26)],
    isNew: false,
    soldOut: false,
    description:
      "Camisa negra de botones con lettering blanco y detalle de ángel. Manga corta.",
    alt: "Camisa negra gráfica, cargo negro y loafers sobre piso de madera",
  },
  {
    id: "ds-023",
    slug: "camiseta-caballo-vintage",
    name: "Camiseta Caballo Vintage",
    category: "shirts",
    price: 1900,
    sizes: TOP,
    images: [img(27)],
    isNew: false,
    soldOut: true,
    description:
      "Gráfica deslavada de caballo y carro. Pieza de ejemplo marcada como agotada.",
    alt: "Camiseta negra vintage con caballo, rayos y un carro rojo",
  },
  {
    id: "ds-024",
    slug: "baggy-worldwide",
    name: "Baggy Worldwide",
    category: "baggy",
    price: 3600,
    sizes: PANT,
    images: [img(28)],
    isNew: false,
    soldOut: false,
    description:
      "Baggy con lavado degradado, lettering grande y sellos bordados. Cordón en la cintura.",
    alt: "Jeans anchos con lavado azul degradado y letras grandes bordadas",
  },
  {
    id: "ds-025",
    slug: "jorts-flamas",
    name: "Jorts Flamas",
    category: "baggy",
    price: 2200,
    sizes: PANT,
    images: [img(29)],
    isNew: false,
    soldOut: false,
    description:
      "Jorts de mezclilla con flamas naranjas y basta deshilachada.",
    alt: "Shorts de mezclilla anchos con flamas bordadas en cada pierna",
  },
  {
    id: "ds-026",
    slug: "nylon-official",
    name: "Nylon Official",
    category: "baggy",
    price: 2800,
    sizes: PANT,
    images: [img(30), img(19)],
    isNew: true,
    soldOut: false,
    description:
      "Nylon negro ancho con lettering blanco a los lados y raya de contraste.",
    alt: "Pantalón de nylon negro con la palabra Official en blanco a los costados",
  },
  {
    id: "ds-027",
    slug: "camiseta-heavy",
    name: "Camiseta Heavy",
    category: "shirts",
    price: 1800,
    sizes: TOP,
    images: [img(31)],
    isNew: true,
    soldOut: false,
    description:
      "Camiseta blanca con salpicado y gráfico de camión. Corte oversize.",
    alt: "Camiseta blanca oversize con camión rojo, llamas y salpicaduras negras",
  },
  {
    id: "ds-028",
    slug: "hoodie-burgundy",
    name: "Hoodie Burgundy",
    category: "hoodies",
    price: 2800,
    sizes: TOP,
    images: [img(32)],
    isNew: false,
    soldOut: false,
    description:
      "Hoodie crop color vino con lettering en el pecho. Se usa con el jogger del mismo tono.",
    alt: "Hoodie burgundy corto y jogger a juego en un espejo de la tienda",
  },
  {
    id: "ds-029",
    slug: "baggy-script-negro",
    name: "Baggy Script Negro",
    category: "baggy",
    price: 3100,
    sizes: PANT,
    images: [img(33)],
    isNew: false,
    soldOut: true,
    description:
      "Baggy negro con script blanco en la pierna. Marcado agotado como ejemplo.",
    alt: "Jeans baggy negros puestos, con caligrafía blanca en la pierna izquierda",
  },
  {
    id: "ds-030",
    slug: "baggy-gris-claro",
    name: "Baggy Gris Claro",
    category: "baggy",
    price: 3000,
    sizes: PANT,
    images: [img(34)],
    isNew: false,
    soldOut: false,
    description:
      "Baggy gris lavado claro, tiro alto. En la foto se ve con hoodie crop.",
    alt: "Baggy gris claro puesto en una tienda de discos, con hoodie gris",
  },
  {
    id: "ds-031",
    slug: "outfit-polo-calavera",
    name: "Outfit Polo Calavera",
    category: "outfits",
    price: 4000,
    sizes: TOP,
    images: [img(35)],
    isNew: false,
    soldOut: false,
    description:
      "Polo negro con calavera tejida y baggy negro. El set de la foto.",
    alt: "Polo negro con calavera y jeans negros anchos sobre piso de madera",
  },
  {
    id: "ds-032",
    slug: "gorra-negra",
    name: "Gorra Negra",
    category: "gorras",
    price: 1400,
    sizes: ONE,
    images: [img(36)],
    isNew: false,
    soldOut: false,
    description:
      "Gorra negra de la esquina del flat lay. Cambia esta foto por un close-up cuando la tengas.",
    alt: "Flat lay con gorra negra, camisa de cuadros rojos, pantalón y loafers",
  },
  {
    id: "ds-033",
    slug: "polo-paloma",
    name: "Polo Paloma",
    category: "shirts",
    price: 2300,
    sizes: TOP,
    images: [img(37)],
    isNew: true,
    soldOut: false,
    description:
      "Polo de rayas menta y crema con paloma al frente. Manga corta, corte amplio.",
    alt: "Polo oversize de rayas verde agua con una paloma gráfica en el centro",
  },
  {
    id: "ds-034",
    slug: "longsleeve-gotico",
    name: "Longsleeve Gótico",
    category: "shirts",
    price: 2500,
    sizes: TOP,
    images: [img(38)],
    isNew: false,
    soldOut: false,
    description:
      "Manga larga negra con lettering gótico, strass y flamas en las mangas.",
    alt: "Camiseta de manga larga negra con letras góticas y pedrería",
  },
  {
    id: "ds-035",
    slug: "zip-up-perlas",
    name: "Zip-up Perlas",
    category: "hoodies",
    price: 3600,
    sizes: TOP,
    images: [img(39), img(18)],
    isNew: false,
    soldOut: false,
    description:
      "Zip-up negro con perlas en el borde de la capucha. Frente con marca pequeña o espalda con script.",
    alt: "Dos zip-ups negros con perlas en la capucha, sobre baggy claro y gris",
  },
  {
    id: "ds-036",
    slug: "baggy-tribal-azul",
    name: "Baggy Tribal Azul",
    category: "baggy",
    price: 3200,
    sizes: PANT,
    images: [img(40)],
    isNew: true,
    soldOut: false,
    description:
      "Baggy lavado claro con tribal blanco a los dos lados. La pieza que más se pide ancha.",
    alt: "Baggy azul claro con tribales blancos a los lados, puesto con suéter negro",
  },
  {
    id: "ds-037",
    slug: "nylon-racing",
    name: "Nylon Racing",
    category: "baggy",
    price: 2700,
    sizes: PANT,
    images: [img(41)],
    isNew: false,
    soldOut: false,
    description:
      "Pantalón de tapestry con carros, banderas y tipografía de carrera. Cintura elástica.",
    alt: "Pantalón ancho con estampado de autos de carrera, estrellas y letras grandes",
  },
  {
    id: "ds-038",
    slug: "outfit-duo-baggy",
    name: "Outfit Dúo Baggy",
    category: "outfits",
    price: 4200,
    sizes: TOP,
    images: [img(42)],
    isNew: false,
    soldOut: false,
    description:
      "Camisa gráfica con baggy claro, o polo calavera con baggy negro de ojales. Precio por look.",
    alt: "Dos outfits: camisa artística con baggy claro y polo calavera con baggy negro",
  },
  {
    id: "ds-039",
    slug: "zip-up-rojo",
    name: "Zip-up Rojo",
    category: "hoodies",
    price: 3900,
    sizes: TOP,
    images: [img(43)],
    isNew: false,
    soldOut: false,
    description:
      "Zip-up rojo con bordado pequeño en el pecho. En la foto va con el baggy de dragón.",
    alt: "Zip-up rojo y jeans negros con dragón rojo bordado",
  },
  {
    id: "ds-040",
    slug: "baggy-parches-2013",
    name: "Baggy Parches",
    category: "baggy",
    price: 3300,
    sizes: PANT,
    images: [img(44), img(7)],
    isNew: false,
    soldOut: false,
    description:
      "Baggy con parches, script en tela y números en la basta. Lavado medio.",
    alt: "Jeans anchos con parches circulares, script marrón y números en la pierna",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function isCategory(slug: string): slug is CategorySlug {
  return categories.some((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productsByCategory(slug: CategorySlug) {
  return products.filter((product) => product.category === slug);
}

export function relatedProducts(product: Product, count = 4) {
  const same = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );
  const rest = products.filter(
    (item) => item.category !== product.category && item.id !== product.id,
  );
  return [...same, ...rest].slice(0, count);
}
