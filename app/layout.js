import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/globals.css';
import { CartProvider } from './context/cartContext';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>Mi Aplicación</title>
        <meta name="description" content="App de catálogo de productos" />
      </Head>
      <body>
        <CartProvider>
          <Header />
          <main className="max-w-7xl mx-auto p-6">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}