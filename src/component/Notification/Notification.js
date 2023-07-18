
import './Notification.css'
import { MdNotificationsActive, MdNotificationAdd } from 'react-icons/md';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import data from './data.json';



const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModel, setShowModal] = useState(false);
    const [notifications, setNotifications] = useState(data);

    const handleNotificationClick = () => {
        setIsOpen(true);
        setShowModal(true);
        // console.log(data)

    };
    const handleCloseModal = () => {
        setIsOpen(false);
        setShowModal(false)
    };
    const handleCloseAndClearModal = () => {
        setIsOpen(false);
        setShowModal(false);
        setNotifications([])
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
                {notifications.length ? <span className="notification-icon"><MdNotificationsActive /></span> : <span className="notification-icon"><MdNotificationAdd /></span>}
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
                                        <div class="row">
                                            <div className='col'>
                                                <h4><strong>{notifi.title}</strong></h4>
                                            </div>
                                            <div className='col'>
                                                <h6>{notifi.date}</h6>
                                                <p>{notifi.message}
                                                    <br />
                                                    <a href={notifi.url}>more...</a></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleCloseAndClearModal}>All Clear</Button>
                        {notifications.length ? <Button variant="secondary" onClick={handleCloseModal}>
                            बंद
                        </Button> : ''}
                    </Modal.Footer>
                </Modal>
            </Carousel>
        </div>

    );
};

export default Notification;
