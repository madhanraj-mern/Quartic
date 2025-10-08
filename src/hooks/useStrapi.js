import { useState, useEffect, useCallback } from 'react';

const useStrapi = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch(endpoint, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        cache: 'no-cache'
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const jsonData = await response.json();
      
      // Enhanced logging for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('Strapi homepage payload:', jsonData);
        console.log('Data structure check:', {
          hasData: !!jsonData,
          hasAttributes: !!jsonData?.attributes,
          hasDataAttributes: !!jsonData?.data?.attributes,
          keys: Object.keys(jsonData || {}),
          attributesKeys: Object.keys(jsonData?.attributes || {}),
          dataAttributesKeys: Object.keys(jsonData?.data?.attributes || {}),
          applications: jsonData?.data?.attributes?.applications || jsonData?.attributes?.applications || 'Not available'
        });
      }
      
      setData(jsonData);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.error('Strapi fetch timeout:', err);
        setError('Request timeout - please check your connection');
      } else {
        console.error('Strapi fetch error:', err);
        setError(err.message || 'Failed to fetch data from Strapi');
      }
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Retry function for manual retry
  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry };
};

export default useStrapi;