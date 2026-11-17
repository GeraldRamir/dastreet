/**
 * Datos de la marca. Cambia WhatsApp, horario, textos y enlaces aquí.
 * El número va sin espacios ni guiones: 18498539709 (1 + 849 + número).
 */
export const site = {
  name: "Da'Street 92",
  shortName: "DASTREET 92",
  handle: "dastreet92",
  tagline: "DIOS LOS BENDIGA",
  description:
    "Streetwear en Santo Domingo Este. Baggy, gráficas, zip-ups y outfits. Envíos a todo el país. Pide por WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dastreet92.vercel.app",
  locale: "es_DO",
  emoji: "👽",
  phoneDisplay: "849-853-9709",
  phoneE164: "+18498539709",
  whatsappUrl: "https://wa.me/18498539709",
  instagram: "https://www.instagram.com/dastreet92/",
  location: "Santo Domingo Este",
  country: "República Dominicana",
  addressLine: "Santo Domingo Este, República Dominicana",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Santo%20Domingo%20Este%2C%20Rep%C3%BAblica%20Dominicana",
  /** Horario de ejemplo. Cámbialo cuando confirmes el horario real de la tienda. */
  hours: "Lun a sáb · 10:00 a.m. – 7:00 p.m.",
  hoursNote: "Horario de referencia. Confírmalo por WhatsApp antes de pasar.",
  shipping: "Envíos a todo el país",
  marquee: [
    "ENVÍOS A TODO EL PAÍS",
    "👽",
    "STREETWEAR",
    "🎱",
    "SANTO DOMINGO ESTE",
    "👽",
    "DIOS LOS BENDIGA",
  ],
  hero: {
    title: "Streetwear sin reglas",
    subtitle: "Santo Domingo Este · Envíos a todo el país",
    image: "/images/ig/post-006.jpg",
    imageAlt:
      "Look de calle en Santo Domingo: camisa blanca, corbata negra y pantalón ancho de rayas",
    side: [
      {
        src: "/images/ig/post-001.jpg",
        alt: "Interior de la tienda Da'Street 92 con racks de baggy y pared de pósters",
      },
      {
        src: "/images/ig/post-002.jpg",
        alt: "Joggers amarillos anchos frente a los racks de la tienda",
      },
    ],
  },
  storeImage: {
    src: "/images/ig/post-001.jpg",
    alt: "Local de Da'Street 92 en Santo Domingo Este, con jeans baggy y camisas en la pared",
  },
  ogImage: "/images/ig/post-006.jpg",
  deliveryOptions: [
    { id: "envio", label: "Envío a domicilio" },
    { id: "retiro", label: "Retiro en la tienda" },
  ],
  paymentNote:
    "Por ahora se coordina por WhatsApp. Aceptamos transferencia y efectivo contra entrega.",
  care: "Lava al revés, con agua fría, y no uses secadora. El estampado y los bordados duran más si los dejas secar a la sombra.",
  shippingDetail:
    "Mandamos a todo el país. El costo y el tiempo dependen de la provincia; te lo confirmamos por WhatsApp antes de salir el pedido.",
  sizeNote:
    "Medidas de referencia. La pieza real puede variar un poco según el lavado. Si estás entre dos tallas, escríbenos y te orientamos.",
  sizeGuide: {
    tops: [
      { size: "S", chest: "96 cm", length: "68 cm" },
      { size: "M", chest: "102 cm", length: "70 cm" },
      { size: "L", chest: "108 cm", length: "72 cm" },
      { size: "XL", chest: "114 cm", length: "74 cm" },
    ],
    pants: [
      { size: "28", waist: "71 cm" },
      { size: "30", waist: "76 cm" },
      { size: "32", waist: "81 cm" },
      { size: "34", waist: "86 cm" },
      { size: "36", waist: "91 cm" },
    ],
  },
  faq: [
    {
      q: "¿Hacen envíos?",
      a: "Sí, a todo el país. Te confirmamos el costo según tu sector o provincia antes de enviar.",
    },
    {
      q: "¿Puedo cambiar una pieza?",
      a: "Sí, si está sin uso y con la etiqueta. Escríbenos por WhatsApp dentro de los primeros 3 días y coordinamos el cambio. Este plazo es un placeholder: ajústalo a tu política real.",
    },
    {
      q: "¿Cómo sé mi talla?",
      a: "En cada producto hay una guía de medidas. Si dudas, mándanos tu talla de siempre y te decimos qué te queda mejor.",
    },
    {
      q: "¿Cómo pago?",
      a: "Por ahora el pedido se cierra por WhatsApp. Puedes pagar por transferencia o en efectivo contra entrega. Más adelante se puede conectar una pasarela.",
    },
  ],
  nav: [
    { href: "/shop", label: "Shop" },
    { href: "/shop/baggy", label: "Baggy" },
    { href: "/shop/shirts", label: "Shirts" },
    { href: "/shop/outfits", label: "Outfits" },
    { href: "/lookbook", label: "Lookbook" },
    { href: "/contacto", label: "Contacto" },
  ],
} as const;
