// ImageCarousel.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
    const images = [
        './assets/image/equipement-medical-1.jpeg',
        './assets/image/ambitions_salle_multi-média.webp',
        './assets/image/déchets trié.png'
    ];

    return (
        <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
            <Carousel interval={3000}>
                {images.map((src, index) => (
                    <Carousel.Item key={index}>
                        <img
                            src={src}
                            alt={`slide ${index}`}
                            style={{ width: '300px', height: '250px', objectFit: 'cover' }}
                            className="d-block w-100"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
