/**
 * Fotos de ambiente, tienda y outfits para el lookbook.
 * Agrega o quita rutas. Todas viven en public/images/ig/.
 */
const img = (n: number) =>
  `/images/ig/post-${String(n).padStart(3, "0")}.jpg`;

export type LookPhoto = {
  src: string;
  alt: string;
};

export const lookbook: LookPhoto[] = [
  {
    src: img(6),
    alt: "Look de calle con camisa blanca, corbata y pantalón de rayas en Santo Domingo",
  },
  {
    src: img(1),
    alt: "Interior de Da'Street 92 con racks de baggy y pared cubierta de pósters",
  },
  {
    src: img(2),
    alt: "Joggers amarillos anchos frente a los racks de ropa de la tienda",
  },
  {
    src: img(18),
    alt: "Fit con zip-up negro y baggy claro dentro del local",
  },
  {
    src: img(19),
    alt: "Nylon negro Official puesto, con los racks de fondo",
  },
  {
    src: img(34),
    alt: "Baggy gris claro y hoodie en una tienda de discos",
  },
  {
    src: img(32),
    alt: "Conjunto burgundy frente al espejo de la tienda",
  },
  {
    src: img(7),
    alt: "Selección de baggy con camo, parches y bordados en el piso de la tienda",
  },
  {
    src: img(10),
    alt: "Muro de loafers de charol con el letrero de Da'Street 92",
  },
  {
    src: img(40),
    alt: "Baggy tribal azul claro, detalle de la basta ancha",
  },
  {
    src: img(3),
    alt: "Zip-ups grises con cruces y calavera sobre jeans negros",
  },
  {
    src: img(15),
    alt: "Outfit gráfico con baggy de flores bordadas y sneakers rosa",
  },
  {
    src: img(5),
    alt: "Outfit workwear con camisa de rayas, baggy y botas",
  },
  {
    src: img(22),
    alt: "Baggy negro con flamas blancas a los lados",
  },
  {
    src: img(28),
    alt: "Baggy con lettering grande y lavado degradado",
  },
  {
    src: img(12),
    alt: "Camisa celeste con bordado de cerezo",
  },
  {
    src: img(37),
    alt: "Polo de rayas menta con gráfico de paloma",
  },
  {
    src: img(39),
    alt: "Zip-ups negros con perlas y dos baggy claros",
  },
  {
    src: img(25),
    alt: "Hoodie gris con rhinestones y jogger a juego",
  },
  {
    src: img(42),
    alt: "Dos outfits baggy armados en el piso de la tienda",
  },
  {
    src: img(35),
    alt: "Polo calavera con baggy negro",
  },
  {
    src: img(14),
    alt: "Look formal con camisa crema, corbata y loafers",
  },
];

export const homeLookbook = lookbook.slice(0, 12);

export const instagramThumbs = [
  lookbook[2],
  lookbook[0],
  lookbook[3],
  lookbook[7],
  lookbook[10],
  lookbook[8],
];
