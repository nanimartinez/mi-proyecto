'use client';
import ProductList from './components/ProductList.js'; 
import { db } from './context/firebaseConfig.js';
import { collection, getDocs, addDoc } from "firebase/firestore";
import  CartContext  from './context/cartContext.js';// Importa el contexto CartContext
import { use, useContext } from 'react';         
import products from './data/product';

export default function HomePage() {
  const { agregarProductos } = useContext(CartContext);
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-pink-600">
          Bienvenidos a nuestra Tienda de Cosméticos
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Descubre nuestros productos de alta calidad para resaltar tu belleza. Encuentra el producto perfecto para ti.
        </p>
        <ProductList products={products} />
        <h1 className="text-4xl font-bold mb-8 text-center text-pink-600"> Vas a agregar los productos a tu bd</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={agregarProductos}>Agregar</button>
      </main>
      
    </div>
  );
}