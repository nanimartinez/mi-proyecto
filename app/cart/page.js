"use client";

import { useContext } from 'react';
import CartContext from '../context/cartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, calculateTotal } = useContext(CartContext);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex-grow p-6 w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-pink-600">
          Carrito de compras
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-700">Tu carrito está vacío.</p>
        ) : (
          <div className="w-full">
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="border p-4 rounded mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg">{item.name}</p>
                      <p className="text-gray-700">Precio: ${item.price}</p>
                      <p className="text-gray-700">Cantidad: </p>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.name, parseInt(e.target.value))
                        }
                        className="border rounded p-1 w-16"
                      />
                    </div>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold mt-4 text-center">
              Total a pagar: ${calculateTotal()}
            </p>
              <button className="bg-green-500 text-white px-4 py-2 block mt-4 rounded mx-auto">
                Pagar
             </button>
          </div>
        )}
      </main>
    </div>
  );
}