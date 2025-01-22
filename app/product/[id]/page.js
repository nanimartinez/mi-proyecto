import products from "../../data/products";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.name.toLowerCase().replace(" ", "-") === params.id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <p className="text-lg text-gray-700">Precio: ${product.price}</p>
      <p className="text-sm text-gray-500">Cantidad disponible: {product.quantity}</p>
    </div>
  );
}
