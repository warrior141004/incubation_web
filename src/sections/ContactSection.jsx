// src/sections/ContactSection.jsx
import React from 'react';
import Button from '../components/Button'; // Import Button
import Card from '../components/Card';     // Import Card

const ContactSection = () => {

return (
    <section id="contact" className="contact-section">
        <div className="section-content-wrapper">
            <Card className="contact-card">
                <h2 className="section-headline">
                    <i className="bi bi-chat-dots contact-section-icon" style={{ marginRight: '8px' }}></i>
                    Get in Touch
                </h2>
                <p className="contact-intro-paragraph">
                    <i className="bi bi-info-circle" style={{ marginRight: '6px', color: '#007bff' }}></i>
                    Have questions, feedback, or just want to say hello? Reach out to us using the contact information below or fill out the inquiry form.
                </p>
                <div className="contact-grid">
                    <div className="contact-info-block">
                        <h3 className="section-sub-headline">
                            <i className="bi bi-person-lines-fill" style={{ marginRight: '6px', color: '#28a745' }}></i>
                            Contact Information
                        </h3>
                        <p className="contact-detail-item">
                            <i className="bi bi-geo-alt contact-icon"></i>
                            Dr. Akhil Agrawal, Director CURAJ Incubation Foundation,Central University of Rajasthan, NH 8, Bandarsindri, Kishangarh, Ajmer, 305817
                        </p>
                        <p className="contact-detail-item">
                            <i className="bi bi-telephone contact-icon"></i>
                            +91 8890632934
                        </p>
                        <p className="contact-detail-item">
                            <i className="bi bi-envelope contact-icon"></i>
                            cif@curaj.ac.in, akhilagrawal@curaj.ac.in

                        </p>
                        <p className="contact-detail-item">
                            <i className="bi bi-clock contact-icon"></i>
                            Mon - Fri: 9:00 AM - 6:00 PM IST
                        </p>

                        <h3 className="section-sub-headline map-headline">
                            <i className="bi bi-map" style={{ marginRight: '6px', color: '#dc3545' }}></i>
                            Visit Us
                        </h3>
                        <Card className="map-card">
                            <iframe
                            
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.778296027295!2d75.02471877462557!3d26.623552276820696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c0911c1902441%3A0xf83d23926ad5c5d5!2sCentral%20University%20of%20Rajasthan!5e0!3m2!1sen!2sin!4v1750691684958!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Central University of Rajasthan Location"
                            ></iframe>
                        </Card>
                    </div>
                    <div className="contact-form-block">
                        <h3 className="section-sub-headline">
                            <i className="bi bi-send" style={{ marginRight: '6px', color: '#17a2b8' }}></i>
                            Send Us a Message
                        </h3>
                        <p className="contact-form-paragraph">
                            <i className="bi bi-pencil-square" style={{ marginRight: '6px', color: '#ffc107' }}></i>
                            Prefer to reach out online? Click the button below to fill out our enquiry form and our team will get back to you as soon as possible.
                        </p>
                        <Button
                            className="contact-submit-button"
                            onClick={() => window.open('https://forms.gle/your-google-form-link', '_blank')}
                        >
                            <i className="bi bi-box-arrow-up-right" style={{ marginRight: '6px' }}></i>
                            Enquiry Form
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    </section>
);
};

export default ContactSection;
