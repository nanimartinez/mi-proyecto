/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // Incluir todos los archivos en el directorio `app`
    './app/components/**/*.{js,ts,jsx,tsx}', // Componentes reutilizables
    './app/catalog/**/*.{js,ts,jsx,tsx}',    // Páginas del catálogo
    './app/cart/**/*.{js,ts,jsx,tsx}',       // Página del carrito
    './app/product/**/*.{js,ts,jsx,tsx}',    // Detalles de productos
    './app/data/**/*.{js,ts}',               // Archivos de datos si se usan en el renderizado
    './public/**/*.html',                    // Archivos en la carpeta `public`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
