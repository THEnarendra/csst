// ProductCard.js
import React, { useState } from "react";
import { Carousel, Button, Card, Modal, Form } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai"; // For a close icon
import "./ProductCard.css";

const ProductCard = ({ product, onMoreDetails }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Card className="product-card">
        <Carousel className="product-carousel">
          {product.images.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 product-image"
                src={img}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title className="product-title">{product.title}</Card.Title>
          <div className="product-actions">
            <Button
              className="product-button more-details-btn"
              onClick={onMoreDetails}
            >
              More Details
            </Button>
            <Button
              className="product-button contact-now-btn"
              onClick={handleShow}
            >
              Contact Now
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Body className="modal-content-custom">
          <button className="close-btn" onClick={handleClose}>
            <AiOutlineClose size={24} />
          </button>
          <div className="modal-slider">
            <Carousel>
              {product.images.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 modal-image"
                    src={img}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="modal-details">
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <Form>
              <Form.Group className="mb-3" controlId="nameInput">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactInput">
                <Form.Label>Contact Info</Form.Label>
                <Form.Control type="text" placeholder="Enter your contact info" />
              </Form.Group>
              <Button variant="primary" className="submit-btn">
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductCard;