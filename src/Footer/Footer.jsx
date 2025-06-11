import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="Footer">
            <div className="Footer_Container">
                <div className="Footer_Content">
                    <div className="Footer_Brand">
                        <h2 className="Footer_Logo">Portfolio</h2>
                        <p className="Footer_Description">
                            A passionate Full Stack Developer creating elegant solutions 
                            and building amazing web experiences.
                        </p>
                        <div className="Footer_Social">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="Social_Link">
                                <FaGithub className="Social_Icon" />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="Social_Link">
                                <FaLinkedin className="Social_Icon" />
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="Social_Link">
                                <FaTwitter className="Social_Icon" />
                            </a>
                            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="Social_Link">
                                <FaInstagram className="Social_Icon" />
                            </a>
                            <a href="mailto:your.email@example.com" className="Social_Link">
                                <FaEnvelope className="Social_Icon" />
                            </a>
                        </div>
                    </div>

                    <div className="Footer_Links" style={{ '--animation-order': 1 }}>
                        <h3 className="Footer_Title">Quick Links</h3>
                        <ul className="Footer_List">
                            <li className="Footer_Item">
                                <a href="#home" className="Footer_Link">Home</a>
                            </li>
                            <li className="Footer_Item">
                                <a href="#about" className="Footer_Link">About</a>
                            </li>
                            <li className="Footer_Item">
                                <a href="#projects" className="Footer_Link">Projects</a>
                            </li>
                            <li className="Footer_Item">
                                <a href="#contact" className="Footer_Link">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="Footer_Links" style={{ '--animation-order': 2 }}>
                        <h3 className="Footer_Title">Services</h3>
                        <ul className="Footer_List">
                            <li className="Footer_Item">
                                <a href="#web-development" className="Footer_Link">Web Development</a>
                            </li>
                            <li className="Footer_Item">
                                <a href="#mobile-apps" className="Footer_Link">Mobile Apps</a>
                            </li>
                            <li className="Footer_Item">
                                <a href="#ui-design" className="Footer_Link">UI/UX Design</a>
                            </li>
                            <li className="Footer_Item">
                                <a href="#consulting" className="Footer_Link">Consulting</a>
                            </li>
                        </ul>
                    </div>

                    <div className="Footer_Links" style={{ '--animation-order': 3 }}>
                        <h3 className="Footer_Title">Resources</h3>
                        <ul className="Footer_List">
                            <li className="Footer_Item">
                                <a href="#blog" className="Footer_Link">Blog</a>
                            </li>
                            <li className="Footer_Item">
                                <a href="#documentation" className="Footer_Link">Documentation</a>
                            </li>
                            <li className="Footer_Item">
                                <a href="#support" className="Footer_Link">Support</a>
                            </li>
                            <li className="Footer_Item">
                                <a href="#privacy" className="Footer_Link">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="Footer_Bottom">
                    <p className="Footer_Copyright">
                        © {currentYear} <span className="Footer_Text">Your Name</span>. All rights reserved.
                    </p>
                    <p>Designed and built with ❤️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 