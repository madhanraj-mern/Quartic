import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ClientLogoSlider from './ClientLogoSlider';
import HowItWorksSection from './HowItWorksSection';
import OurProcessSection from './OurProcessSection';
import IWSSection from './IWSSection';
import RequestDemoSection from './RequestDemoSection';
import ApplicationsSection from './ApplicationsSection';
import SimpleApplicationsSection from './SimpleApplicationsSection';
import ApplicationSection from './ApplicationSection';
import WhoIsItForSection from './WhoIsItForSection';
import RealResultsGridSection from './RealResultsGridSection';
import RealResultsSection from './RealResultsSection';
import WhyMOMSection from './WhyMOMSection';
import WhyChooseQuarticSection from './WhyChooseQuarticSection';
import CustomerProofsSection from './CustomerProofsSection';
import CustomerTestimonialsSection from './CustomerTestimonialsSection';
import BlogLatestSection from './BlogLatestSection';
import DataIntoActionSection from './DataIntoActionSection';
import InsightsSection from './InsightsSection';
import IndustriesSection from './IndustriesSection';
import ProcessFlowSection from './ProcessFlowSection';
import ResourceHubSection from './ResourceHubSection';
import SolutionsShowcaseSection from './SolutionsShowcaseSection';
import SophisticatedApplicationsSection from './SophisticatedApplicationsSection';
import StakeholdersSection from './StakeholdersSection';
import VideoCTASection from './VideoCTASection';
import WCQSection from './WCQSection';
import WhereItWorksSection from './WhereItWorksSection';
import CTASection from './CTASection';
import Footer from './Footer';
import AnimatedCardShowcase from './AnimatedCardShowcase';
import AnimatedCardsShowcase from './AnimatedCardsShowcase';

