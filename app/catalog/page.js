"use client";

import ProductList from "../components/ProductList.js";
import products from "../data/product.js";
import { useState } from "react";

export default function CatalogPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Producto recibido en addToCart:", product);
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log("Carrito actualizado:", cart);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex-grow p-6 w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-pink-600">
          Catálogo
        </h1>
        {/* Pasa la función addToCart al componente ProductList */}
        <ProductList products={products} addToCart={addToCart} />
      </main>
    </div>
  );
}
