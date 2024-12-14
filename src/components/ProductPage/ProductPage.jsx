import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { products } from "../../data"; // Import product data
import "./ProductPage.css"; // Add necessary styles

const ProductPage = () => {
  const { id } = useParams(); // Extract product ID from the URL
  const product = products.find((product) => product.id === parseInt(id)); // Find the product by ID

  return (
    <div className="product-page">
      {product ? (
        <div className="product-details">
          <div className="product-image-slider">
            <Carousel>
              {product.images.map((img, index) => (
                <Carousel.Item key={index}>
                    <div className="image-container">
                  <img
                    className="d-block w-100 carousel-img"
                    src={img}
                    alt={`Image ${index + 1}`}
                  />
                    </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="product-info-more">
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Dimensions:</strong> {product.standDimension}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Screen Size:</strong> {product.screenSize}</p>
            <p><strong>Touchscreen:</strong> {product.touchscreen}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductPage;
