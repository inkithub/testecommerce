import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/add-product">Add Product</Link> {/* New Link */}
      </nav>
    </header>
  );
};

export default Header;
