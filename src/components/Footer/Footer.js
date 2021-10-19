import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import useServices from '../../hooks/useServices';
const Footer = () => {

    const linkStyle = {
        marginRight: "5px",
        padding: '5px',
        textDecoration: "none",
        color: 'whitesmoke',
        pointer: 'cursor',
        fontWeight: "600",
        fontSize: "1.5em"
    };

    const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} />;
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />;
    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;

    return (
        <div className="footer-container">

            <div className="row gx-4">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <h3 className="my-5">Our Services</h3>
                    <div className="ul-container">
                        <ul className="list-unstyled ms-4">
                            <li> <NavLink className="footer-links" to="*">Teeth Cleaning</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Tooth Extractions</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Wisdom Tooth Removal</NavLink> </li>
                            <li> <NavLink className="footer-links" to="*">Children Dentistry</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Braces (Orthodontics)</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Dental Implants</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Smile Makeover</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Gum Sculpting</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Root Canal</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <h3 className="my-5">Our Doctors</h3>
                    <div className="ul-container">
                        <ul className="list-unstyled ms-4">
                            <li> <NavLink className="footer-links" to="*">Rafiqul Islam</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Jahangir Sikder</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Farzana Shakil</NavLink> </li>
                            <li> <NavLink className="footer-links" to="*">Suzana Khan</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Shaila Shahnaz</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Amir Hossain</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Md Gofran</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Shokat Ali</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Root Canal</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <h3 className="my-5">About Us</h3>
                    <div className="ul-container">
                        <ul className="list-unstyled ms-4">
                            <li> <NavLink className="footer-links" to="*">Our Clinic</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Career</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Photo Gallery</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Reviews</NavLink></li>

                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <h3 className="my-5">Opening Hours</h3>
                    <div className="ul-container">
                        <ul className="list-unstyled ms-4">
                            <li> <NavLink className="footer-links" to="*">Sunday : 8:00AM - 9:00PM</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Monday : 8:00AM - 9:00PM</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Tuesday : 8:00AM - 9:00PM</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Wednesday : 8:00AM - 9:00PM0</NavLink> </li>
                            <li> <NavLink className="footer-links" to="*">Thursday : 8:00AM - 5:00PM</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Friday : 5:00 PM - 11:00 PM</NavLink></li>
                            <li> <NavLink className="footer-links" to="*">Saturday : 4:00 PM - 11:00 PM</NavLink></li>
                        </ul>
                        <div className="text-start ms-5 my-5">
                            <NavLink style={linkStyle} to="/fb">{fbIcon}</NavLink>
                            <NavLink style={linkStyle} to="/youtube">{youtubeIcon}</NavLink>
                            <NavLink style={linkStyle} to="/twitter">{twitterIcon}</NavLink>
                            <NavLink style={linkStyle} to="/linkedin">{linkedInIcon}</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Footer;


