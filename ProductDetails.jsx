import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details for ID: {id}</h1>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
