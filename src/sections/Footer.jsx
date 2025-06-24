// src/sections/Footer.jsx
import React from 'react';
import Button from '../components/Button'; // Import Button
import Input from '../components/Input';   // Import Input
import Card from '../components/Card';     // Import Card

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer-section">
      <div className="section-content-wrapper">
        <Card className="footer-card">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-headline">InnovateHub</h3>
              <p className="footer-text">Empowering the next generation of entrepreneurs through mentorship, funding, and a vibrant community.</p>
              <div className="footer-social-links">
                {['linkedin', 'twitter', 'facebook', 'instagram'].map(social => (
                  <a
                    key={social}
                    href={`https://www.${social}.com/innovatehubofficial`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon-link"
                    aria-label={`Follow us on ${social}`}
                  >
                    <i className={`bi bi-${social} footer-social-icon`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-col">
              <h3 className="footer-headline">Quick Links</h3>
              <ul className="footer-links-list">
                {/* Removed 'Events' */}
                {['Home', 'About', 'Team','Success Stories', 'Contact', 'Video Tour', 'Submit Idea'].map(link => (
                  <li key={link}>
                    <Button
                      className="footer-link-button"
                      onClick={() => scrollToSection(link.toLowerCase().replace(/\s/g, '-'))}
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-headline">Reach Us</h3>
              <p className="footer-text-item"><i className="bi bi-geo-alt footer-icon"></i>CURAJ NH 8, Bandarsindri, Kishangarh, Ajmer, 305817</p>
              <p className="footer-text-item"><i className="bi bi-telephone footer-icon"></i>+91 8890632934</p>
              <p className="footer-text-item"><i className="bi bi-envelope footer-icon"></i>cif@curaj.ac.in, akhilagrawal@curaj.ac.in</p>
            </div>
            <div className="footer-col">
              <h3 className="footer-headline">Newsletter</h3>
              <p className="footer-text">Stay updated with our latest news, events, and success stories.</p>
              <form className="newsletter-form">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="newsletter-input"
                  required
                />
                <Button type="submit" className="newsletter-submit-button">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} InnovateHub. All rights reserved.
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
