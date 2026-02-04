import React, { useRef, useEffect, useState } from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './Details.css'

export default function App({ slides = [] }) {
    const myElementRef = useRef(null);
    const [showTransaction, setShowTransaction] = useState(false);
    useEffect(() => {
        setShowTransaction(true);
    }, []);

    useEffect(() => {
        if (myElementRef.current) {
            const styles = window.getComputedStyle(myElementRef.current);
            if (!styles) {
                return MDBCarouselItem.setAttribute('style', `align-content: fixed`);
            }
        }
    }, []);

    return (
        <div ref={myElementRef}>
            <MDBCarousel showIndicators showControls fade dealy={900}>
                {slides.map((slide) => (
                    <MDBCarouselItem
                        key={slide.id}
                        className='w-100 d-md-block mt-50'
                        src={slide.src}
                        alt={slide.alt}
                        width={"100%"}
                        height={"600px"}
                    >
                        <div className='banner'>
                            <div className="container mb-5">
                                <div className="row">
                                    <div className="col-md-6 order-6 ">
                                        <div className={`text-transaction ${showTransaction ? 'show' : ''}`}>
                                            {slide.title && <h4>{slide.title}</h4>}
                                            {slide.description && <p className='color-red'>{slide.description}</p>}
                                        </div>
                                    </div>
                                    <div className="col-pt-6 " />
                                </div>
                            </div>
                        </div>
                    </MDBCarouselItem>
                ))}
            </MDBCarousel>

        </div>

    );
}
