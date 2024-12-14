import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        Have questions or inquiries? We’re here to help! Reach out to us through the following channels, and our team will get back to you promptly.
      </p>
      <ul>
        <li><strong>Email:</strong> info@capitalshiningstar.com</li>
        <li><strong>Phone:</strong> +91-9876543210</li>
        <li><strong>Address:</strong> Plot No. 123, Industrial Area, Jaipur, Rajasthan</li>
      </ul>
      <h2>Why Choose Us?</h2>
      <p>
        At Capital Shining Star Trading Company, we value our customers and strive to provide the best service. Whether you have a question or need a tailored solution, we are here to assist you every step of the way.
      </p>
    </div>
  );
};

export default ContactUs;