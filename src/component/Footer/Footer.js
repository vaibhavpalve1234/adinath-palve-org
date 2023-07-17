import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'
import Contact from '../contact/Contact';
import PostForm from '../Map/Map';

function Footer() {
    return (
        <div className='footer'>
            <div className="container" >
                <br />
                <div className="row mt-1">
                    <div className="col-lg-4 text-center">
                        <h4><strong>Address</strong></h4>
                        <p>
                            <strong>ShivSena Shakha,</strong>
                            <br/><strong>SantoshNagar, </strong>  
                            <br /><strong>O.T. Section -3,</strong>  
                            <br /><strong>Ulhasnagar-421003</strong> 
                        </p>
                        <h6>+91-9921122627</h6>
                        <hr />
                        <h4>connect Us !!</h4>
                        <p>
                            <strong>Social Media Application</strong><br />
                        </p>
                        <div className="social-mediai-footer">
                            <a className='social-media-icon' href='https://www.instagram.com/adinath_palve_99/'><FaInstagram /></a>
                            <a className='social-media-icon' href='https://www.facebook.com/profile.php?id=100012732132768'><FaFacebook /></a>
                            <a className='social-media-icon' href='https://wa.me/9921122627/?text=`Please add me in "आदिनाथ पालवे मित्र मंडळ 🚩"`'><FaWhatsapp /></a>
                            <a className='social-media-icon'><FaTwitter /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <Contact />
                    </div>
                    <div className="col-lg-4 text-center">
                        <PostForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer