
import './Notification.css'
import { FaBell } from 'react-icons/fa';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';



const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModel, setShowModal] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Notification 1', title: "hello" },
        { id: 2, message: 'Notification 2', title: "hello" },
        { id: 3, message: 'Notification 3', title: "hello" }
    ]);

    const handleNotificationClick = () => {
        setIsOpen(true);
        setShowModal(true)
    };
    const handleCloseModal = () => {
        setIsOpen(false);
        setShowModal(false)
    };


    const removeNotification = (id) => {
        const updatedNotifications = notifications.filter(
            (notification) => notification.id !== id
        );
        setNotifications(updatedNotifications);
    };

    // Fetch or set notifications data as needed
    // For example, useEffect to fetch notifications from an API

    return (
        <div className="notification-container">
            <div className="notification" onClick={handleNotificationClick}>
                <span className="notification-icon"><FaBell /></span>
            </div>
            <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                dynamicHeight={true}
                emulateTouch={true}
                swipeable={true}
                infiniteLoop={true}
                selectedItem={0}
                className="carousel"
                dotContainerClassName="custom-dot-container"
                dotClassName="custom-dot" >
                <Modal show={showModel} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-center'>🔔</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {isOpen && (
                            <div className='card'>
                                {notifications.map((notifi, i) => (
                                    <div key={i} className='notification-card'>
                                        <h2>{notifi.title}</h2>
                                        <p>{notifi.message}</p>
                                        <Button className="close-btn" onClick={() => removeNotification(notifi.id)}>&times;</Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Carousel>
        </div>

    );
};

export default Notification;
