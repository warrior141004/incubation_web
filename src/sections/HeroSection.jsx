// src/sections/HeroSection.jsx
import React from 'react';
import Button from '../components/Button'; // Import Button
import Card from '../components/Card';     // Import Card

const HeroSection = ({ scrollToSection }) => {
return (
    <section id="home" className="hero-section">
        <div className="section-content-wrapper">
            <Card className="hero-card">
                <div className="hero-grid">
                    <div className="hero-text-content">
                        <h1
                            className="hero-headline gradient-animate"
                            style={{
                                background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: 'gradient-move 3s ease-in-out infinite alternate'
                            }}
                        >
                            Transform Your Ideas Into Reality
                        </h1>
                        <p className="hero-description">Join our incubation center and get access to mentorship, resources, and funding to make your startup dreams come true. We provide the fertile ground for innovation to flourish.</p>
                        <Button
                            className="hero-cta-button"
                            onClick={() => scrollToSection('submit-idea')}
                        >
                            Submit Your Idea
                        </Button>
                    </div>
                    <Card className="hero-image-card">
                        <video
                            className="hero-video"
                            src="/Hero_section_video1.mp4"
                            autoPlay
                            muted
                            playsInline
                            onError={(e) => { e.target.poster = "https://placehold.co/800x600?text=Video+Not+Available"; }}
                            style={{ width: '100%', height: 'auto', borderRadius: 'inherit' }}
                        >
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </Card>
                </div>
            </Card>
        </div>
        <style>
            {`
                @keyframes gradient-move {
                    0% {
                        background-position: 0% 50%;
                    }
                    100% {
                        background-position: 100% 50%;
                    }
                }
                .gradient-animate {
                    background-size: 200% 200%;
                }
            `}
        </style>
    </section>
);
};

export default HeroSection;
