// Strapi Configuration and API utilities
export const STRAPI_CONFIG = {
  baseURL: import.meta.env.VITE_STRAPI_URL || null,
  timeout: 10000,
  retries: 2,
  retryDelay: 1000
};

// Common Strapi API endpoints
export const STRAPI_ENDPOINTS = {
  applications: '/api/applications',
  stakeholders: '/api/stakeholders',
  industries: '/api/industries',
  successStories: '/api/success-stories',
  blogPosts: '/api/blog-posts',
  testimonials: '/api/testimonials',
  homePage: '/api/home-page',
  footer: '/api/footer'
};

// Default populate options for different content types
export const POPULATE_OPTIONS = {
  applications: '*',
  stakeholders: '*',
  industries: '*',
  successStories: '*',
  blogPosts: '*',
  testimonials: '*',
  homePage: 'hero,applications,stakeholders,industries',
  footer: 'all'
};

// Transform functions for different content types
export const transformApplications = (strapiData) => {
  if (!strapiData || !Array.isArray(strapiData)) {
    return [];
  }
  
  return strapiData.map((item, index) => ({
    id: item.id,
    title: item.title || `Application ${index + 1}`,
    description: item.description || 'Default application description',
    ctaText: item.ctaText || 'Learn More',
    ctaUrl: item.ctaUrl || '#',
    iconAlt: item.iconAlt || `Application ${index + 1} icon`,
    icon: item.icon?.url 
      ? `${STRAPI_CONFIG.baseURL}${item.icon.url}`
      : null,
    image: item.image?.url
      ? `${STRAPI_CONFIG.baseURL}${item.image.url}`
      : null,
    features: item.features || []
  }));
};

export const transformStakeholders = (strapiData) => {
  if (!strapiData || !Array.isArray(strapiData)) {
    return [];
  }
  
  return strapiData.map((item, index) => ({
    id: item.id || index,
    title: item.attributes?.title || item.title || `Stakeholder ${index + 1}`,
    heading: item.attributes?.heading || item.heading || 'Default stakeholder heading',
    bullets: item.attributes?.bullets || item.bullets || ['Default bullet point 1', 'Default bullet point 2'],
    image: item.attributes?.image?.data?.attributes?.url || item.image?.url
      ? `${STRAPI_CONFIG.baseURL}${item.attributes?.image?.data?.attributes?.url || item.image?.url}`
      : null
  }));
};

export const transformIndustries = (strapiData) => {
  if (!strapiData || !Array.isArray(strapiData)) {
    return [];
  }
  
  return strapiData.map((item, index) => ({
    id: item.id,
    title: item.title || `Industry ${index + 1}`,
    description: item.description || 'Default industry description',
    ctaLabel: item.ctaLabel || 'Learn More',
    background: item.background?.url
      ? `${STRAPI_CONFIG.baseURL}${item.background.url}`
      : null,
    type: item.type || 'default',
    metrics: item.metrics || []
  }));
};

export const transformSuccessStories = (strapiData) => {
  if (!strapiData || !Array.isArray(strapiData)) {
    return [];
  }
  
  return strapiData.map((item, index) => ({
    id: item.id || index,
    industry: item.attributes?.industry || item.industry || 'Default Industry',
    title: item.attributes?.title || item.title || `Success Story ${index + 1}`,
    description: item.attributes?.description || item.description || 'Default success story description',
    company: item.attributes?.company || item.company || 'Default Company',
    metrics: item.attributes?.metrics || item.metrics || [],
    link: item.attributes?.link || item.link || '#'
  }));
};

