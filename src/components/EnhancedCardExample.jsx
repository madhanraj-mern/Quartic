import React from 'react';
import './card-hover-effects.css';

// Example component showing how to use the enhanced card hover effects
const EnhancedCardExample = () => {
  const cards = [
    {
      id: 1,
      icon: '/assets/images/home/solutions/icons/performance-improvement.svg',
      title: 'Process Optimizer',
      description: 'AI-powered process control for yield, quality, and diagnostics.',
      link: '/process-optimizer',
      linkText: 'Learn More'
    },
    {
      id: 2,
      icon: '/assets/images/home/solutions/icons/predictive-maintenance.svg',
      title: 'Reliability',
      description: 'Predictive failure detection to minimize downtime.',
      link: '/reliability',
      linkText: 'Learn More'
    },
    {
      id: 3,
      icon: '/assets/images/home/solutions/icons/batch-optimisation.svg',
      title: 'Batch MVDA',
      description: 'Multivariate insights across lab and plant data streams.',
      link: '/batch-mvda',
      linkText: 'Learn More'
    }
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">Enhanced Card Hover Effects</h2>
        </div>
      </div>
      
      <div className="row g-4">
        {cards.map((card) => (
          <div key={card.id} className="col-lg-4 col-md-6">
            <div className="card-enhanced">
              {/* Left-to-right gradient overlay */}
              <div className="card-gradient-overlay"></div>
              
              {/* Card content */}
              <div className="card-content">
                <div className="card-icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                
                <h3 className="card-title">{card.title}</h3>
                
                <p className="card-description">{card.description}</p>
                
                <div className="card-link">
                  <a href={card.link}>
                    {card.linkText}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Alternative gradient effects examples */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center mb-4">Alternative Gradient Effects</h3>
        </div>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="card-enhanced">
            {/* Diagonal gradient overlay */}
            <div className="card-gradient-diagonal"></div>
            <div className="card-content">
              <div className="card-icon">
                <img src="/assets/images/home/solutions/icons/quality-by-design.svg" alt="Diagonal Effect" />
              </div>
              <h3 className="card-title">Diagonal Gradient</h3>
              <p className="card-description">This card uses a diagonal gradient effect on hover.</p>
              <div className="card-link">
                <a href="#">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6">
          <div className="card-enhanced">
            {/* Vertical gradient overlay */}
            <div className="card-gradient-vertical"></div>
            <div className="card-content">
              <div className="card-icon">
                <img src="/assets/images/home/solutions/icons/energy-utility-optimization.svg" alt="Vertical Effect" />
              </div>
              <h3 className="card-title">Vertical Gradient</h3>
              <p className="card-description">This card uses a vertical gradient effect on hover.</p>
              <div className="card-link">
                <a href="#">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6">
          <div className="card-enhanced">
            {/* Left-to-right gradient overlay (default) */}
            <div className="card-gradient-overlay"></div>
            <div className="card-content">
              <div className="card-icon">
                <img src="/assets/images/home/solutions/icons/performance-improvement.svg" alt="Left-to-Right Effect" />
              </div>
              <h3 className="card-title">Left-to-Right Gradient</h3>
              <p className="card-description">This card uses the default left-to-right gradient effect.</p>
              <div className="card-link">
                <a href="#">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCardExample;
