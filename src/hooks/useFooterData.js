import { useState, useEffect } from 'react';
import StrapiAPI from '../utils/strapiConfig';

const useFooterData = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check if Strapi is available
        if (!import.meta.env.VITE_STRAPI_URL) {
          console.log('Strapi URL not configured, using default footer data');
          setFooterData(getDefaultFooterData());
          return;
        }

        const data = await StrapiAPI.getFooter();
        
        if (data) {
          setFooterData(data);
        } else {
          // Fallback to default data if Strapi data is not available
          setFooterData(getDefaultFooterData());
        }
      } catch (err) {
        console.warn('Error fetching footer data:', err);
        setError(err);
        setFooterData(getDefaultFooterData());
      } finally {
        setLoading(false);
      }
    };

    // Add a small delay to prevent immediate API calls
    const timer = setTimeout(fetchFooterData, 1000);
    return () => clearTimeout(timer);
  }, []);

  return { footerData, loading, error };
};

// Default footer data fallback
const getDefaultFooterData = () => ({
  id: 'default',
  description: 'Empowering industrial intelligence by integrating MES, LIMS, automation, and enterprise data with AI-driven insights through Quartic DataOps.',
  companyName: 'quartic',
  newsletterTitle: 'Subscribe to Newsletter',
  newsletterDescription: 'Get the latest news, updates and special offers straight to your inbox',
  copyrightText: '© 2025 — Copyright All Rights reserved',
  companyLogo: null,
  moreAboutUs: { title: 'More about us', url: 'https://www.quartic.ai/about-us/' },
  officeLocations: [
    { country: 'India', address: 'Okhla INDL Estate, New Delhi, Delhi 110020', isMainOffice: true },
    { country: 'USA', address: 'San Jose, California, 95112, United States', isMainOffice: false },
    { country: 'Canada', address: 'San Jose, California, 95112, United States', isMainOffice: false }
  ],
  menus: [
    {
      name: 'Applications',
      menuItems: [
        { title: 'Process Optimiser', url: 'https://www.quartic.ai/process-optimizer/' },
        { title: 'Reliability', url: 'https://www.quartic.ai/reliability/' },
        { title: 'MVDA', url: 'https://www.quartic.ai/batch-mvda/' },
        { title: 'Process Development', url: 'https://www.quartic.ai/pd-optimizer/' },
        { title: 'Automated PAT', url: '#' }
      ]
    },
    {
      name: 'Industrial DataOps',
      menuItems: [
        { title: 'iLuminator', url: 'https://www.quartic.ai/iluminator/' }
      ]
    },
    {
      name: 'Industrial Intelligence',
      menuItems: [
        { title: 'eXponence', url: 'https://www.quartic.ai/exponence/' }
      ]
    },
    {
      name: 'Platform',
      menuItems: [
        { title: 'Overview', url: 'https://www.quartic.ai/platform-overview/' },
        { title: 'Why Intelligent MOM', url: 'https://www.quartic.ai/manufacturing-operations-management/' }
      ]
    }
  ],
  quicklinks: [
    { Label: 'Blog', url: 'https://www.quartic.ai/blog/' },
    { Label: 'Videos', url: 'https://www.quartic.ai/videos/' },
    { Label: 'About Us', url: 'https://www.quartic.ai/about-us/' },
    { Label: 'News', url: 'https://www.quartic.ai/newsroom/' },
    { Label: 'Careers', url: 'https://www.quartic.ai/careers/' },
    { Label: 'Partners', url: 'https://www.quartic.ai/partners/' }
  ],
  socialLinks: [
    { platform: 'linkedin', url: 'https://www.linkedin.com/company/quartic.ai/', icon: null },
    { platform: 'youtube', url: 'https://www.youtube.com/channel/UCxg4jen6CLP69Rvhj-GGQiQ', icon: null },
    { platform: 'x', url: 'https://twitter.com/quarticai', icon: null }
  ]
});

export default useFooterData;
