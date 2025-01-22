import ProductList from './components/ProductList.js'; 
import products from './data/product.js';            
       

export default function HomePage() {
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
      </main>
      
    </div>
  );
}
