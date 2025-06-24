// src/sections/SubmitIdeaSection.jsx
import React from 'react';
import Button from '../components/Button'; // Import Button
import Card from '../components/Card';     // Import Card

const SubmitIdeaSection = ({ openGoogleForm }) => {
  return (
    <section id="submit-idea" className="submit-idea-section">
      <div className="section-content-wrapper">
        <Card className="submit-idea-card">
          <h2 className="section-headline">Ready to Submit Your Idea?</h2>
          <p className="submit-idea-description">Click the button below to fill out our official application form via Google Forms. We look forward to learning about your innovative startup!</p>
          <Button
            className="google-form-button"
            onClick={openGoogleForm}
          >
            Apply <i className="bi bi-box-arrow-up-right google-form-icon"></i>
          </Button>
          <p className="google-form-note"></p>
        </Card>
      </div>
    </section>
  );
};

export default SubmitIdeaSection;
