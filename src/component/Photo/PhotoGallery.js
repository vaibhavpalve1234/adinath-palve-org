import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './PhotoGallery.css';

const PhotoGallery = () => {
    // Example photo data
    const photos = [
        {
            id: 1,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Beautiful sunset',
        },
        {
            id: 2,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Scenic landscape',
        },
        {
            id: 3,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Beautiful sunset',
        },
        {
            id: 4,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Scenic landscape',
        },
        {
            id: 1,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Beautiful sunset',
        },
        {
            id: 2,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Scenic landscape',
        },
        {
            id: 3,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Beautiful sunset',
        },
        {
            id: 4,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Scenic landscape',
        },

        {
            id: 1,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Beautiful sunset',
        },
        {
            id: 2,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Scenic landscape',
        },
        {
            id: 3,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Beautiful sunset',
        },
        {
            id: 4,
            src: 'https://tse3.mm.bing.net/th?id=OIP.cSZ41-Irnou3QjosvyxNCgAAAA&pid=Api&P=0&h=180',
            caption: 'Scenic landscape',
        },
    ];

    const [expandedImage, setExpandedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const handleImageClick = (image) => {
        setExpandedImage(image);
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
                    {photos.map((image) => (
                        <div key={image.id} className="image-item" >
                            <img
                                src={image.src}
                                alt={image.alt}
                                onClick={() => handleImageClick(image)} />
                        </div>
                    ))}
                    {expandedImage && (
                        <Modal show={showModal} onHide={handleCloseClick}>
                            <Modal.Header closeButton>
                                <Modal.Title>Image Description</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='card'>

                                    <img src={expandedImage.src} alt="not found" className="modal-image" />
                                    <div class="card-body">
                                        <p>{expandedImage.caption}</p>

                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleCloseClick}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
