// src/sections/EventsSection.jsx
import React from 'react';
import Card from '../components/Card'; // Import Card
import Button from '../components/Button'; // Import Button

const EventsSection = () => {
  return (
    <section id="events" className="events-section">
      <div className="section-content-wrapper">
        <Card className="events-card">
          <h2 className="section-headline">Our Events & Happenings</h2>
          <p className="events-intro-paragraph">InnovateHub regularly hosts a variety of events designed to educate, connect, and inspire our community. Join us for workshops, networking mixers, and exciting pitch days.</p>

          <h3 className="section-sub-headline">Upcoming Events</h3>
          <div className="upcoming-events-grid">
            {[
              {
                title: "Startup Pitch Day 2025: Grand Finale",
                date: "July 15, 2025",
                time: "10:00 AM - 4:00 PM IST",
                location: "Virtual & InnovateHub HQ (Hybrid)",
                desc: "Witness the most promising startups present their innovations to a panel of top-tier investors and industry leaders. Network with founders and future unicorns!",
                link: "#"
              },
              {
                title: "Mentorship Mixer & Networking Evening",
                date: "August 5, 2025",
                time: "6:00 PM - 8:00 PM IST",
                location: "InnovateHub HQ, Event Hall",
                desc: "A relaxed evening to connect with experienced mentors, fellow entrepreneurs, and potential collaborators. Light refreshments will be served.",
                link: "#"
              },
              {
                title: "Workshop: Fundraising 101 - From Seed to Series A",
                date: "August 20, 2025",
                time: "2:00 PM - 5:00 PM IST",
                location: "Online Webinar (Zoom)",
                desc: "Learn the intricate process of raising capital for your startup, led by venture capital experts. Covers pitch deck creation, valuation, and negotiation.",
                link: "#"
              },
               {
                title: "Ideation & Design Thinking Sprint",
                date: "September 10-11, 2025",
                time: "9:00 AM - 5:00 PM IST",
                location: "InnovateHub Workshop Rooms",
                desc: "Two-day intensive workshop focusing on design thinking methodologies to generate and refine innovative solutions to real-world problems.",
                link: "#"
              }
            ].map((event, index) => (
              <Card key={index} className="event-card">
                <div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-detail-item"><i className="bi bi-calendar-event event-icon"></i>{event.date}</p>
                  <p className="event-detail-item"><i className="bi bi-clock-history event-icon"></i>{event.time}</p>
                  <p className="event-detail-item"><i className="bi bi-geo-alt event-icon"></i>{event.location}</p>
                  <p className="event-description">{event.desc}</p>
                </div>
                <Button className="event-register-button" onClick={() => window.open(event.link, '_blank')}>Register Now</Button>
              </Card>
            ))}
          </div>

          <div className="past-events-gallery-section">
            <h3 className="section-sub-headline">Past Events Gallery</h3>
            <div className="past-events-grid">
              {[
                "https://placehold.co/400x300/aabbcc/ffffff?text=Pitch+Day+2024",
                "https://placehold.co/400x300/ccddff/ffffff?text=Networking+Event",
                "https://placehold.co/400x300/ddeeff/ffffff?text=Workshop+Series",
                "https://placehold.co/400x300/eefaff/ffffff?text=Demo+Day+Success",
                "https://placehold.co/400x300/ffbbcc/ffffff?text=Innovators+Meetup",
                "https://placehold.co/400x300/bbddaa/ffffff?text=Guest+Lecture",
              ].map((imgSrc, index) => (
                <Card key={index} className="past-event-image-card">
                  <img
                    src={imgSrc}
                    alt={`Past Event ${index + 1}`}
                    className="past-event-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300?text=Image+Not+Available"; }}
                  />
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EventsSection;
