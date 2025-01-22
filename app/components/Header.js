import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Inicio</Link></li>
          <li><Link href="/catalog" className="hover:underline">Catálogo</Link></li>
          <li><Link href="/cart" className="hover:underline">Carrito</Link></li>
          <li><Link href="/admin" className="hover:underline">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

