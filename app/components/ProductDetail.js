import Image from 'next/image';
import styles from '../../styles/globals.css';

export function ProductDetail({ product }) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto mx-auto"
        />
        <p className="text-xl text-gray-700 my-4">Precio: ${product.price}</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Añadir al carrito
        </button>
      </div>
    );
  }
  
