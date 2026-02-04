import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTimes, FaBars, FaWhatsapp } from 'react-icons/fa';
import './Header.css';
import Login from "../signin/Login"
import Register from '../signup/Register';
import Notification from '../Notification/Notification';

const iconsById = {
    instagram: FaInstagram,
    facebook: FaFacebook,
    whatsapp: FaWhatsapp,
};

const HeaderContainer = ({ content }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModel, setShowLoginModal] = useState(false);
    const handleCloseModal = () => {
        setShowRegisterModal(false)
        setShowLoginModal(false);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="header">
            <div className="logo">
                <div className="position-absolute top-0 start-50 translate-middle-z">
                    {/**if you want to make icon in first position <div className="position-absolute top-0 start-0 translate-middle-z">  use above tag*/}
                    <a href={content?.logo?.href} >
                        <img
                            src={content?.logo?.src}
                            width={content?.logo?.width}
                            alt={content?.logo?.alt || 'Not found icon'}
                        />
                    </a>
                </div>
            </div>
            <br />
            <br />
            <div className="social-media">
                {content?.socialLinks?.map((link) => {
                    if (link.type === 'notification') {
                        return (
                            <span key={link.id} className='social-media-icon'>
                                <Notification />
                            </span>
                        );
                    }
                    const Icon = iconsById[link.id];
                    return (
                        <a
                            key={link.id}
                            className='social-media-icon'
                            href={link.href}
                            aria-label={link.label}
                        >
                            {Icon ? <Icon /> : null}
                        </a>
                    );
                })}

            </div>
            <div className="burger-menu" onClick={toggleMenu}>
                {showMenu ? <FaTimes /> : <FaBars />}
            </div>
            <Modal show={showRegisterModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration Page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Register />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                    बंद
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showLoginModel} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {showMenu && (
                <div className="responsive-menu">
                    {content?.menuItems?.map((item) => (
                        <div
                            key={item.id}
                            className="menu-item"
                            onClick={item.action === 'register' ? () => setShowRegisterModal(true) : undefined}
                        >
                            <a className="nav-link active" href={item.href}>
                                {item.label}
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default HeaderContainer;
