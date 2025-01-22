import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>Mi Aplicación</title>
        <meta name="description" content="App de catálogo de productos" />
      </Head>
      <body>
        <Header />
        <main className="max-w-7xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
