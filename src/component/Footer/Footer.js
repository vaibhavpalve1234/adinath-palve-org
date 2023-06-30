import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="container" >
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <h4>Make Life Good</h4>
                        <p>
                            SantoshNage, <br />O.T. Section -3, <br />Ulhasnagar 421003
                        </p>
                        <p>+91-9921122627</p>
                    </div>
                    <div className="col-lg-4 text-center">
                    <p className='text-center'>&reg; 2023 Vaibhav palve &copy;</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <h4>connect Us !!</h4>
                        <p>
                            Social Media Application <br />
                            <div className='row'>
                                <a href='https://www.instagram.com/adinath_palve_99/'><FaInstagram /></a>
                                <a href='https://www.facebook.com/profile.php?id=100012732132768'><FaFacebook /></a>
                                <a href='https://wa.me/9921122627'><FaWhatsapp /></a>
                            </div>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer