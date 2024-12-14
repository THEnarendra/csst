import Carousel from 'react-bootstrap/Carousel';
import fb from '../assets/images/background.jpg'
import cart from '../assets/images/5192479.jpg'
import OffersBanner from '../components/OfferBanner/OffersBanner';
import Products from '../components/Products/Products';
import StandeeSlider from '../components/StandeeSlider/StandeeSlider';
import ProductSlider from '../components/ProductSlider/ProductSlider';
function Home() {
  return (
    <div>
    <OffersBanner/>
    {/* <p data-aos="fade-right" data-aos-duration="1000" className="f9" style={{cursor:"pointer"}} > Free Shipping For You Till Midnightbr <br /> <i className=" icon1 fa-solid fa-truck-fast"></i></p> */}
    <ProductSlider/>
    
    <Products/>


    <StandeeSlider/>
    </div>
  );
}

export default Home;