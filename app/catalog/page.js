"use client";

import ProductList from "../components/ProductList.js";
import products from "../data/product.js";

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex-grow p-6 w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-pink-600">
          Catálogo
        </h1>
        <ProductList products={products} />
      </main>
    </div>
  );
}