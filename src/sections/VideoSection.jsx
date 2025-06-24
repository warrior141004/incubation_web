// src/sections/VideoSection.jsx
import React from 'react';
import Card from '../components/Card';

const VideoSection = () => {
  // IMPORTANT: Place your video file (e.g., my-company-intro.mp4) inside your public/videos/ directory.
  // Then, replace the placeholder URL below with the actual path to your video.
  // Example: const videoSrc = "/videos/my-company-intro.mp4";
  const videoSrc = "/ITBI 14_05_2024 (1).mp4"; // Placeholder video URL for demonstration

  return (
    <section id="video-tour" className="video-section">
      <div className="section-content-wrapper">
        <Card className="video-card">
          <h2 className="section-headline">Our Company Video Tour</h2>
          <p className="video-intro-paragraph">
            Take a quick video tour to experience InnovateHub's vibrant atmosphere, glimpse into the innovative projects thriving within our community, and discover the state-of-the-art facilities we offer.
          </p>
          <div className="video-container">
            <video controls muted loop className="responsive-video"> {/* Removed autoPlay attribute */}
              <source src={videoSrc} type="video/mp4" />
              {/* You can add multiple source tags for different video formats (e.g., WebM) for broader browser compatibility */}
              {/* <source src="/videos/my-company-intro.webm" type="video/webm" /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoSection;
