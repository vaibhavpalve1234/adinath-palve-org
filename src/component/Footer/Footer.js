import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'
import Contact from '../contact/Contact';
import PostForm from '../Map/Map';

const iconsById = {
    instagram: FaInstagram,
    facebook: FaFacebook,
    whatsapp: FaWhatsapp,
    twitter: FaTwitter,
};

function Footer({ content }) {
    return (
        <div className='footer'>
            <div className="container" >
                <br />
                <div className="row mt-1">
                    <div className="col-lg-4 text-center">
                        <h4><strong>Address</strong></h4>
                        <p>
                            {content?.addressLines?.map((line) => (
                                <React.Fragment key={line}>
                                    <strong>{line}</strong>
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        <h6>{content?.phone}</h6>
                        <hr />
                        <h4>connect Us !!</h4>
                        <p>
                            <strong>Social Media Application</strong><br />
                        </p>
                        <div className="social-mediai-footer">
                            {content?.socialLinks?.map((link) => {
                                const Icon = iconsById[link.id];
                                return (
                                    <a
                                        key={link.id}
                                        className='social-media-icon'
                                        href={link.href || undefined}
                                        aria-label={link.label}
                                    >
                                        {Icon ? <Icon /> : null}
                                    </a>
                                );
                            })}
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
