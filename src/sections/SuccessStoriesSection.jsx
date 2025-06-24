// src/sections/SuccessStoriesSection.jsx
import React from 'react';
import Card from '../components/Card'; // Import Card and Button components
import Button from '../components/Button';

const SuccessStoriesSection = () => {
const stories = [
    {
        id: 1,
        name: "MaheTri Private Limited",
        logo: "public/mahetri-logo.png", // Placeholder logo
        description: "MaheTri specializes in handcrafted leather goods and accessories, blending traditional family.",
        website: "https://mahetri.com/" // Placeholder website link
    },
    {
        id: 2,
        name: "Piro Space Metaverse",
        logo: "public/piro-space-logo.png", // Placeholder logo
        description: "Piro Space is a Metaverse as a Service platform that helps businesses and individuals create virtual Events, exhibitions, and experiences in the metaverse. They successfully launched their first virtual event with our support.",
        website: "https://pirospace.com/"
    },
    {
        id: 3,
        name: "Techtaru Digital LLP",
        logo: "public/techtaru-logo.png", // Placeholder logo
        description: "Zoop AI is an all-in-one content creation platform that blends AI and human creativity to help individuals and businesses create high-quality content quickly and efficiently. We provided them with the initial funding and mentorship to launch their beta version.",
        website: "https://www.linkedin.com/company/zoop-ai/about/"
    },
    {
        id: 4,
        name: "IPOSIS WORLDWIDE SECURITY SERVICES PRIVATE LIMITED",
        logo: "public/iposis-logo.png", // Placeholder logo
        description: "IPOSIS is a security services company that provides comprehensive security solutions for businesses and individuals. They have expanded their operations significantly since joining InnovateHub.",
        website: "https://iposis.com/"
    },
    {
        id: 5,
        name: "MARKANDEYA BIOTECHNOLOGIES PRIVATE LIMITED",
        logo: "public/markandeya-logo.png", // Placeholder logo
        description: "MARKANDEYA is a biotechnology company focused on developing innovative solutions for healthcare and agriculture. They have made significant strides in their research and development efforts with our support.",
        website: "https://mkdbiotech.com/"
    },
    {
        id: 6,
        name: "Mindery Technologies Private Limited",
        logo: "public/mindery-logo.png", // Placeholder logo
        description: "Mindery is a technology company that specializes in AI-driven solutions for businesses. They have successfully launched their first product with our assistance.",
        website: "https://minderytech.com/"
    },
    {
        id: 7,
        name: "The Scout Tales",
        logo: "public/scout-tales-logo.png", // Placeholder logo
        description: "Scout Tales is a digital media platform that focuses on storytelling and content creation. They have built a strong community of creators and storytellers with our help.",
        website: "https://thescouttales.com/"
    },
    {
        id: 8,
        name: "Sirus Infotech Private Limited",
        logo: "public/sirus-infotech-logo.png", // Placeholder logo
        description: "Sirus Infotech is an IT services company that provides software development and consulting services. They have successfully completed several projects with our support.",
        website: "https://thescouttales.com/"
    },
];

// Add this style block to adjust the logo size
const logoStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    marginBottom: '1rem'
};

  return (
    <section id="success-stories" className="success-stories-section">
      <div className="section-content-wrapper">
        <Card className="success-stories-card">
          <h2 className="section-headline">Our Success Stories</h2>
          <p className="success-stories-intro-paragraph">
            Discover the impactful ventures that have grown within InnovateHub. These startups leveraged our resources, mentorship, and network to achieve significant milestones.
          </p>
          <div className="stories-grid">
            {stories.map(story => (
              <Card key={story.id} className="story-card">
                <img
                  src={story.logo}
                  alt={`${story.name} Logo`}
                  className="story-logo"
                  style={logoStyle}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100?text=Logo"; }}
                />
                <h3 className="story-name">{story.name}</h3>
                <p className="story-description">{story.description}</p>
                {story.website && (
                  <Button
                    className="story-website-button"
                    onClick={() => window.open(story.website, '_blank')}
                  >
                    Visit Website <i className="bi bi-box-arrow-up-right story-link-icon"></i>
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
