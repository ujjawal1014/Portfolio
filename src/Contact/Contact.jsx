import React, { useState, useRef } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        loading: false,
        success: false,
        error: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({ loading: true, success: false, error: false });

        try {
            // Replace these with your EmailJS credentials
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'ujjawaltripathi1406@gmail.com'
            };

            await emailjs.send(
                'service_c7fxnhc', // Replace with your EmailJS service ID from dashboard -> Email Services
                'template_580j3tc',
                templateParams,
                'LSxGyWzx24WKqiX0u'
            );

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            setSubmitStatus({ loading: false, success: true, error: false });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus({ loading: false, success: false, error: true });
        }
    };

    return (
        <section className="Contact" id="contact">
            <div className="Contact_Container">
                <div className="Contact_Header">
                    <h2 className="Contact_Title">Get In Touch</h2>
                    <p className="Contact_Subtitle">
                        Have a question or want to work together? Feel free to contact me!
                    </p>
                </div>

                <div className="Contact_Content">
                    <div className="Contact_Info">
                        <div className="Contact_Info_Item">
                            <FaEnvelope className="Info_Icon" />
                            <div className="Info_Text">
                                <div className="Info_Label">Email</div>
                                <div className="Info_Value">ujjawaltripathi1406@gmail.com</div>
                            </div>
                        </div>

                        <div className="Contact_Info_Item">
                            <FaPhone className="Info_Icon" />
                            <div className="Info_Text">
                                <div className="Info_Label">Phone</div>
                                <div className="Info_Value">+91 83209 26863</div>
                            </div>
                        </div>

                        <div className="Contact_Info_Item">
                            <FaMapMarkerAlt className="Info_Icon" />
                            <div className="Info_Text">
                                <div className="Info_Label">Location</div>
                                <div className="Info_Value">Surat, Gujarat</div>
                            </div>
                        </div>

                        <div className="Contact_Info_Item">
                            <FaLinkedin className="Info_Icon" />
                            <div className="Info_Text">
                                <div className="Info_Label">LinkedIn</div>
                                <a href="https://www.linkedin.com/in/ujjawal-tripathi-1406/" target="_blank" rel="noopener noreferrer" className="Info_Value">
                                    linkedin.com/in/ujjawal-tripathi-1406
                                </a>
                            </div>
                        </div>

                        <div className="Contact_Info_Item">
                            <FaGithub className="Info_Icon" />
                            <div className="Info_Text">
                                <div className="Info_Label">GitHub</div>
                                <a href="https://github.com/ujjawaltripathi1406" target="_blank" rel="noopener noreferrer" className="Info_Value">
                                    github.com/ujjawaltripathi1406
                                </a>
                            </div>
                        </div>

                        <div className="Contact_Info_Item">
                            <FaWhatsapp className="Info_Icon" />
                            <div className="Info_Text">
                                <div className="Info_Label">WhatsApp</div>
                                <a href="https://wa.me/918320926863" target="_blank" rel="noopener noreferrer" className="Info_Value">
                                    +91 83209 26863
                                </a>
                            </div>
                        </div>
                    </div>

                    <form ref={form} className="Contact_Form" onSubmit={handleSubmit}>
                        <div className="Form_Group">
                            <label className="Form_Label" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="Form_Input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="Form_Group">
                            <label className="Form_Label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="Form_Input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="Form_Group">
                            <label className="Form_Label" htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="Form_Input"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="Form_Group">
                            <label className="Form_Label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="Form_Textarea"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={`Submit_Button ${submitStatus.loading ? 'loading' : ''}`}
                            disabled={submitStatus.loading}
                        >
                            {submitStatus.loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitStatus.success && (
                            <div className="Submit_Success">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus.error && (
                            <div className="Submit_Error">
                                Error sending message. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact; 