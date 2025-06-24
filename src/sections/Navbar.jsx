// src/sections/Navbar.jsx
import React from 'react';
import Button from '../components/Button'; // Import Button

// For ScrollArea, a simple div with overflow handling is used.
const ScrollArea = (props) => <div {...props} style={{ overflowY: 'auto' }} className={`custom-scroll-area ${props.className || ''}`} />;


const Navbar = ({ isMobileMenuOpen, toggleMenu, scrollToSection }) => {
return (
    <nav className="navbar">
        <div className="navbar-content-wrapper">
            <a href="#" className="site-logo">
                <img
                    src="/incubation_logo.png"
                    alt="InnovateHub Logo"
                    className="site-logo-img"
                    style={{ height: 80, marginRight: 8, verticalAlign: 'middle' }}
                />
                InnovateHub
            </a>
            <div className="nav-links-desktop">
                {['home', 'about', 'team','success-stories','video-tour', 'contact', 'submit-idea'].map(item => (
                    <Button
                        key={item}
                        className="nav-button"
                        onClick={() => scrollToSection(item)}
                    >
                        {item === 'submit-idea' ? 'Submit Idea' : item.charAt(0).toUpperCase() + item.slice(1)}
                    </Button>
                ))}
            </div>
            <Button
                className="mobile-menu-toggle"
                onClick={toggleMenu}
            >
                <i className="bi bi-list menu-icon"></i>
            </Button>
        </div>
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}>
            <ScrollArea className="mobile-menu-scroll-area">
                <div className="mobile-menu-header">
                    <Button className="mobile-menu-close-button" onClick={toggleMenu}>
                        <i className="bi bi-x-lg menu-icon"></i>
                    </Button>
                </div>
                <div className="nav-links-mobile">
                    {['home', 'about', 'team', 'contact', 'submit-idea'].map(item => (
                        <Button
                            key={item}
                            className="nav-button-mobile"
                            onClick={() => scrollToSection(item)}
                        >
                            {item === 'submit-idea' ? 'Submit Idea' : item.charAt(0).toUpperCase() + item.slice(1)}
                        </Button>
                    ))}
                </div>
            </ScrollArea>
        </div>
    </nav>
);
};

export default Navbar;
