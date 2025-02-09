"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductList({ products }) {

  if (!products || products.length === 0) {
    return <p className="text-center text-gray-700">No hay productos disponibles.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => {
          const slug = product.name.toLowerCase().replace(/ /g, "-");
          return (
            <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg flex flex-col items-center text-center"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-40 h-40 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mt-4">{product.name}</h2>
                <p className="text-gray-700 mb-4">${product.price}</p>
                {/* <Link href={`/product/${slug}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Detalles
                </Link> */}
            </div>
      )})}
    </div>
  );
}