import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import {products} from '../../data'
import './ProductSlider.css'

const CarouselContainer = styled.div`
  height: 65vh;
  width: 90%;
  margin: auto;
  padding: 40px 20px; 
`;

const ProductSlider = () => {
    const [selectedproduct, setSelectedproduct] = useState(null);

    const trendingProducts= products.filter(product => product.type === "trending")
 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      arrows: true,
    };
  
    return (
      <>
      <h1 className='d-flex'>Most Selling</h1>
        <CarouselContainer className='carousel-container'>
          <Slider {...settings}>
            {trendingProducts.map((product) => (
              <div className="carousel-trending-item" key={product.id}>
                <div className="gradient-container">
                  {/* Left Content */}
                  <div className="content">
                    <h3 className="product-name">{product.title}</h3>
                    <p className="property-type">{product.description}</p>
                    <button
                      className="more-details"
                    >
                      More Details
                    </button>
                  </div>
                  {/* Right Image */}
                  <div className="image-container">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="property-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </CarouselContainer>
      </>
    );
}

export default ProductSlider
