import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaTimes, FaBars, FaWhatsapp } from 'react-icons/fa';
import './Header.css';
import Login from "../signin/Login"
import Register from '../signup/Register';
const HeaderContainer = () => {
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
                    <a href='https://en.wikipedia.org/wiki/Shiv_Sena_(Uddhav_Balasaheb_Thackeray)' >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Shiv_Sena_(Uddhav_Balasaheb_Thackeray)_logo.svg/360px-Shiv_Sena_(Uddhav_Balasaheb_Thackeray)_logo.svg.png" width="70" alt='Not found icon' />
                    </a>
                </div>
            </div>
            <br />
            <br />
            <div className="social-media">
                {/* <div className="menu-item" onClick={() => setShowRegisterModal(true)}><a>Resigeter</a></div>
                <div className="menu-item" onClick={() => setShowLoginModal(true)}><a>Login</a></div> */}
                <a className='social-media-icon' href='https://www.instagram.com/adinath_palve_99/'><FaInstagram /> </a>
                <a className='social-media-icon' href='https://www.facebook.com/profile.php?id=100012732132768'><FaFacebook /> </a>
                <a className='social-media-icon' href='https://wa.me/9921122627'><FaWhatsapp /> </a>
                <a className='social-media-icon'><FaTwitter /> </a>
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
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showLoginModel} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration Page</Modal.Title>
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
                    <div className="menu-item"><a className="nav-link active" href="/">Home</a></div>
                    <div className="menu-item"><a className="nav-link active" href="/">Photo</a></div>
                    <div className="menu-item"><a className="nav-link active" href="/">Work</a></div>
                    <div className="menu-item"><a className="nav-link active" href="/">contact Us</a></div>
                    <div className="menu-item"><a className="nav-link active" href="/">Feedback</a></div>
                    <div className="menu-item" onClick={() => setShowRegisterModal(true)}><a>Resigeter</a></div>
                    <div className="menu-item" onClick={() => setShowLoginModal(true)}><a>Login</a></div>
                </div>
            )}
        </div>

    );
};

export default HeaderContainer;