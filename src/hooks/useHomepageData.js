import { useState, useEffect } from 'react';

const useHomepageData = (forceRefresh = false) => {
  const [homepage, setHomepage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to convert Strapi dynamic zone data to our component format
  const convertStrapiSections = (strapiData) => {
    if (!strapiData || !strapiData.sections) return null;
    
    return strapiData.sections.map(section => {
      // Map Strapi component types to our internal format
      const componentMapping = {
        'sections.header': 'header',
        'sections.hero-section': 'heroSection',
        'sections.partners-section': 'partnersSection',
        'sections.how-it-works': 'howItWorks',
        'sections.our-process': 'ourProcess',
        'sections.iws-section': 'iwsSection',
        'sections.request-demo': 'requestDemo',
        'sections.applications': 'applicationsSection',
        'sections.simple-applications': 'simpleApplicationsSection',
        'sections.application-section': 'applicationSection',
        'sections.who-is-it-for': 'whoIsItFor',
        'sections.real-results': 'realResults',
        'sections.real-results-grid': 'realResultsGrid',
        'sections.customer-proofs': 'customerProofs',
        'sections.blog-latest': 'blogLatest',
        'sections.footer': 'footer'
      };

      return {
        __component: section.__component,
        id: section.id,
        visible: section.visible !== false,
        data: section,
        internalKey: componentMapping[section.__component] || section.__component
      };
    });
  };

  // Function to convert individual fields to dynamic zone format
  const convertIndividualFieldsToDynamic = (strapiData) => {
    if (!strapiData) return [];
    
    const sections = [];
    
           // Map individual fields to dynamic zone components
           const fieldMapping = {
             'bannerCtaSection': 'sections.banner-cta',
             'heroSection': 'sections.hero-section',
             'partnersSection': 'sections.partners-section',
             'HowItWorks': 'sections.how-it-works',
             'OurProcess': 'sections.our-process',
             'WhereItWorks': 'sections.iws-section',
             'RequestDemo': 'sections.request-demo',
             'Application': 'sections.application-section',
             'whoIsItFor': 'sections.who-is-it-for',
             'RealResults': 'sections.real-results-grid',
             'realResultsSection': 'sections.real-results-section',
             'theQuarticAdvantage': 'sections.the-quartic-advantage',
             'whyChooseQuartic': 'sections.why-choose-quartic',
             'customerProofs': 'sections.customer-proofs',
             'customerTestimonials': 'sections.customer-testimonials',
             'resources': 'sections.blog-latest',
             'dataIntoAction': 'sections.data-into-action',
             'insights': 'sections.insights',
             'industries': 'sections.industries',
             'processFlow': 'sections.process-flow',
             'resourceHub': 'sections.resource-hub',
             'solutionsShowcase': 'sections.solutions-showcase',
             'sophisticatedApplications': 'sections.sophisticated-applications',
             'stakeholders': 'sections.stakeholders',
             'videoCta': 'sections.video-cta',
             'wcq': 'sections.wcq',
             'whereItWorks': 'sections.where-it-works',
             'ctaSection': 'sections.cta',
             'ctaSectionScheduleDemo': 'sections.cta-section',
             'footer': 'sections.footer',
             'animatedCardShowcase': 'sections.animated-card-showcase',
             'animatedCardsShowcase': 'sections.animated-cards-showcase'
           };

    // Convert each field to a dynamic zone section
    Object.entries(fieldMapping).forEach(([fieldName, componentType]) => {
      if (strapiData[fieldName]) {
        sections.push({
          __component: componentType,
          id: strapiData[fieldName].id || Math.random(),
          visible: strapiData[fieldName].visible !== false,
          data: strapiData[fieldName],
          internalKey: fieldName
        });
      }
    });

    // Always add footer at the end if not already present
    const hasFooter = sections.some(section => section.__component === 'sections.footer');
    if (!hasFooter) {
      sections.push({
        __component: 'sections.footer',
        id: 'footer-default',
        visible: true,
        data: strapiData.footer || {},
        internalKey: 'footer'
      });
    }

    return sections;
  };

  const refreshData = async () => {
    try {
      setLoading(true);
      
      // Check if Strapi URL is configured and valid
      const strapiUrl = import.meta.env.VITE_STRAPI_URL;
      console.log('🔧 Strapi URL from environment:', strapiUrl);
      
      if (!strapiUrl || strapiUrl.includes('localhost') || strapiUrl.includes('127.0.0.1')) {
        console.info('ℹ️ Strapi URL not configured, using fallback data');
        throw new Error('Strapi not configured');
      }
      
      console.log('✅ Strapi URL is configured, attempting API call...');
      
      // Try to fetch from Strapi first - check both homepage and pages endpoints
      let response = await fetch(`${strapiUrl}/api/pages/1?populate=sections`);
      
      // If pages endpoint fails, try homepage endpoint
      if (!response.ok) {
        console.log('Pages endpoint failed, trying homepage endpoint...');
        response = await fetch(`${strapiUrl}/api/homepage?populate=*`);
      }
      
      if (!response.ok) {
        console.log('❌ Strapi API error:', response.status, response.statusText);
        throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('🎉 Strapi data loaded successfully:', data.data);
      console.log('🔍 Data structure:', JSON.stringify(data.data, null, 2));
      
          // Check if this is dynamic zone data (has sections array)
          if (data.data && data.data.sections && Array.isArray(data.data.sections)) {
            console.log('✅ Dynamic sections detected:', data.data.sections.length, 'sections');
            // Convert dynamic zone sections to our format
            const convertedSections = convertStrapiSections(data.data);
            console.log('🔄 Converted sections:', convertedSections);
            const dynamicHomepage = {
              ...data.data,
              dynamicSections: convertedSections,
              isDynamic: true
            };
            setHomepage(dynamicHomepage);
          } else {
            console.log('📄 Individual fields detected - converting to dynamic format');
            // Convert individual fields to dynamic zone format
            const convertedSections = convertIndividualFieldsToDynamic(data.data);
            console.log('🔄 Converted individual fields to sections:', convertedSections);
            console.log('📊 Found', convertedSections.length, 'sections from individual fields');
            const dynamicHomepage = {
              ...data.data,
              dynamicSections: convertedSections,
              isDynamic: true
            };
            setHomepage(dynamicHomepage);
          }
    } catch (err) {
      console.info('ℹ️ Strapi not available, using fallback data');
      // Don't set error when we have fallback data - this is expected behavior
      
      // Comprehensive fallback data when Strapi is not available
      const fallbackData = {
        id: 1,
        
        // Header Section
        header: {
          bannerTag: 'Podcast',
          bannerText: 'Global UNS, Local Complexity: Why Edge Context Isn\'t Enough',
          ctaButtons: {
            text: 'Watch Now',
            url: '#',
            className: 'fw-800 lh-sm d-inline-block text-decoration-none'
          },
          navigation: [
            { label: 'Product', hasDropdown: true, url: '#' },
            { label: 'Solutions', hasDropdown: true, url: '#' },
            { label: 'Customers', hasDropdown: false, url: '#' },
            { label: 'Resource Hub', hasDropdown: true, url: '#' },
            { label: 'Company', hasDropdown: true, url: '#' }
          ]
        },
        attributes: {
          // Header Banner CTA Section
          ctaButtons: {
            text: 'Watch Now',
            url: '#',
            className: 'fw-800 lh-sm d-inline-block text-decoration-none'
          },
          
          // Hero Section
          heroSection: {
            title: "Decision Intelligence for Manufacturing Operations Management",
            subtitle: "Deliver responsive, agile operations with smart manufacturing solutions powered by AI and DataOps for real-time context.",
            description: "Leverage AI-powered insights to optimize production, reduce waste, and maximize efficiency across your entire manufacturing ecosystem.",
            primaryCtaText: "Request a Demo",
            primaryCtaUrl: "https://www.quartic.ai/demo/",
            secondaryCtaText: "Watch Video",
            secondaryCtaUrl: "#",
            backgroundImage: "/assets/images/home/hero-bg.jpg"
          },
          
          // Partners/Client Logos Section
          partnersSection: {
            title: "Trusted by Leading Manufacturers",
            logos: [
              { name: "Colgate", logo: "/assets/images/partners/colgate-icon.svg" },
              { name: "Sanofi", logo: "/assets/images/partners/sanofi-icon.svg" },
              { name: "Tata Steel", logo: "/assets/images/partners/tata-steel-icon.svg" },
              { name: "Merck", logo: "/assets/images/partners/merck-icon.svg" },
              { name: "AB InBev", logo: "/assets/images/partners/abinbev-icon.svg" },
              { name: "Neste Purina", logo: "/assets/images/partners/neste-purina-icon.svg" }
            ]
          },
          
          // How It Works Section
          howItWorks: {
            title: "How It Works",
            subtitle: "AI in Manufacturing Needs Real-Time Context",
            description: "AI in manufacturing is only as good as the data it runs on. Quartic contextualizes OT data, enabling faster, smarter decisions across MOM workflows.",
            ctaText: "Explore Quartic Platform",
            ctaUrl: "#"
          },
          
          // Our Process Section
          ourProcess: {
            title: "Our Process",
            subtitle: "How MOM Becomes Intelligent",
            description: "Quartic uses DataOps for real-time context to convert raw signals into decision intelligence across the enterprise.",
            steps: [
              { key: "connect", title: "Connect", description: "Connect legacy OT and modern IT systems with iLuminator.", linkText: "Learn more", linkHref: "#" },
              { key: "iluminator", title: "Industrial DataOps", subtitle: "iLuminator", description: "Stream real-time context across materials, processes, products and equipments.", linkText: "Learn more", linkHref: "#" },
              { key: "exponence", title: "Industrial Intelligence", subtitle: "eXponence", description: "Apply MVDA, ML, and optimization for quality and yield.", linkText: "Learn more", linkHref: "#" },
              { key: "applications", title: "Applications", description: "Deploy across edge/cloud using modular smart manufacturing solutions.", linkText: "View All Applications", linkHref: "#" }
            ]
          },
          
          // IWS Section
          iwsSection: {
            title: "Industrial Workflow Solutions",
            subtitle: "Transform Your Manufacturing Operations",
            description: "Our comprehensive suite of industrial workflow solutions helps you optimize every aspect of your manufacturing process.",
            features: [
              {
                title: "Real-time Monitoring",
                description: "Monitor your production lines in real-time with advanced analytics and predictive insights.",
                icon: "/assets/images/icons/monitoring-icon.svg"
              },
              {
                title: "Quality Control",
                description: "Ensure consistent quality with AI-powered quality control systems that learn and adapt.",
                icon: "/assets/images/icons/quality-icon.svg"
              },
              {
                title: "Process Optimization",
                description: "Optimize your manufacturing processes with data-driven insights and automated recommendations.",
                icon: "/assets/images/icons/optimization-icon.svg"
              }
            ]
          },
          
          // Request Demo Section
          requestDemo: {
            title: "Ready to Transform Your Manufacturing?",
            subtitle: "See how Quartic can revolutionize your operations",
            description: "Schedule a personalized demo to see how our solutions can help you achieve your manufacturing goals.",
            ctaText: "Schedule Demo",
            ctaUrl: "https://www.quartic.ai/demo/"
          },
          
          // Applications Section
          applicationsSection: {
            title: "Transform Your Operations with Quartic",
            subtitle: "Comprehensive suite of applications designed to transform your manufacturing operations.",
            description: "Our applications cover the entire manufacturing lifecycle, from design to delivery.",
            applications: [
              {
                title: "Process Optimizer",
                description: "AI-powered process control for yield, quality, and diagnostics.",
                icon: "/assets/images/home/solutions/icons/performance-improvement.svg",
                ctaText: "Learn More",
                ctaUrl: "https://www.quartic.ai/process-optimizer",
                iconAlt: "Process Optimizer icon"
              },
              {
                title: "Reliability",
                description: "Predictive failure detection to minimize downtime.",
                icon: "/assets/images/home/solutions/icons/predictive-maintenance.svg",
                ctaText: "Learn More",
                ctaUrl: "https://www.quartic.ai/reliability",
                iconAlt: "Reliability icon"
              },
              {
                title: "Batch MVDA",
                description: "Multivariate insights across lab and plant data streams.",
                icon: "/assets/images/home/solutions/icons/batch-optimisation.svg",
                ctaText: "Learn More",
                ctaUrl: "https://www.quartic.ai/batch-mvda",
                iconAlt: "Batch MVDA icon"
              },
              {
                title: "PD Optimizer",
                description: "In-silico optimization for faster product scale-up.",
                icon: "/assets/images/home/solutions/icons/quality-by-design.svg",
                ctaText: "Learn More",
                ctaUrl: "https://www.quartic.ai/pd-optimizer",
                iconAlt: "PD Optimizer icon"
              },
              {
                title: "Automated PAT",
                description: "Integrated analytics for continuous batch verification.",
                icon: "/assets/images/home/solutions/icons/energy-utility-optimization.svg",
                ctaText: "Learn More",
                ctaUrl: "https://www.quartic.ai/automated-pat",
                iconAlt: "Automated PAT icon"
              }
            ]
          },
          
          // Simple Applications Section
          simpleApplicationsSection: {
            title: "Easy-to-Use Applications",
            subtitle: "Powerful tools, simple interface",
            description: "Our applications are designed to be intuitive and easy to use, so your team can start seeing results immediately.",
            ctaText: "View All Applications",
            ctaUrl: "#applications"
          },
          
          // Application Section
          applicationSection: {
            title: "Application Details",
            subtitle: "Deep dive into our solutions",
            description: "Explore the technical details and capabilities of our manufacturing applications.",
            ctaText: "Learn More",
            ctaUrl: "#"
          },
          
          // Who Is It For Section
          whoIsItFor: {
            title: "WHO IS IT FOR",
            subtitle: "Quartic Built for every stakeholder",
            description: "Comprehensive solutions designed for every role in manufacturing operations.",
            stakeholders: [
              {
                id: 0,
                title: "Process Engineers",
                description: "Optimize manufacturing processes with real-time data insights and predictive analytics.",
                features: [
                  "Real-time process monitoring",
                  "Predictive quality control",
                  "Automated optimization recommendations"
                ]
              },
              {
                id: 1,
                title: "Data Analysts",
                description: "Transform raw manufacturing data into actionable business intelligence.",
                features: [
                  "Advanced analytics dashboards",
                  "Custom data visualizations",
                  "Automated reporting"
                ]
              },
              {
                id: 2,
                title: "Quality & Compliance",
                description: "Maximize equipment uptime with predictive maintenance and reliability engineering.",
                features: [
                  "Predictive maintenance",
                  "Asset performance monitoring",
                  "Maintenance optimization"
                ]
              },
              {
                id: 3,
                title: "Reliability & Maintenance",
                description: "Ensure equipment reliability and minimize downtime.",
                features: [
                  "Preventive maintenance",
                  "Equipment monitoring",
                  "Reliability analysis"
                ]
              },
              {
                id: 4,
                title: "Digital Transformation",
                description: "Lead digital transformation initiatives across manufacturing operations.",
                features: [
                  "Digital roadmap planning",
                  "Change management",
                  "Technology integration"
                ]
              }
            ]
          },
          
          // Real Results Section (maps to WhyChooseQuarticSection)
          realResults: {
            title: "Real Results",
            subtitle: "Driving KPIs in Batch-Critical Environments",
            description: "See how leading manufacturers achieve measurable results with Quartic's intelligent manufacturing solutions.",
            industries: [
              "Life Sciences",
              "Chemicals",
              "Consumer Packaged Goods",
              "Food & Beverage"
            ],
            ctaHeading: "Discover all customer use cases",
            ctaText: "Explore All",
            ctaUrl: "#case-studies"
          },
          
          // Real Results Grid Section (new component)
          realResultsGrid: {
            title: "Real Results",
            subtitle: "Driving KPIs in Batch-Critical Environments",
            description: "See how leading manufacturers achieve measurable results with Quartic's intelligent manufacturing solutions.",
            industries: [
              "Life Sciences",
              "Chemicals",
              "Consumer Packaged Goods",
              "Food & Beverage"
            ],
            cards: [
              { id: 0, industry: "Life Sciences", title: "5% Cycle Time Recovery with Reliability in Egg-Based Vaccine Production", metrics: [{ value: "5%", label: "Cycle Time Recovery" }, { value: "5X", label: "Faster Repair Times" }], testimonial: "Quartic's predictive reliability capabilities transformed our egg-based vaccine manufacturing. Their AI-driven insights provided the visibility and proactive action we needed for operational excellence.", author: "Sr. Manager, Vaccine Manufacturing, Global Pharma Company" },
              { id: 1, industry: "Chemicals", title: "25% Faster Cycle Time with Real-Time Quality Monitoring and Optimization", metrics: [{ value: "25%", label: "Cycle Time Reduction" }, { value: "100%", label: "Defect Elimination" }], testimonial: "Quartic's real-time insights and predictive monitoring helped us eliminate defects and significantly reduced cycle times. It fundamentally changed our quality assurance process.", author: "Operations Director, Advanced Materials Manufacturer" },
              { id: 2, industry: "Consumer Packaged Goods", title: "Predictive Quality Optimization Cuts Lab Costs by 80% in CPG Manufacturing", metrics: [{ value: "80%", label: "Lab Testing Cost Reduction" }, { value: "5X", label: "Faster Root Cause Analysis" }], testimonial: "Quartic's solutions significantly transformed our manufacturing by embedding artificial intelligence in our CPG industry quality operations. Predictive quality monitoring has now become integral to our manufacturing processes.", author: "Director of Quality Operations, Global CPG Leader" },
              { id: 3, industry: "Food & Beverage", title: "AI-Powered Quality Control Reduces Waste by 30% in Food Production", metrics: [{ value: "30%", label: "Waste Reduction" }, { value: "40%", label: "Quality Improvement" }], testimonial: "Quartic's AI-driven quality control system revolutionized our food production line. We've seen dramatic improvements in efficiency and quality consistency.", author: "Quality Manager, Leading Food Manufacturer" }
            ],
            ctaHeading: "Discover all customer use cases",
            ctaText: "Explore All",
            ctaUrl: "#case-studies"
          },
          
          // Customer Proofs Section
          customerProofs: {
            title: "Customer Success Stories",
            subtitle: "Real results from real customers",
            description: "See how leading manufacturers are using Quartic to transform their operations.",
            testimonials: [
              {
                quote: "Quartic has revolutionized our manufacturing process. The insights we get are incredible.",
                author: "John Smith",
                company: "Manufacturing Co.",
                role: "Operations Director"
              },
              {
                quote: "The quality improvements we've seen are remarkable. Highly recommend Quartic.",
                author: "Sarah Johnson",
                company: "Tech Industries",
                role: "Quality Manager"
              }
            ]
          },

          // Why Choose Quartic Section
          whyChooseQuartic: {
            title: "Why Choose Quartic",
            features: [
              "Built for regulated manufacturing",
              "Deep OT/IT integration with DataOps",
              "Accelerates time-to-impact with small-data AI",
              "Scalable for complex plant networks"
            ],
            ctaText: "Talk to an Expert",
            ctaUrl: "#contact"
          },
          
          // Blog Latest Section
          blogLatest: {
            title: "Latest Insights",
            subtitle: "Stay updated with manufacturing trends",
            description: "Read our latest articles on manufacturing innovation, AI, and industry best practices.",
            posts: [
              {
                title: "The Future of Manufacturing with AI",
                excerpt: "How artificial intelligence is transforming manufacturing operations.",
                date: "2024-01-15",
                author: "Quartic Team",
                image: "/assets/images/blog/blog-1.jpg",
                url: "#"
              },
              {
                title: "Quality Control in the Digital Age",
                excerpt: "Modern approaches to quality control in manufacturing.",
                date: "2024-01-10",
                author: "Quartic Team",
                image: "/assets/images/blog/blog-2.jpg",
                url: "#"
              }
            ]
          },
          
          // Data Into Action Section
          dataIntoAction: {
            title: "Data Into Action",
            subtitle: "Driving KPIs in Batch-Critical Environments",
            description: "Transform your manufacturing data into actionable insights that drive real business results across pharmaceuticals, chemicals, and consumer packaged goods.",
            tag: "Pharmaceuticals | CPG | Chemicals",
            industryData: {
              pharmaceuticals: {
                title: "Pharmaceuticals & Biotechnology",
                description: "Ensure compliance, quality, and efficiency in drug manufacturing with real-time process monitoring and predictive analytics.",
                metrics: [
                  { value: "99.9%", label: "Quality Compliance" },
                  { value: "30%", label: "Faster Time to Market" },
                  { value: "25%", label: "Cost Reduction" }
                ]
              },
              chemicals: {
                title: "Chemicals & Advanced Materials",
                description: "Optimize complex chemical processes with AI-driven insights for better yield, quality, and safety.",
                metrics: [
                  { value: "20%", label: "Yield Improvement" },
                  { value: "40%", label: "Energy Efficiency" },
                  { value: "50%", label: "Waste Reduction" }
                ]
              },
              cpg: {
                title: "Consumer Packaged Goods",
                description: "Streamline production and ensure consistent quality across high-volume manufacturing operations.",
                metrics: [
                  { value: "35%", label: "Production Efficiency" },
                  { value: "60%", label: "Quality Improvement" },
                  { value: "45%", label: "Cost Savings" }
                ]
              }
            },
            ctaText: "Explore Quartic Architecture",
            ctaUrl: "#",
            ctaDescription: "Connected, Intelligent, and Responsive MOM Systems"
          }
          
        }
      };
      
      setHomepage(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, [forceRefresh]);

  return { homepage, loading, error, refreshData };
};

// New hook for dynamic pages (About, etc.)
const useDynamicPageData = (pageId) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        
        // Use the specific about endpoint for about page with detailed population
        const endpoint = pageId === 2 ? 
          'https://cancerfax.unifiedinfotechonline.com/api/about?populate[0]=sections&populate[1]=sections.bulletPoints&populate[2]=sections.features' :
          `https://cancerfax.unifiedinfotechonline.com/api/pages/${pageId}?populate=sections`;
        
        const response = await fetch(endpoint);
        
        if (!response.ok) {
          throw new Error('Failed to fetch page data');
        }
        
        const data = await response.json();
        console.log(`🎉 Page ${pageId} data loaded successfully:`, data.data);
        
        // The about API already returns sections in the correct format
        if (data.data && data.data.sections) {
          const dynamicPage = {
            ...data.data,
            dynamicSections: data.data.sections, // Use sections directly as they're already in the right format
            isDynamic: true
          };
          setPageData(dynamicPage);
        } else {
          setPageData(data.data);
        }
      } catch (err) {
        console.warn(`Page ${pageId} not available:`, err.message);
        setError(err);
        setPageData(null);
      } finally {
        setLoading(false);
      }
    };

    if (pageId) {
      fetchPageData();
    }
  }, [pageId]);

  return { pageData, loading, error };
};

export default useHomepageData;
export { useDynamicPageData };