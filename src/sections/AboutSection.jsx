// src/sections/AboutSection.jsx
import React from 'react';
import Card from '../components/Card'; // Import Card

const AboutSection = () => {
return (
    <section id="about" className="about-section">
        <div className="section-content-wrapper">
            <Card className="about-card">
                <h2 className="section-headline">About Us</h2>
                <div className="about-mission-vision">
                    <p className="about-paragraph">Central University of Rajasthan (CURAJ), established in 2009, is a one of the top institution known for its research excellence, industry partnerships, and government- funded projects. It promotes innovation and entrepreneurship through its Innovation and Startup Cell and Incubation Centre, focusing on Holistic Health, Sustainable Agriculture, Microbial Biotechnology, and AI. With 177 faculty members, including 170 doctorates, CURAJ has a strong research presence with projects funded by SERB, DST, DBT, CSIR, and ICMR. Recognized as a NAAC A++ University and ranked in the NIRF 151-200 band, CURAJ collaborates with major companies like ONGC-TERI Biotech and TCS, and maintains global academic partnerships. The university plans to establish a NIDHI-iTBI with DST support to enhance its entrepreneurial initiatives.</p>
                    <a
                        href="https://curaj.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-more-link"
                        style={{ display: 'inline-block', marginTop: '1rem', color: '#007bff', textDecoration: 'underline' }}
                    >
                        Learn more about CURAJ
                    </a>
                </div>
                <h3 className="section-sub-headline">What We Offer</h3>
                <div className="offerings-grid">
                    {[
                        {
                            icon: "bi-lightbulb",
                            title: "Mentorship",
                            desc: "Access to industry experts and successful entrepreneurs who will guide you through your journey, offering invaluable insights and strategic advice."
                        },
                        {
                            icon: "bi-cash-stack",
                            title: "Funding",
                            desc: "Opportunities for seed funding, angel investments, and connections with a network of venture capitalists and financial partners."
                        },
                        {
                            icon: "bi-geo-alt",
                            title: "Workspace",
                            desc: "State-of-the-art coworking spaces, private offices, and meeting rooms equipped with high-speed internet and essential amenities."
                        },
                        {
                            icon: "bi-diagram-3",
                            title: "Networking",
                            desc: "Exclusive events, workshops, and forums designed to connect you with peers, mentors, investors, and potential partners."
                        },
                        {
                            icon: "bi-easel",
                            title: "Workshops & Training",
                            desc: "Regular workshops on business development, marketing, legal aspects, fundraising, and more, led by experts."
                        },
                        {
                            icon: "bi-shield-check",
                            title: "Legal & IP Support",
                            desc: "Guidance on legal structuring, intellectual property rights, compliance, and other regulatory aspects critical for startups."
                        }
                    ].map((item, index) => (
                        <Card key={index} className="offering-card">
                            <i className={`bi ${item.icon} offering-icon`}></i>
                            <h3 className="offering-title">{item.title}</h3>
                            <p className="offering-description">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </Card>
        </div>
    </section>
);
};

export default AboutSection;
