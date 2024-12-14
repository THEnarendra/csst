import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import second from "../../assets/images/offers.jpg";
import second1 from "../../assets/images/offers.jpg";
import second2 from "../../assets/images/offers.jpg";
import second3 from "../../assets/images/offers.jpg";
import './OffersBanner.css'

export const OffersBanner = () => {
  function Image(props) {
    return (
      <img style={{ objectFit: "cover",opacity:0.3 }} className="img" src={props.img} />
    );
  }
  const arr = [
    {
      url: second,
      para: "Min. 40% off",
    },
    {
      url: second1,
      para: "Min. 40% off",
    },
    {
      url: second2,
      para: "Min. 40% off",
    },
    {
      url: second3,
      para: "Min. 40% off",
    },
  ];
  return (
    <div className="offers">
      <div className="f6">
        <Carousel
          controls={false}
          indicators
          interval={2500}
          pause={false}
        >
          {arr.map((data, i) => (
            <Carousel.Item >
              <div className="fram1" >
              <img
                className="offersImg"
                src={data.url}
                alt="First slide"
              />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default OffersBanner;
