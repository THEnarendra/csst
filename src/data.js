// data.js
import { img1, img2, img3, img4, img5, img7 } from "./assets/images/ProductImages";

export const products = [
  {
    type: "trending",
    id: 1,
    title: "Luxury Sofa",
    images: [img1, img2],
    screenSize: "60 inches",
    standDimension: "100x50 cm",
    material: "Leather",
    touchscreen: "No",
    price: "$999",
    description: "A luxurious leather sofa perfect for any modern living room."
  },
  {
    type: "trending",
    id: 2,
    title: "Modern Bed",
    images: [img3, img4],
    screenSize: "N/A",
    standDimension: "200x180 cm",
    material: "Wood",
    touchscreen: "No",
    price: "$799",
    description: "A stylish and modern wooden bed with a contemporary design."
  },
  {
    type: "trending",
    id: 3,
    title: "Elegant Chair",
    images: [img5, img7],
    screenSize: "N/A",
    standDimension: "50x50 cm",
    material: "Fabric",
    touchscreen: "No",
    price: "$199",
    description: "An elegant chair made from soft fabric, ideal for office spaces."
  }
  // Add more products as needed
];
