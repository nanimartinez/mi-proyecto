const products = [
  {
    name: "Labial Rojo Intenso",
    price: 3200,
    quantity: 50,
    category: "labial",
    image: "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546015/IMG-20241218-WA0039_sau4vo.jpg",
    description: "Un labial rojo clásico y vibrante que ofrece un acabado mate de larga duración. Ideal para cualquier ocasión, desde un look casual hasta una noche elegante."
  },
  {
    name: "Base Líquida Tonalidad Clara",
    price: 4500,
    quantity: 30,
    category: "base",
    image: "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546015/IMG-20241218-WA0032_giqokd.jpg",
      description: "Una base líquida ligera con tonalidad clara que proporciona una cobertura natural y uniforme. Perfecta para pieles claras, dejando un acabado suave y luminoso."
  },
  {
    name: "Base Mate Tonalidad Media",
    price: 4700,
    quantity: 40,
    category: "base",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546015/IMG-20241218-WA0031_khzi1r.jpg",
      description: "Base de maquillaje mate de cobertura media con una tonalidad media. Controla el brillo y proporciona una apariencia impecable y sin imperfecciones."
  },
  {
    name: "Labial Rosa Suave",
    price: 3000,
    quantity: 60,
    category: "labial",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546015/IMG-20241218-WA0038_hjiwn4.jpg",
    description: "Un labial rosa suave con un acabado cremoso y cómodo. Ideal para el uso diario, aportando un toque dulce y natural a tus labios."
  },
  {
    name: "Base en Barra Tonalidad Oscura",
    price: 4300,
    quantity: 35,
    category: "base",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546015/IMG-20241218-WA0030_k4jkaa.jpg",
    description: "Una base en barra con una tonalidad oscura que ofrece una cobertura total y fácil aplicación. Perfecta para contornear y definir los rasgos."
  },
  {
    name: "Labial Coral Vibrante",
    price: 3400,
    quantity: 45,
    category: "labial",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546014/IMG-20241218-WA0037_hryz7p.jpg",
    description: "Un labial coral vibrante con un acabado satinado que aporta luminosidad y frescura al rostro. Ideal para los días soleados y eventos especiales."
  },
  {
    name: "Sombra Dorada Brillante",
    price: 2800,
    quantity: 25,
    category: "sombras",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546014/IMG-20241218-WA0027_rbxvtm.jpg",
     description: "Una sombra de ojos dorada brillante que aporta un toque de glamour a cualquier look. Ideal para resaltar los ojos en ocasiones especiales."
  },
  {
    name: "Base Líquida Tonalidad Beige",
    price: 4600,
    quantity: 20,
    category: "base",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546014/IMG-20241218-WA0029_atawfo.jpg",
    description: "Una base líquida con tonalidad beige que se adapta a muchos tonos de piel. Ofrece una cobertura media y un acabado natural para el uso diario."
  },
  {
    name: "Base Compacta",
    price: 4400,
    quantity: 30,
    category: "base",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546014/IMG-20241218-WA0028_zq0czn.jpg",
    description:"Una base compacta con cobertura modulable que proporciona un acabado mate impecable. Ideal para retoques rápidos durante el día."
  },
  {
    name: "Sombra Plateada",
    price: 2900,
    quantity: 15,
    category: "sombras",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546014/IMG-20241218-WA0024_bma3gm.jpg",
    description:"Una sombra de ojos plateada que añade un toque moderno y sofisticado a cualquier look. Perfecta para fiestas y eventos nocturnos."
  },
  {
    name: "Labial Desnudo",
    price: 3500,
    quantity: 55,
    category: "labial",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546014/IMG-20241218-WA0036_nipkik.jpg",
    description:"Un labial nude versátil que complementa cualquier tono de piel. Su fórmula hidratante deja los labios suaves y cómodos."
  },
  {
    name: "Base Fluida",
    price: 4700,
    quantity: 25,
    category: "base",
    image:
      "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546013/IMG-20241218-WA0035_ema9qs.jpg",
    description:"Una base fluida con una cobertura ligera y una sensación de segunda piel. Ideal para un maquillaje natural y fresco."
  },
    {
    name: "Sombra Rosa Pastel",
    price: 2700,
    quantity: 20,
    category: "sombras",
    image:
        "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546014/IMG-20241218-WA0026_gowiff.jpg",
     description: "Una sombra de ojos rosa pastel suave y delicada. Perfecta para crear looks románticos y femeninos."
  },
  {
      name: "Sombra Lila",
      price: 2600,
      quantity: 18,
      category: "sombras",
      image:
          "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546013/IMG-20241218-WA0022_mgt8kw.jpg",
      description: "Una sombra de ojos lila que añade un toque moderno y misterioso a tu mirada. Ideal para looks creativos."
  },
  {
      name: "Sombra Marrón Oscuro",
      price: 2750,
      quantity: 22,
      category: "sombras",
      image:
          "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546013/IMG-20241218-WA0023_wdvm4z.jpg",
      description: "Una sombra de ojos marrón oscuro versátil para crear looks ahumados y naturales. Ideal para definir la mirada."
  },
  {
      name: "Labial Rojo Clásico",
      price: 3300,
      quantity: 40,
      category: "labial",
      image:
          "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546013/IMG-20241218-WA0034_wu49gl.jpg",
      description:"Un labial rojo clásico que nunca pasa de moda. Su fórmula de larga duración deja los labios suaves y definidos."
  },
  {
    name: "Sombra Negra Intensa",
      price: 3000,
      quantity: 25,
      category: "sombras",
      image:
          "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546013/IMG-20241218-WA0021_jbe7kg.jpg",
      description:"Una sombra negra intensa que es perfecta para crear looks ahumados o como delineador. Un básico en cualquier kit de maquillaje."
  },
  {
      name: "Labial Fucsia",
      price: 3400,
      quantity: 48,
      category: "labial",
      image:
          "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546012/IMG-20241218-WA0033_lojdrp.jpg",
      description: "Un labial fucsia vibrante que aporta un toque de diversión y audacia a tus labios. Ideal para expresar tu personalidad."
  },
  {
      name: "Labial Vino",
      price: 3600,
      quantity: 35,
      category: "labial",
      image:
          "https://res.cloudinary.com/dp4gmtcvv/image/upload/v1734546012/IMG-20241218-WA0020_qqze3o.jpg",
      description:"Un labial vino sofisticado y elegante. Su fórmula cremosa aporta hidratación y color intenso."
  },
];

export default products;
  