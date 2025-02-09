"use client";
import { useState, useContext } from 'react';
import Image from 'next/image';
import products from "../../data/product";
import CartContext from '../../context/cartContext';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(
      (p) => p.name.toLowerCase().replace(/ /g, "-") === id
  );

  const [quantity, setQuantity] = useState(1);
  // const { addToCart } = useContext(CartContext);


  if (!product) {
    return <p>Producto no encontrado</p>;
  }
    // const handleAddToCart = () => {
    //     addToCart({...product, quantity: parseInt(quantity,10) });
    // };

  return (
        <div className="max-w-2xl mx-auto text-center p-6">
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
            <div className="flex items-center justify-center my-4">
            <label htmlFor="quantity" className="mr-2">Cantidad:</label>
            <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                 /*onChange={(e) => setQuantity(e.target.value)}*/
                className="border rounded p-1 w-16 text-black"
                disabled
            />
            </div>
        {/* <button onClick={handleAddToCart} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                Añadir al carrito
            </button> */}
        </div>
  );
}