// Fallback component for unknown section types
const FallbackSection = ({ section, homepage, data }) => {
  return (
    <section className="fallback-section" style={{ 
      padding: '60px 0', 
      backgroundColor: '#f8f9fa', 
      border: '2px dashed #dee2e6',
      margin: '20px 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2 style={{ color: '#6c757d', marginBottom: '20px' }}>
          Section: {section.__component}
        </h2>
        <p style={{ color: '#6c757d', marginBottom: '20px' }}>
          This section type is not yet implemented. Please check the component mappings.
        </p>
        <div style={{ 
          backgroundColor: '#fff', 
          padding: '20px', 
          borderRadius: '8px',
          border: '1px solid #dee2e6',
          textAlign: 'left',
          fontSize: '14px',
          color: '#495057'
        }}>
          <strong>Section Data:</strong>
          <pre style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(section, null, 2)}
          </pre>
        </div>
      </div>
    </section>
  );
};

const DynamicSectionRenderer = ({ sections, pageType = 'homepage', homepage }) => {
      // Component mapping object - maps Strapi component types to React components
      const componentMap = {
        // Header and Navigation
        'sections.header': Header,
        'sections.banner-cta': Header,
        'sections.navigation': Header,
        'sections.nav': Header,
        
        // Hero and Banner Sections
        'sections.hero-section': HeroSection,
        'sections.hero': HeroSection,
        'sections.banner': HeroSection,
        'sections.main-banner': HeroSection,
        'sections.home-banner': HeroSection,
        
        // Partners and Logos
        'sections.partners-section': ClientLogoSlider,
        'sections.partners': ClientLogoSlider,
        'sections.logos': ClientLogoSlider,
        'sections.client-logos': ClientLogoSlider,
        'sections.brand-logos': ClientLogoSlider,
        
        // How It Works
        'sections.how-it-works': HowItWorksSection,
        'sections.how-it-works-section': HowItWorksSection,
        'sections.process': HowItWorksSection,
        'sections.workflow': HowItWorksSection,
        
        // Our Process
        'sections.our-process': OurProcessSection,
        'sections.our-process-section': OurProcessSection,
        'sections.process-section': OurProcessSection,
        'sections.methodology': OurProcessSection,
        
        // Where It Works (IWS)
        'sections.iws-section': IWSSection,
        'sections.where-it-works': IWSSection,
        'sections.industries': IWSSection,
        'sections.industry-solutions': IWSSection,
        'sections.use-cases': IWSSection,
        
        // Request Demo
        'sections.request-demo': RequestDemoSection,
        'sections.request-demo-section': RequestDemoSection,
        'sections.demo': RequestDemoSection,
        'sections.contact': RequestDemoSection,
        'sections.get-started': RequestDemoSection,
        
        // Applications
        'sections.applications': ApplicationsSection,
        'sections.applications-section': ApplicationsSection,
        'sections.simple-applications': SimpleApplicationsSection,
        'sections.application-section': ApplicationSection,
        'sections.apps': ApplicationsSection,
        'sections.solutions': ApplicationsSection,
        
        // Who Is It For
        'sections.who-is-it-for': WhoIsItForSection,
        'sections.target-audience': WhoIsItForSection,
        'sections.audience': WhoIsItForSection,
        'sections.users': WhoIsItForSection,
        
        // Real Results
        'sections.real-results': RealResultsGridSection,
        'sections.real-results-grid': RealResultsGridSection,
        'sections.real-results-section': RealResultsSection,
        'sections.results': RealResultsGridSection,
        'sections.case-studies': RealResultsGridSection,
        'sections.success-stories': RealResultsGridSection,
        
        // Why MOM
        'sections.the-quartic-advantage': WhyMOMSection,
        'sections.why-mom': WhyMOMSection,
        'sections.quartic-advantage': WhyMOMSection,
        'sections.advantages': WhyMOMSection,
        'sections.benefits': WhyMOMSection,
        
        // Why Choose Quartic
        'sections.why-choose-quartic': WhyChooseQuarticSection,
        'sections.why-choose-us': WhyChooseQuarticSection,
        'sections.why-quartic': WhyChooseQuarticSection,
        'sections.features': WhyChooseQuarticSection,
        'sections.value-proposition': WhyChooseQuarticSection,
        
        // Customer Proofs
        'sections.customer-proofs': CustomerProofsSection,
        'sections.customer-proofs-section': CustomerProofsSection,
        'sections.testimonials': CustomerProofsSection,
        'sections.customer-testimonials': CustomerTestimonialsSection,
        'sections.reviews': CustomerTestimonialsSection,
        'sections.feedback': CustomerTestimonialsSection,
        
        // Blog
        'sections.blog-latest': BlogLatestSection,
        'sections.blog': BlogLatestSection,
        'sections.news': BlogLatestSection,
        'sections.articles': BlogLatestSection,
        'sections.insights': BlogLatestSection,
        
        // Data Into Action
        'sections.data-into-action': DataIntoActionSection,
        'sections.data-action': DataIntoActionSection,
        'sections.analytics': DataIntoActionSection,
        'sections.intelligence': DataIntoActionSection,
        
        // Industries
        'sections.industries': IndustriesSection,
        'sections.industry': IndustriesSection,
        'sections.sectors': IndustriesSection,
        'sections.markets': IndustriesSection,
        
        // Process Flow
        'sections.process-flow': ProcessFlowSection,
        'sections.workflow-section': ProcessFlowSection,
        'sections.steps': ProcessFlowSection,
        
        // Resource Hub
        'sections.resource-hub': ResourceHubSection,
        'sections.resources': ResourceHubSection,
        'sections.downloads': ResourceHubSection,
        'sections.documentation': ResourceHubSection,
        
        // Solutions Showcase
        'sections.solutions-showcase': SolutionsShowcaseSection,
        'sections.solutions-section': SolutionsShowcaseSection,
        'sections.showcase': SolutionsShowcaseSection,
        'sections.products': SolutionsShowcaseSection,
        
        // Sophisticated Applications
        'sections.sophisticated-applications': SophisticatedApplicationsSection,
        'sections.advanced-applications': SophisticatedApplicationsSection,
        'sections.enterprise-apps': SophisticatedApplicationsSection,
        
        // Stakeholders
        'sections.stakeholders': StakeholdersSection,
        'sections.stakeholder': StakeholdersSection,
        'sections.roles': StakeholdersSection,
        'sections.personas': StakeholdersSection,
        
        // Video CTA
        'sections.video-cta': VideoCTASection,
        'sections.video': VideoCTASection,
        'sections.watch-video': VideoCTASection,
        'sections.demo-video': VideoCTASection,
        
        // WCQ
        'sections.wcq': WCQSection,
        'sections.what-can-quartic': WCQSection,
        'sections.capabilities': WCQSection,
        
        // Where It Works
        'sections.where-it-works': WhereItWorksSection,
        'sections.use-cases': WhereItWorksSection,
        'sections.implementation': WhereItWorksSection,
        
        // CTA Sections
        'sections.cta': CTASection,
        'sections.cta-section': RequestDemoSection,
        'sections.call-to-action': CTASection,
        'sections.action': CTASection,
        
        // Footer
        'sections.footer': Footer,
        'sections.footer-section': Footer,
        'sections.site-footer': Footer,
        
        // Animated Cards
        'sections.animated-card-showcase': AnimatedCardShowcase,
        'sections.animated-cards-showcase': AnimatedCardsShowcase,
        'sections.card-showcase': AnimatedCardShowcase,
        'sections.interactive-cards': AnimatedCardsShowcase,
        
        // Additional common section types
        'sections.about': WhoIsItForSection,
        'sections.overview': DataIntoActionSection,
        'sections.introduction': HeroSection,
        'sections.welcome': HeroSection,
        'sections.mission': DataIntoActionSection,
        'sections.vision': DataIntoActionSection,
        'sections.values': WhyChooseQuarticSection,
        'sections.team': StakeholdersSection,
        'sections.leadership': StakeholdersSection,
        'sections.careers': RequestDemoSection,
        'sections.jobs': RequestDemoSection,
        'sections.pricing': RequestDemoSection,
        'sections.plans': RequestDemoSection,
        'sections.faq': RequestDemoSection,
        'sections.frequently-asked-questions': RequestDemoSection,
        'sections.support': RequestDemoSection,
        'sections.help': RequestDemoSection,
        'sections.contact-us': RequestDemoSection,
        'sections.get-in-touch': RequestDemoSection,
        'sections.newsletter': RequestDemoSection,
        'sections.subscribe': RequestDemoSection,
        'sections.events': BlogLatestSection,
        'sections.webinars': BlogLatestSection,
        'sections.press': BlogLatestSection,
        'sections.media': BlogLatestSection,
        'sections.awards': WhyChooseQuarticSection,
        'sections.certifications': WhyChooseQuarticSection,
        'sections.compliance': WhyChooseQuarticSection,
        'sections.security': WhyChooseQuarticSection,
        'sections.privacy': RequestDemoSection,
        'sections.terms': RequestDemoSection,
        'sections.legal': RequestDemoSection,
      };

  // If no sections provided, return null
  if (!sections || !Array.isArray(sections)) {
    console.warn('DynamicSectionRenderer: No sections provided or sections is not an array');
    return null;
  }

  // Filter visible sections and render them
  const visibleSections = sections.filter(section => section.visible !== false);
  
  // Debug logging
  console.log('DynamicSectionRenderer: Rendering sections:', {
    totalSections: sections.length,
    visibleSections: visibleSections.length,
    sectionTypes: visibleSections.map(s => s.__component),
    pageType
  });

  // Check if hero section exists in the sections
  const hasHeroSection = visibleSections.some(section => 
    section.__component === 'sections.hero-section' || 
    section.__component === 'sections.header'
  );

  return (
    <>
      {/* Always render header and hero section first if not present in dynamic sections */}
      {!hasHeroSection && (
        <>
          <Header homepage={homepage} />
          <HeroSection homepage={homepage} />
        </>
      )}
      
      {visibleSections.map((section, index) => {
        const Component = componentMap[section.__component];
        
        if (!Component) {
          console.warn(`DynamicSectionRenderer: Unknown component type: ${section.__component}`);
          console.warn('Available component types:', Object.keys(componentMap));
          console.warn('Section data:', section);
          
          // Try to find a similar component type
          const similarComponent = Object.keys(componentMap).find(key => 
            key.toLowerCase().includes(section.__component.toLowerCase().split('.').pop()) ||
            section.__component.toLowerCase().includes(key.toLowerCase().split('.').pop())
          );
          
          if (similarComponent) {
            console.warn(`DynamicSectionRenderer: Using similar component: ${similarComponent} for ${section.__component}`);
            const SimilarComponent = componentMap[similarComponent];
            const sectionKey = `${section.__component}-${section.id || index}`;
            
            return (
              <div 
                key={sectionKey}
                className={`section-wrapper section-wrapper--${index} section-wrapper--fallback`}
                data-section-type={section.__component}
                data-section-index={index}
                data-fallback-component={similarComponent}
              >
                <SimilarComponent 
                  key={sectionKey}
                  homepage={homepage}
                  data={section}
                  isFirst={index === 0}
                  isLast={index === visibleSections.length - 1}
                  sectionIndex={index}
                  pageType={pageType}
                />
              </div>
            );
          }
          
          // Use fallback component for completely unknown section types
          const sectionKey = `${section.__component}-${section.id || index}`;
          return (
            <div 
              key={sectionKey}
              className={`section-wrapper section-wrapper--${index} section-wrapper--fallback`}
              data-section-type={section.__component}
              data-section-index={index}
            >
              <FallbackSection 
                section={section}
                homepage={homepage}
                data={section}
              />
            </div>
          );
        }

        // Create a unique key for each section
        const sectionKey = `${section.__component}-${section.id || index}`;

        return (
          <div 
            key={sectionKey}
            className={`section-wrapper section-wrapper--${index}`}
            data-section-type={section.__component}
            data-section-index={index}
          >
            <Component
              homepage={homepage}
              data={section}
              pageType={pageType}
              sectionIndex={index}
              isFirst={index === 0}
              isLast={index === visibleSections.length - 1}
            />
          </div>
        );
      })}
    </>
  );
};

export default DynamicSectionRenderer;
