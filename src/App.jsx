// src/App.jsx
import React, { useState, useEffect } from 'react';

// Import Custom Components
import CustomModal from './components/CustomModal';

// Import Section Components
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import TeamSection from './sections/TeamSection';
import SuccessStoriesSection from './sections/SuccessStoriesSection';
import VideoSection from './sections/VideoSection'; 
import ContactSection from './sections/ContactSection';
import SubmitIdeaSection from './sections/SubmitIdeaSection';
import Footer from './sections/Footer';


const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the custom modal
  const closeModal = () => {
    setModalMessage("");
  };

  // Function to scroll to a specific section on the page
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobileMenuOpen) toggleMenu(); // Close mobile menu after scrolling
    }
  };

  // Function to open the Google Form in a new tab
  const openGoogleForm = () => {
    // IMPORTANT: Replace this with your actual Google Form URL!
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf1Q3A2X4Y5Z6X7R8S9T0U1V2W3X4Y5Z6/viewform?usp=sf_link";
    window.open(googleFormUrl, '_blank');
  };

  // useEffect to inject Bootstrap Icons CDN when component mounts
  useEffect(() => {
    const linkTag = document.createElement('link');
    linkTag.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css";
    linkTag.rel = "stylesheet";
    document.head.appendChild(linkTag);

    return () => {
      document.head.removeChild(linkTag);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Custom Modal for messages */}
      <CustomModal message={modalMessage} onClose={closeModal} />

      {/* Navigation Bar */}
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <TeamSection />

      {/* Success Stories Section */}
      <SuccessStoriesSection />
       
      {/* NEW: Video Section */}
      <VideoSection />

      {/* Contact Us Section */}
      <ContactSection setModalMessage={setModalMessage} />

      {/* Submit Idea Section */}
      <SubmitIdeaSection openGoogleForm={openGoogleForm} />

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
