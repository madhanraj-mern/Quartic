/**
 * Utility functions for mapping API data to component props
 */

/**
 * Get full image URL from Strapi image object
 * @param {Object} imageObj - Strapi image object with url property
 * @param {string} baseUrl - Base URL for Strapi (optional, defaults to cancerfax URL)
 * @returns {string} - Full image URL
 */
export const getStrapiImageUrl = (imageObj, baseUrl = 'https://cancerfax.unifiedinfotechonline.com') => {
  if (!imageObj || !imageObj.url) return '';
  
  if (imageObj.url.startsWith('/uploads/')) {
    return `${baseUrl}${imageObj.url}`;
  }
  
  return imageObj.url;
};

/**
 * Get multiple image URLs from Strapi images array
 * @param {Array} imagesArray - Array of Strapi image objects
 * @param {string} baseUrl - Base URL for Strapi (optional)
 * @returns {Array<string>} - Array of full image URLs
 */
export const getStrapiImageUrls = (imagesArray, baseUrl = 'https://cancerfax.unifiedinfotechonline.com') => {
  if (!Array.isArray(imagesArray)) return [];
  
  return imagesArray
    .map(img => getStrapiImageUrl(img, baseUrl))
    .filter(url => url); // Remove empty URLs
};

/**
 * Map testimonial data from various API structures to component format
 * @param {Array} testimonials - Raw testimonial data from API
 * @param {string} defaultImage - Default image for testimonials
 * @returns {Array} - Mapped testimonial data
 */
export const mapTestimonials = (testimonials, defaultImage) => {
  if (!Array.isArray(testimonials)) return [];
  
  return testimonials.map((testimonial, index) => ({
    id: testimonial.id || index,
    name: testimonial.name || testimonial.author || 'Customer',
    title: testimonial.title || testimonial.position || 'Customer',
    company: testimonial.company || testimonial.organization || 'Manufacturing Company',
    quote: testimonial.quote || testimonial.testimonial || testimonial.description || '',
    description: testimonial.description || testimonial.quote || '',
    image: testimonial.image || testimonial.photo || defaultImage,
    rating: testimonial.rating || 5
  }));
};

/**
 * Map blog post data from various API structures to component format
 * @param {Array} blogPosts - Raw blog post data from API
 * @param {string} defaultImage - Default image for blog posts
 * @returns {Array} - Mapped blog post data
 */
export const mapBlogPosts = (blogPosts, defaultImage) => {
  if (!Array.isArray(blogPosts)) return [];
  
  return blogPosts.map((post, index) => ({
    id: post.id || index,
    category: post.category || post.type || 'blog',
    type: post.type || post.category || 'blog',
    title: post.title || post.headline || 'Blog Post',
    excerpt: post.excerpt || post.description || post.summary || '',
    image: post.image || post.featuredImage || post.thumbnail || defaultImage,
    date: post.date || post.publishedAt || post.createdAt || 'Posted recently',
    readTime: post.readTime || post.readingTime || '5 Minutes Read',
    author: post.author || post.writer || 'By Quartic Team',
    url: post.url || post.slug || '#'
  }));
};

/**
 * Map bullet points from Strapi API to component format
 * @param {Array} bulletPoints - Raw bullet points from API
 * @returns {Array} - Mapped bullet points array
 */
export const mapBulletPoints = (bulletPoints) => {
  if (!Array.isArray(bulletPoints)) return [];
  
  return bulletPoints.map(item => item.points || item);
};

/**
 * Get section data with fallback hierarchy
 * @param {Object} data - Section data from props
 * @param {Object} homepage - Homepage data
 * @param {Object} fallbackData - Static fallback data
 * @param {string} sectionKey - Key to extract from homepage data
 * @returns {Object} - Section data with fallbacks applied
 */
export const getSectionData = (data, homepage, fallbackData, sectionKey) => {
  return data || homepage?.[sectionKey] || fallbackData;
};
