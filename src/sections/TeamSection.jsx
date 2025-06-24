// src/sections/TeamSection.jsx
import React from 'react';
import Card from '../components/Card'; // Import Card
import Button from '../components/Button'; // Import Button for social link

const TeamSection = () => {
  return (
    <section id="team" className="team-section">
      <div className="section-content-wrapper">
        <Card className="team-card">
          <h2 className="section-headline">Our Esteemed Team</h2>
          <p className="team-intro-paragraph">Meet the dedicated individuals who drive InnovateHub's mission forward. Our team comprises experienced professionals, visionary leaders, and supportive mentors committed to your success.</p>
          <div className="team-grid">
            {[
              {
                name: "Alice Johnson",
                title: "Founder & CEO",
                bio: "A visionary leader with over 15 years in tech entrepreneurship and venture capital. Passionate about empowering new businesses to thrive.",
                img: "https://placehold.co/150x150/ff9999/ffffff?text=Alice",
                linkedin: "https://www.linkedin.com/in/alicejohnson"
              },
              {
                name: "Bob Williams",
                title: "Head of Mentorship",
                bio: "An experienced mentor with a strong background in product development and market strategy, having successfully launched several startups.",
                img: "https://placehold.co/150x150/99ccff/ffffff?text=Bob",
                linkedin: "https://www.linkedin.com/in/bobwilliams"
              },
              {
                name: "Carol Davis",
                title: "Program Manager",
                bio: "Expert in program design and community building, ensuring seamless operations and a supportive environment for our founders.",
                img: "https://placehold.co/150x150/99ff99/ffffff?text=Carol",
                linkedin: "https://www.linkedin.com/in/caroldavis"
              },
              {
                name: "David Lee",
                title: "Investment Advisor",
                bio: "Specializes in early-stage funding and financial strategies, helping startups secure the capital they need to scale.",
                img: "https://placehold.co/150x150/ffcc99/ffffff?text=David",
                linkedin: "https://www.linkedin.com/in/davidlee"
              },
              {
                name: "Eve Green",
                title: "Marketing Specialist",
                bio: "A seasoned marketing professional focused on brand development and growth hacking for emerging companies.",
                img: "https://placehold.co/150x150/cc99ff/ffffff?text=Eve",
                linkedin: "https://www.linkedin.com/in/evegreen"
              },
              {
                name: "Frank White",
                title: "Tech Lead",
                bio: "Provides technical guidance and infrastructure support, ensuring our startups have robust and scalable solutions.",
                img: "https://placehold.co/150x150/99ffff/ffffff?text=Frank",
                linkedin: "https://www.linkedin.com/in/frankwhite"
              }
            ].map((member, index) => (
              <Card key={index} className="team-member-card">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-member-image"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150?text=Image+Not+Available"; }}
                />
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-title">{member.title}</p>
                <p className="team-member-bio">{member.bio}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                   className="team-member-linkedin">
                  <i className="bi bi-linkedin team-member-icon"></i>
                </a>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;
