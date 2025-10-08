import { useState, useEffect, useRef } from 'react';
import StrapiAPI, { STRAPI_CONFIG } from '../utils/strapiConfig';

const useStrapiData = (endpoint, fallbackData = [], options = {}) => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [strapiAvailable, setStrapiAvailable] = useState(false);
  const hasAttemptedFetch = useRef(false);

  const {
    populate = '*',
    filters = {},
    sort = [],
    pagination = { page: 1, pageSize: 100 },
    transform = null,
    useStrapiAPI = false
  } = options;

  useEffect(() => {
    // Check if Strapi is disabled via environment variable
    if (import.meta.env.VITE_DISABLE_STRAPI === 'true') {
      setData(fallbackData);
      setLoading(false);
      return;
    }

    // Only attempt fetch once per endpoint
    if (hasAttemptedFetch.current) return;
    
    // Add a small delay to prevent immediate API calls on page load
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [endpoint, useStrapiAPI]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      let fetchedData = [];

      if (useStrapiAPI) {
        // Use the enhanced StrapiAPI class
         switch (endpoint) {
           case '/api/applications':
             fetchedData = await StrapiAPI.getApplications();
             break;
           case '/api/stakeholders':
             fetchedData = await StrapiAPI.getStakeholders();
             break;
           case '/api/industries':
             fetchedData = await StrapiAPI.getIndustries();
             break;
           case '/api/success-stories':
             fetchedData = await StrapiAPI.getSuccessStories();
             break;
           default:
             fetchedData = fallbackData;
         }
      } else {
        // Use direct fetch with query parameters
        const params = new URLSearchParams();
        
        if (populate) {
          params.append('populate', populate);
        }
        
        if (Object.keys(filters).length > 0) {
          Object.entries(filters).forEach(([key, value]) => {
            params.append(`filters[${key}]`, value);
          });
        }
        
        if (sort.length > 0) {
          params.append('sort', sort.join(','));
        }
        
        if (pagination) {
          params.append('pagination[page]', pagination.page);
          params.append('pagination[pageSize]', pagination.pageSize);
        }

        const url = `${STRAPI_CONFIG.baseURL}${endpoint}?${params.toString()}`;
        const response = await fetch(url, { 
          timeout: STRAPI_CONFIG.timeout,
          signal: AbortSignal.timeout(STRAPI_CONFIG.timeout)
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const responseData = await response.json();
        fetchedData = responseData?.data || responseData || [];
      }
      
      // Apply custom transform if provided
      if (transform && typeof transform === 'function') {
        fetchedData = transform(fetchedData);
      }
      
              // If we got valid data from Strapi, use it; otherwise keep fallback
              if (fetchedData && Array.isArray(fetchedData) && fetchedData.length > 0) {
                setData(fetchedData);
                setStrapiAvailable(true);
              } else {
                setData(fallbackData);
                setStrapiAvailable(false);
              }
    } catch (err) {
      // Only log error if it's not a 404 (expected when Strapi is not set up)
      if (err.name !== 'AbortError' && !err.message.includes('404')) {
        console.warn(`Strapi fetch failed for ${endpoint}:`, err.message);
      }
      setError(err.message);
      setData(fallbackData);
    } finally {
      setLoading(false);
      hasAttemptedFetch.current = true;
    }
  };

  return { data, loading, error, strapiAvailable };
};

export default useStrapiData;
