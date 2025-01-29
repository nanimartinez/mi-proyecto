import products from "../../data/product";
import ProductDetail from "../../components/ProductDetail";

export default function ProductPage({ params }) {
  const product = products.find(
    (p) => p.name.toLowerCase().replace(/ /g, "-") === params.id
  );

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return <ProductDetail product={product} />;
}