import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Login from "../signin/Login"
import Register from '../signup/Register';

function Menu() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModel, setShowLoginModal] = useState(false);
  const handleCloseModal = () => {
    setShowRegisterModal(false)
    setShowLoginModal(false);
  };
  return (
    <div className='container'>
      <a><button type="submit" className="nav-link" onClick={() => setShowLoginModal(true)}>Login</button></a>
      <a><button type="submit" className="nav-link" onClick={() => setShowRegisterModal(true)}>Resigeter</button></a>
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
    </div>
  )
}

export default Menu







{/* <nav className="navbar navbar-expand-md bg-primary  rounded-3 ">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <a className="nav-link active" href="/Home">Home</a>
                                        <a className="nav-link active" href="/photo">Photo</a>
                                        <a className="nav-link active" href="/work">Work</a>
                                        <a className="nav-link active" href="/contact">contact Us</a>
                                        <a className="nav-link active" href="/feedback">Feedback</a>
                                        <a><button type="submit" className="nav-link" onClick={() => setShowLoginModal(true)}>Login</button></a>
                                        <a><button type="submit" className="nav-link" onClick={() => setShowRegisterModal(true)}>Resigeter</button></a>
                                    </div>
                                </div>
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
                        </nav> */}