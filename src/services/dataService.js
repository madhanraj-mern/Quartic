/**
 * Centralized data service for managing dynamic content from Strapi API
 * Provides caching, error handling, and fallback mechanisms
 */
class DataService {
  constructor() {
    this.baseUrl = 'https://cancerfax.unifiedinfotechonline.com/api';
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
  }

  /**
   * Generic fetch method with caching
   * @param {string} endpoint - API endpoint
   * @param {Object} options - Fetch options
   * @returns {Promise<Object|null>} - API response data or null on error
   */
  async fetchData(endpoint, options = {}) {
    const cacheKey = `${endpoint}_${JSON.stringify(options)}`;
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }

    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Cache the result
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now()
      });

      return data;
    } catch (error) {
      // Silently handle API failures - components will use fallback data
      return null;
    }
  }

  /**
   * Get homepage data with all populated fields
   * @returns {Promise<Object|null>} - Homepage data or null on error
   */
  async getHomepageData() {
    return await this.fetchData('/homepage?populate=*');
  }

  /**
   * Get about page data with sections and bullet points
   * @returns {Promise<Object|null>} - About page data or null on error
   */
  async getAboutData() {
    return await this.fetchData('/about?populate[0]=sections&populate[1]=sections.bulletPoints&populate[2]=sections.features');
  }

  // Testimonials data (if available)
  async getTestimonials() {
    return await this.fetchData('/testimonials?populate=*');
  }

  // Blog posts data (if available)
  async getBlogPosts() {
    return await this.fetchData('/blog-posts?populate=*');
  }

  // Applications data (if available)
  async getApplications() {
    return await this.fetchData('/applications?populate=*');
  }

  // Real results data (if available)
  async getRealResults() {
    return await this.fetchData('/real-results?populate=*');
  }

  // Stakeholders data (if available)
  async getStakeholders() {
    return await this.fetchData('/stakeholders?populate=*');
  }

  // Clear cache
  clearCache() {
    this.cache.clear();
  }

  // Get cached data
  getCachedData(endpoint) {
    const cached = this.cache.get(endpoint);
    return cached ? cached.data : null;
  }
}

// Create singleton instance
const dataService = new DataService();

export default dataService;
