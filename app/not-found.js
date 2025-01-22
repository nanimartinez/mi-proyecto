import Link from 'next/link';
export default function NotFoundPage() {
    return (
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
        <Link href="/" className="text-blue-500 hover:underline">Volver al inicio</Link>
      </div>
    );
  }
  