import React, { useEffect } from 'react';
import useStrapi from '../../hooks/useStrapi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  const { data, loading, error } = useStrapi('https://cancerfax.unifiedinfotechonline.com/api/homepage?populate=*');

  // Initialize AOS idempotently
  useEffect(() => {
    if (window.__AOS_INITIALIZED__) return;
    AOS.init({ duration: 800, once: true });
    window.__AOS_INITIALIZED__ = true;
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading homepage...</span>
        </div>
        <span className="ms-3">Loading homepage...</span>
      </div>
    );
  }

  if (error) {
    console.error('Homepage error:', error);
    return (
      <div className="alert alert-danger m-4" role="alert">
        <h4 className="alert-heading">Error Loading Content</h4>
        <p>{error}</p>
        <hr />
        <p className="mb-0">Please check your connection and try again.</p>
      </div>
    );
  }

  if (!data?.attributes) {
    return (
      <div className="alert alert-warning m-4" role="alert">
        No homepage data available from Strapi.
      </div>
    );
  }

  const { attributes } = data;

  // Helper function to get full image URL
  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('/uploads/')) {
      return `https://cancerfax.unifiedinfotechonline.com${url}`;
    }
    return url;
  };

  return (
    <div className="strapi-homepage">
      {/* Hero Section */}
      {attributes.heroSection && (
        <section 
          className="hero-section position-relative"
          style={{
            backgroundImage: `url(${getImageUrl(attributes.heroSection.backgroundImage?.data?.attributes?.url)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
          }}
        >
          <div className="hero-overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row justify-content-center text-center text-white">
              <div className="col-lg-8">
                <h1 
                  className="hero-title display-4 fw-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {attributes.heroSection.title || 'Decision Intelligence for Manufacturing Operations Management'}
                </h1>
                <p 
                  className="hero-subtitle lead mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {attributes.heroSection.subtitle || 'Deliver responsive, agile operations with smart manufacturing solutions powered by AI and DataOps for real-time context.'}
                </p>
                <p 
                  className="hero-description mb-5"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {attributes.heroSection.description || 'Transform your operations with Quartic\'s AI-powered decision intelligence.'}
                </p>
                <div className="hero-cta d-flex flex-wrap gap-3 justify-content-center">
                  {attributes.heroSection.primaryCtaText && (
                    <a 
                      href={attributes.heroSection.primaryCtaUrl || '#'}
                      className="btn btn-primary btn-lg"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      {attributes.heroSection.primaryCtaText}
                    </a>
                  )}
                  {attributes.heroSection.secondaryCtaText && (
                    <a 
                      href={attributes.heroSection.secondaryCtaUrl || '#'}
                      className="btn btn-outline-light btn-lg"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      {attributes.heroSection.secondaryCtaText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partners Section */}
      {attributes.partnersSection && attributes.partnersSection.partners?.length > 0 && (
        <section className="partners-section py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 
                  className="partners-title h3 fw-bold"
                  data-aos="fade-up"
                >
                  {attributes.partnersSection.title || 'Trusted by leading global manufacturers'}
                </h2>
                <p 
                  className="partners-subtitle text-muted"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {attributes.partnersSection.subtitle || 'Our partners across industries'}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="partners-logos d-flex flex-wrap justify-content-center align-items-center gap-4">
                  {attributes.partnersSection.partners.map((partner, index) => (
                    <div 
                      key={index}
                      className="partner-logo"
                      data-aos="fade-up"
                      data-aos-delay={200 + (index * 100)}
                    >
                      <img 
                        src={getImageUrl(partner.logo?.data?.attributes?.url)}
                        alt={`Partner ${index + 1}`}
                        className="img-fluid"
                        style={{ maxHeight: '60px', maxWidth: '150px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {attributes.HowItWorks && (
        <section className="how-it-works-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 
                  className="how-it-works-title h3 fw-bold"
                  data-aos="fade-up"
                >
                  {attributes.HowItWorks.title || 'How It Works'}
                </h2>
                <p 
                  className="how-it-works-subtitle h5 text-muted mb-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {attributes.HowItWorks.subtitle || 'AI in Manufacturing Needs Real-Time Context'}
                </p>
                <p 
                  className="how-it-works-description lead"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {attributes.HowItWorks.description || 'Quartic enables real-time context to unlock decision intelligence.'}
                </p>
              </div>
            </div>
            {attributes.HowItWorks.features?.length > 0 && (
              <div className="row">
                {attributes.HowItWorks.features.map((feature, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div 
                      className="feature-card card h-100 border-0 shadow-sm"
                      data-aos="fade-up"
                      data-aos-delay={300 + (index * 100)}
                    >
                      <div className="card-body text-center p-4">
                        <h5 className="card-title fw-bold">{feature.title || `Feature ${index + 1}`}</h5>
                        <p className="card-text">{feature.description || 'Feature description'}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Real Results Section */}
      {attributes.RealResults && (
        <section className="real-results-section py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 
                  className="real-results-title h3 fw-bold"
                  data-aos="fade-up"
                >
                  {attributes.RealResults.title || 'Real Results'}
                </h2>
                <p 
                  className="real-results-subtitle h5 text-muted mb-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {attributes.RealResults.subtitle || 'Driving KPIs in Batch-Critical Environments'}
                </p>
                <p 
                  className="real-results-description lead"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {attributes.RealResults.description || 'Discover customer use cases'}
                </p>
              </div>
            </div>
            {attributes.RealResults.kpis?.length > 0 && (
              <div className="row">
                {attributes.RealResults.kpis.map((kpi, index) => (
                  <div key={index} className="col-md-3 mb-4">
                    <div 
                      className="kpi-card card h-100 border-0 shadow-sm"
                      data-aos="fade-up"
                      data-aos-delay={300 + (index * 100)}
                    >
                      <div className="card-body text-center p-4">
                        <h5 className="card-title fw-bold">{kpi.name || `KPI ${index + 1}`}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Explore Button */}
      {attributes.ExploreButton && (
        <section className="explore-button-section py-4 text-center">
          <div className="container">
            <a 
              href={attributes.ExploreButton.url || '#'}
              className="btn btn-outline-primary btn-lg"
              data-aos="fade-up"
            >
              {attributes.ExploreButton.buttonName || 'Explore All'}
            </a>
          </div>
        </section>
      )}

      {/* Our Process Section */}
      {attributes.OurProcess && (
        <section className="our-process-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 
                  className="our-process-title h3 fw-bold"
                  data-aos="fade-up"
                >
                  {attributes.OurProcess.title || 'Our Process'}
                </h2>
                <p 
                  className="our-process-subtitle h5 text-muted mb-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {attributes.OurProcess.subtitle || 'How MOM Becomes Intelligent'}
                </p>
                <p 
                  className="our-process-description lead"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {attributes.OurProcess.description || 'Quartic uses DataOps for real-time context.'}
                </p>
              </div>
            </div>
            {attributes.OurProcess.steps?.length > 0 && (
              <div className="row">
                {attributes.OurProcess.steps.map((step, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div 
                      className="process-step card h-100 border-0 shadow-sm"
                      data-aos="fade-up"
                      data-aos-delay={300 + (index * 100)}
                    >
                      <div className="card-body text-center p-4">
                        <div className="step-number bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px' }}>
                          {index + 1}
                        </div>
                        <h5 className="card-title fw-bold">{step.name || `Step ${index + 1}`}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Applications Section */}
      {attributes.Application && attributes.Application.applications?.length > 0 && (
        <section className="applications-section py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 
                  className="applications-title h3 fw-bold"
                  data-aos="fade-up"
                >
                  {attributes.Application.title || 'Applications'}
                </h2>
                <p 
                  className="applications-heading h4 text-muted mb-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {attributes.Application.heading || 'Transform Your Operations with Quartic'}
                </p>
                <p 
                  className="applications-description lead"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {attributes.Application.description || 'Explore applications'}
                </p>
              </div>
            </div>
            <div className="row">
              {attributes.Application.applications.map((app, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div 
                    className="application-card card h-100 border-0 shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={300 + (index * 100)}
                  >
                    <div className="card-body text-center p-4">
                      {app.icon && (
                        <img 
                          src={getImageUrl(app.icon)}
                          alt={app.name || `Application ${index + 1}`}
                          className="mb-3"
                          style={{ maxHeight: '60px' }}
                        />
                      )}
                      <h5 className="card-title fw-bold">{app.name || `Application ${index + 1}`}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Debug Section - Only in development */}
      {process.env.NODE_ENV !== 'production' && (
        <section className="debug-section py-3 bg-dark text-white">
          <div className="container">
            <details>
              <summary className="btn btn-outline-light btn-sm">Show Raw Strapi Data (Dev Only)</summary>
              <pre className="mt-3 p-3 bg-dark text-white" style={{ fontSize: '12px', maxHeight: '300px', overflow: 'auto' }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            </details>
          </div>
        </section>
      )}
    </div>
  );
};

export default Homepage;
