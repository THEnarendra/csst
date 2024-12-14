import Navbar from "../src/components/headerFooter/Navbar";
import Footer from "./components/headerFooter/Footer"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import ProductPage from "./components/ProductPage/ProductPage";
import Products from "./components/Products/Products";
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/products" element={<Products/>} />
        {/* <Route path="/services" element={<Services/>} /> */}
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
