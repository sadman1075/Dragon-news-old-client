import React from 'react';
import { Carousel } from 'react-bootstrap';
import Brand1 from '../../../Assets/Brands/Brand 1.jpg'
import Brand2 from '../../../Assets/Brands/Brand 2.jpg'

const BrandCarousel = () => {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block   w-100"
                        src={Brand1}
                        height={'300px'}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100"
                        src={Brand2}
                        height={'300px'}
                        alt="Second slide"
                    />

                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarousel;