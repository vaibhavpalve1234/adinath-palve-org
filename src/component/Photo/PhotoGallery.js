import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './PhotoGallery.css';
import Slider from './PhotoSlider';
const PhotoGallery = ({ photos = [], expandPhotoes = [] }) => {
    const [expandedImage, setExpandedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const handleImageClick = ({ image, i }) => {
        setExpandedImage({ image, i });
        setShowModal(true);
    };

    const handleCloseClick = () => {
        setExpandedImage(null);
        setShowModal(false);

    };

    return (
        <div className='display-flex'>
            <div className="multiple-video-player">
                <div className="video-list">
                    {photos.map((image, i) => (
                        <div key={image.id} className="image-item" >
                            <img
                                src={image.src}
                                alt={image.caption || `gallery-${image.id}`}
                                onClick={() => handleImageClick({ image, i })} />
                        </div>
                    ))}
                    {expandedImage && (
                        <Modal show={showModal} onHide={handleCloseClick}>
                            <Modal.Header closeButton>
                                <Modal.Title>Image Gallery</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Slider img={expandPhotoes[expandedImage.i] || expandedImage.image} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleCloseClick}>बंद</Button>
                            </Modal.Footer>
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
