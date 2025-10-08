import useStrapi from './useStrapi';

const useHomepageData = () => {
  const { data, loading, error } = useStrapi('https://cancerfax.unifiedinfotechonline.com/api/homepage?populate=*');

  // Helper functions for media handling
  const getMediaUrl = (mediaObject) => {
    if (!mediaObject) return null;
    const baseUrl = 'https://cancerfax.unifiedinfotechonline.com';
    const url = mediaObject?.data?.attributes?.url || mediaObject?.url;
    return url ? `${baseUrl}${url}` : null;
  };

  const getMediaWithFallback = (mediaObject, fallbackUrl) => {
    const strapiUrl = getMediaUrl(mediaObject);
    return strapiUrl || fallbackUrl;
  };

  const getMediaAlt = (mediaObject, fallbackAlt) => {
    return mediaObject?.data?.attributes?.alternativeText || 
           mediaObject?.alternativeText || 
           fallbackAlt;
  };

  // Get the actual data from Strapi response - handle different possible structures
  let strapiData = {};
  
  if (data) {
    // Handle Strapi v4 structure: { data: { id: X, attributes: {...} } }
    if (data.data && data.data.attributes) {
      strapiData = data.data.attributes;
    } 
    // Handle direct attributes structure: { attributes: {...} }
    else if (data.attributes) {
      strapiData = data.attributes;
    } 
    // Handle direct data structure: { data: {...} }
    else if (data.data) {
      strapiData = data.data;
    } 
    // Handle direct object structure
    else {
      strapiData = data;
    }
  }
  
          // Log data structure for debugging in development
          if (process.env.NODE_ENV === 'development') {
            console.log('🔍 Strapi Data Loaded:', {
              hasData: !!data,
              bannerCtaSection: strapiData?.bannerCtaSection ? 'Available' : 'Not available',
              heroSection: strapiData?.heroSection ? 'Available' : 'Not available',
              partnersSection: strapiData?.partnersSection ? 'Available' : 'Not available',
              Application: strapiData?.Application ? 'Available' : 'Not available',
              HowItWorks: strapiData?.HowItWorks ? 'Available' : 'Not available',
              RealResults: strapiData?.RealResults ? 'Available' : 'Not available',
              OurProcess: strapiData?.OurProcess ? 'Available' : 'Not available',
              theQuarticAdvantage: strapiData?.theQuarticAdvantage ? 'Available' : 'Not available',
              theQuarticAdvantageData: strapiData?.theQuarticAdvantage || 'No data',
              button: strapiData?.button ? 'Available' : 'Not available',
              buttonData: strapiData?.button || 'No data',
              RequestDemo: strapiData?.RequestDemo ? 'Available' : 'Not available',
              WhereItWorks: strapiData?.WhereItWorks ? 'Available' : 'Not available',
              whoIsItFor: strapiData?.whoIsItFor ? 'Available' : 'Not available',
              customerProofs: strapiData?.customerProofs ? 'Available' : 'Not available',
              resources: strapiData?.resources ? 'Available' : 'Not available',
              whyChooseQuartic: strapiData?.whyChooseQuartic ? 'Available' : 'Not available'
            });
          }
  
  // Transform the data to match the live Quartic.ai website structure
  const transformedData = {
    headerBanner: {
      type: strapiData.bannerCtaSection?.type || 'Podcast',
      title: strapiData.bannerCtaSection?.title || 'Global UNS, Local Complexity: Why Edge Context Isn\'t Enough',
      ctaText: strapiData.bannerCtaSection?.ctaText || 'Watch Now',
      ctaUrl: strapiData.bannerCtaSection?.ctaUrl || '#'
    },
    heroSection: {
      title: strapiData.heroSection?.title || 'Decision Intelligence for Manufacturing',
      subtitle: strapiData.heroSection?.subtitle || 'Turn plant data into real-time intelligence. Quartic empowers manufacturers with AI-driven insights to boost yield, cut variability, and scale performance.',
      primaryCtaText: strapiData.heroSection?.primaryCtaText || 'Request a Demo',
      primaryCtaUrl: strapiData.heroSection?.primaryCtaUrl || 'https://www.quartic.ai/demo/',
      secondaryCtaText: strapiData.heroSection?.secondaryCtaText || 'Watch Video',
      secondaryCtaUrl: strapiData.heroSection?.secondaryCtaUrl || '#'
    },
    applications: {
      title: strapiData.Application?.title || 'Transform Your Operations with Quartic',
      subtitle: strapiData.Application?.subtitle || 'Discover our suite of intelligent manufacturing applications',
      cards: strapiData.Application?.applications?.map((card, index) => ({
        title: card?.title || '',
        description: card?.description || '',
        ctaText: card?.ctaText || 'Learn More',
        ctaUrl: card?.ctaUrl || '#',
        icon: getMediaWithFallback(
          card?.icon,
          [
            '/assets/images/home/solutions/icons/performance-improvement.svg',
            '/assets/images/home/solutions/icons/predictive-maintenance.svg',
            '/assets/images/home/solutions/icons/batch-optimisation.svg',
            '/assets/images/home/solutions/icons/quality-by-design.svg',
            '/assets/images/home/solutions/icons/energy-utility-optimization.svg'
          ][index]
        ),
        iconAlt: getMediaAlt(card?.icon, card?.title || 'Application icon'),
        image: getMediaWithFallback(
          card?.image,
          [
            '/assets/images/home/solutions/process-optimizer.jpg',
            '/assets/images/home/solutions/reliability.jpg',
            '/assets/images/home/solutions/batch-mvda.jpg',
            '/assets/images/home/solutions/pd-optimizer.jpg',
            '/assets/images/home/solutions/automated-pat.jpg'
          ][index]
        ),
        imageAlt: getMediaAlt(card?.image, `${card?.title || 'Application'} illustration`)
      })) || [
        {
          title: 'Process Optimizer',
          description: 'AI-powered process control for yield, quality, and diagnostics.',
          ctaText: 'Learn More',
          ctaUrl: 'https://www.quartic.ai/process-optimizer',
          icon: '/assets/images/home/solutions/icons/performance-improvement.svg',
          iconAlt: 'Process Optimizer icon',
          image: '/assets/images/home/solutions/process-optimizer.jpg',
          imageAlt: 'Process Optimizer illustration'
        },
        {
          title: 'Reliability',
          description: 'Predictive failure detection to minimize downtime.',
          ctaText: 'Learn More',
          ctaUrl: 'https://www.quartic.ai/reliability',
          icon: '/assets/images/home/solutions/icons/predictive-maintenance.svg',
          iconAlt: 'Reliability icon',
          image: '/assets/images/home/solutions/reliability.jpg',
          imageAlt: 'Reliability illustration'
        },
        {
          title: 'Batch MVDA',
          description: 'Multivariate insights across lab and plant data streams.',
          ctaText: 'Learn More',
          ctaUrl: 'https://www.quartic.ai/batch-mvda',
          icon: '/assets/images/home/solutions/icons/batch-optimisation.svg',
          iconAlt: 'Batch MVDA icon',
          image: '/assets/images/home/solutions/batch-mvda.jpg',
          imageAlt: 'Batch MVDA illustration'
        },
        {
          title: 'PD Optimizer',
          description: 'In-silico optimization for faster product scale-up.',
          ctaText: 'Learn More',
          ctaUrl: 'https://www.quartic.ai/pd-optimizer',
          icon: '/assets/images/home/solutions/icons/quality-by-design.svg',
          iconAlt: 'PD Optimizer icon',
          image: '/assets/images/home/solutions/pd-optimizer.jpg',
          imageAlt: 'PD Optimizer illustration'
        },
        {
          title: 'Automated PAT',
          description: 'Integrated analytics for continuous batch verification.',
          ctaText: 'Learn More',
          ctaUrl: 'https://www.quartic.ai/automated-pat',
          icon: '/assets/images/home/solutions/icons/energy-utility-optimization.svg',
          iconAlt: 'Automated PAT icon',
          image: '/assets/images/home/solutions/automated-pat.jpg',
          imageAlt: 'Automated PAT illustration'
        }
      ]
    },
            partnersSection: {
              title: strapiData.partnersSection?.title || 'Trusted by Industry Leaders',
              subtitle: strapiData.partnersSection?.subtitle || 'Leading manufacturers rely on Quartic for intelligent operations',
              logos: strapiData.partnersSection?.logos || []
            },
            realResults: {
              title: strapiData.RealResults?.title || 'Real Results',
              subtitle: strapiData.RealResults?.subtitle || 'Driving KPIs in Batch-Critical Environments',
              description: strapiData.RealResults?.description || 'Discover customer use cases',
              kpis: strapiData.RealResults?.kpis || []
            },
            exploreButton: {
              buttonName: strapiData.ExploreButton?.buttonName || 'Explore All',
              url: strapiData.ExploreButton?.url || '#'
            },
            requestDemo: {
              title: strapiData.RequestDemo?.title || 'See what real-time, intelligent manufacturing looks like',
              subtitle: strapiData.RequestDemo?.subtitle || '',
              description: strapiData.RequestDemo?.description || ''
            },
            whereItWorks: {
              title: strapiData.WhereItWorks?.title || 'Where It Works',
              heading: strapiData.WhereItWorks?.Heading || 'Built for Regulated Operations',
              description: strapiData.WhereItWorks?.description || 'For industries where agility, compliance, and quality are non-negotiable.'
            },
            whoIsItFor: {
              title: strapiData.whoIsItFor?.title || 'Who Is It For',
              subtitle: strapiData.whoIsItFor?.subtitle || 'Quartic Built for every stakeholder',
              description: strapiData.whoIsItFor?.description || ''
            },
            customerProofs: {
              title: strapiData.customerProofs?.title || 'Customer Proof',
              subtitle: strapiData.customerProofs?.subtitle || 'What our customers say',
              description: strapiData.customerProofs?.description || ''
            },
            resources: {
              title: strapiData.resources?.title || 'Resources',
              subtitle: strapiData.resources?.subtitle || 'Explore More on Intelligent Manufacturing',
              description: strapiData.resources?.description || ''
            },
            process: {
              title: strapiData.OurProcess?.title || 'How MOM Becomes Intelligent',
              subtitle: strapiData.OurProcess?.subtitle || 'Quartic uses DataOps for real-time context to convert raw signals into decision intelligence across the enterprise.',
              steps: strapiData.OurProcess?.steps || [
                {
                  title: 'Connect',
                  description: 'Connect legacy OT and modern IT systems with iLuminator.'
                },
                {
                  title: 'Industrial DataOps',
                  subtitle: 'iLuminator',
                  description: 'Stream real-time context across materials, processes, products and equipments.'
                },
                {
                  title: 'Industrial Intelligence',
                  subtitle: 'eXponence',
                  description: 'Apply MVDA, ML, and optimization for quality and yield.'
                },
                {
                  title: 'Applications',
                  description: 'Deploy across edge/cloud using modular smart manufacturing solutions.'
                }
              ]
            },
            whyChooseQuartic: {
              title: strapiData.whyChooseQuartic?.title || 'Why Choose Quartic',
              features: strapiData.whyChooseQuartic?.features || [
                'Built for regulated manufacturing',
                'Deep OT/IT integration with DataOps',
                'Accelerates time-to-impact with small-data AI',
                'Scalable for complex plant networks'
              ],
              ctaText: strapiData.whyChooseQuartic?.button?.buttonName || 'Talk to an Expert',
              ctaUrl: strapiData.whyChooseQuartic?.button?.url || '#contact'
            },
            howItWorks: {
              title: strapiData.HowItWorks?.title || 'How It Works',
              subtitle: strapiData.HowItWorks?.subtitle || 'AI-driven Optimization Needs Context',
              description: strapiData.HowItWorks?.description || 'AI in manufacturing is only as good as the data it runs on. Quartic contextualizes OT data, enabling faster, smarter decisions across MOM workflows.',
              ctaText: strapiData.HowItWorks?.ctaText || 'Explore Quartic Platform',
              ctaUrl: strapiData.HowItWorks?.ctaUrl || '#',
              features: strapiData.HowItWorks?.features || []
            },
            theQuarticAdvantage: {
              // ✅ This section IS available in Strapi!
              title: strapiData.theQuarticAdvantage?.title || 'The Quartic Advantage',
              subtitle: strapiData.theQuarticAdvantage?.subtitle || 'Connected, Intelligent MOM',
              points: strapiData.theQuarticAdvantage?.points || [
                {
                  title: 'Highly Responsive',
                  description: 'Instantly adapts to production changes with real-time insight.'
                },
                {
                  title: 'Predictive Operations',
                  description: 'AI-powered intelligence enables proactive decisions and control.'
                },
                {
                  title: 'Decision Automation',
                  description: 'Reduces manual effort with system-driven decision execution.'
                },
                {
                  title: 'Real-Time Connectivity',
                  description: 'Unifies siloed data across OT and IT for seamless operations.'
                }
              ],
              buttonText: strapiData.theQuarticAdvantage?.button?.[0]?.buttonName || 
                         strapiData.theQuarticAdvantage?.button?.buttonName || 
                         strapiData.theQuarticAdvantage?.buttonText ||
                         'Why Intelligent MOM',
              buttonUrl: strapiData.theQuarticAdvantage?.button?.[0]?.url || 
                        strapiData.theQuarticAdvantage?.button?.url || 
                        strapiData.theQuarticAdvantage?.buttonUrl ||
                        '/why-mom',
              // Debug: Log the actual button data structure
              _debug: {
                rawButtonData: strapiData.theQuarticAdvantage?.button,
                buttonArray: strapiData.theQuarticAdvantage?.button?.[0],
                buttonObject: strapiData.theQuarticAdvantage?.button,
                buttonText: strapiData.theQuarticAdvantage?.buttonText,
                buttonUrl: strapiData.theQuarticAdvantage?.buttonUrl
              }
            },
            button: {
              // ✅ Separate button section for global button data
              text: strapiData.button?.text || strapiData.button?.buttonName || 'Why Intelligent MOM',
              url: strapiData.button?.url || '/why-mom',
              className: strapiData.button?.className || 'btn btn_orange',
              containerClass: strapiData.button?.containerClass || 'btn-holder',
              // Debug: Log the actual button data structure
              _debug: {
                rawButtonData: strapiData.button,
                hasButtonData: !!strapiData.button
              }
            }
  };

  return { data: transformedData, loading, error, rawData: data };
};

export default useHomepageData;