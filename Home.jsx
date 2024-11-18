import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 50 },
  { id: 2, name: 'Product 2', price: 100 },
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to our Store</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
