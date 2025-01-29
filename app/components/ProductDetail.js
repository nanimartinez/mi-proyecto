"use client";

import Image from 'next/image';
import { useContext } from 'react';
import CartContext from '../context/cartContext';

export default function ProductDetail({ product }) {
  const { addToCart } = useContext(CartContext);

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
      <p className="text-gray-800 my-4">{product.description}</p>
        <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Añadir al carrito
        </button>
    </div>
  );
}