import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCardShowcase = ({ homepage, data, isFirst, isLast, sectionIndex, pageType }) => {
  // Use Strapi data with fallbacks
  const animatedCardData = data || homepage?.animatedCardShowcase || {};
  const title = animatedCardData.title || 'Animated Card Showcase';
  const subtitle = animatedCardData.subtitle || 'Interactive Solution Cards';
  const description = animatedCardData.description || 'Explore our comprehensive suite of manufacturing solutions through interactive cards.';
  
  // Debug logging
  console.log('AnimatedCardShowcase - homepage:', homepage);
  console.log('AnimatedCardShowcase - animatedCardData:', animatedCardData);

  const cards = animatedCardData.cards || [
    {
      id: 'default-card-1',
      title: 'Default Card 1',
      description: 'This is a default card for demonstration purposes.',
      icon: '⚙️',
      link: '#'
    },
    {
      id: 'default-card-2', 
      title: 'Default Card 2',
      description: 'Another default card for demonstration purposes.',
      icon: '📊',
      link: '#'
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="animated-card-showcase-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="h2_heading_text fw-semibold mb-3">{title}</h2>
            <p className="lead text-muted mb-4">{subtitle}</p>
            <p className="text-muted">{description}</p>
          </div>
        </div>
        
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={card.id} className="col-lg-4 col-md-6">
              <motion.div
                className="card h-100 border-0 shadow-sm"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredCard(card.id)}
                onHoverEnd={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <span className="display-4">{card.icon}</span>
                  </div>
                  <h5 className="card-title fw-semibold mb-3">{card.title}</h5>
                  <p className="card-text text-muted mb-4">{card.description}</p>
                  <motion.a
                    href={card.link}
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCardShowcase;

