// Products.js
import React from "react";
import ProductCard from "../ProductCard/ProductCard"; // Import the ProductCard component
import "./Products.css"; // Import styles for the Products component
import { useNavigate } from "react-router-dom"; // For navigation
import { products } from "../../data"; // Import centralized product data

const Products = () => {
  const navigate = useNavigate();

  const handleMoreDetails = (skuId) => {
    navigate(`/product/${skuId}`); // Navigate to product details page
  };

  return (
    <div style={{backgroundColor: "#f9f9f9"}}>
    <h1 className='d-flex justify-content-center pt-5' >Our Standees</h1>
    <div className="products-container">
      
      {products.map((product) => (
        <ProductCard
          key={product.id} // Using `id` from the centralized data
          product={product}
          onMoreDetails={() => handleMoreDetails(product.id)} // Pass `id` for navigation
        />
      ))}
    </div>
    </div>
    
  );
};

export default Products;
