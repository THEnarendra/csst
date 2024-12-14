    import React from 'react'
    import { Col, Row } from 'react-bootstrap'
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/effect-cards';
    import { EffectCards, Autoplay } from 'swiper/modules';
    import {img} from '../../assets/images/ProductImages'
    import './StandeeSlider.css'


    const StandeeSlider = () => {
    return (
        <Row className="align-items-center my-5">
    {/* Swiper Section */}
    <Col lg={6} md={12} className="text-center">
        <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="yourSwiper"
        >
        {img.map((image, index) => (
            <SwiperSlide
            key={index}
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
            >
            <img
                src={image.url}
                className="swiperImg"
                alt={image.alt || 'Project Image'}
                style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            />
            </SwiperSlide>
        ))}
        </Swiper>
    </Col>

    {/* Description Section */}
    <Col
        lg={6}
        md={12}
        className="d-flex flex-column justify-content-center text-start"
        style={{ paddingRight: '3rem' }} // Added padding for equal spacing
    >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>New Digital Era</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
        At <strong>Capital Shining Star Trading Company</strong>, we redefine elegance with our latest launched Digital Standees. From cozy residential spaces to dynamic commercial projects, our team creates environments that combine style, functionality, and comfort. Let's turn your vision into reality.
        </p>
        <button className='more-details-company-btn' >
        More About Our Company
        </button>
    </Col>
            </Row>
    )
    }

    export default StandeeSlider