export const transformFooter = (strapiData) => {
  if (!strapiData) {
    return null;
  }
  
  return {
    id: strapiData.id,
    description: strapiData.description || 'Powering connected, responsive, and agile manufacturing by unifying plant-floor systems, enterprise data, and AI-enabled decision intelligence.',
    companyName: strapiData.companyName || 'quartic',
    newsletterTitle: strapiData.newsletterTitle || 'Subscribe to Newsletter',
    newsletterDescription: strapiData.newsletterDescription || 'Get the latest insights, industry trends, and product updates—straight to your inbox.',
    copyrightText: strapiData.copyrightText || '© 2025 Quartic. All Rights Reserved.',
    companyLogo: strapiData.companyLogo?.url 
      ? `${STRAPI_CONFIG.baseURL}${strapiData.companyLogo.url}`
      : null,
    moreAboutUs: strapiData.moreAboutUs || { title: 'More about us', url: 'https://www.quartic.ai/about-us/' },
    officeLocations: strapiData.officeLocations || [],
    menus: strapiData.menus || [],
    quicklinks: strapiData.quicklinks || [],
    socialLinks: strapiData.socialLinks || []
  };
};


// API client with retry logic
export class StrapiAPI {
  constructor() {
    this.baseURL = STRAPI_CONFIG.baseURL;
    this.timeout = STRAPI_CONFIG.timeout;
    this.retries = STRAPI_CONFIG.retries;
    this.retryDelay = STRAPI_CONFIG.retryDelay;
  }

  async request(endpoint, options = {}) {
    if (!this.baseURL) {
      throw new Error('Strapi baseURL not configured');
    }
    
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      timeout: this.timeout,
      ...options
    };

    for (let attempt = 0; attempt <= this.retries; attempt++) {
      try {
        const response = await fetch(url, config);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        if (attempt === this.retries) {
          throw error;
        }
        
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, this.retryDelay * (attempt + 1)));
      }
    }
  }

  async getApplications() {
    try {
      const data = await this.request(`${STRAPI_ENDPOINTS.applications}?populate=${POPULATE_OPTIONS.applications}`);
      if (data && data.data && Array.isArray(data.data)) {
        return transformApplications(data.data);
      }
      return null;
    } catch (error) {
      // Only log if it's not a 404 (expected when Strapi is not set up)
      if (!error.message.includes('404')) {
        console.warn('Failed to fetch applications from Strapi:', error.message);
      }
      return null;
    }
  }

  async getStakeholders() {
    try {
      const data = await this.request(`${STRAPI_ENDPOINTS.stakeholders}?populate=${POPULATE_OPTIONS.stakeholders}`);
      if (data && data.data && Array.isArray(data.data)) {
        return transformStakeholders(data.data);
      }
      return null;
    } catch (error) {
      // Only log if it's not a 404 (expected when Strapi is not set up)
      if (!error.message.includes('404') && !error.message.includes('Not Found')) {
        console.warn('Failed to fetch stakeholders from Strapi:', error.message);
      }
      return null;
    }
  }

  async getIndustries() {
    try {
      const data = await this.request(`${STRAPI_ENDPOINTS.industries}?populate=${POPULATE_OPTIONS.industries}`);
      if (data && data.data && Array.isArray(data.data)) {
        return transformIndustries(data.data);
      }
      return null;
    } catch (error) {
      // Only log if it's not a 404 (expected when Strapi is not set up)
      if (!error.message.includes('404')) {
        console.warn('Failed to fetch industries from Strapi:', error.message);
      }
      return null;
    }
  }

  async getSuccessStories() {
    try {
      const data = await this.request(`${STRAPI_ENDPOINTS.successStories}?populate=${POPULATE_OPTIONS.successStories}`);
      if (data && data.data && Array.isArray(data.data)) {
        return transformSuccessStories(data.data);
      }
      return null;
    } catch (error) {
      // Only log if it's not a 404 (expected when Strapi is not set up)
      if (!error.message.includes('404') && !error.message.includes('Not Found')) {
        console.warn('Failed to fetch success stories from Strapi:', error.message);
      }
      return null;
    }
  }

  async getFooter() {
    try {
      const data = await this.request(`${STRAPI_ENDPOINTS.footer}?populate=${POPULATE_OPTIONS.footer}`);
      if (data && data.data) {
        return transformFooter(data.data);
      }
      return null;
    } catch (error) {
      // Only log if it's not a 404 (expected when Strapi is not set up)
      if (!error.message.includes('404') && !error.message.includes('Not Found')) {
        console.warn('Failed to fetch footer from Strapi:', error.message);
      }
      return null;
    }
  }

}

export default new StrapiAPI();
