import React from 'react';
import useGSAPAnimations from '../hooks/useGSAPAnimations';
import { useDynamicPageData } from '../hooks/useHomepageData';
import DynamicSectionRenderer from '../components/DynamicSectionRenderer';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const AboutPage = () => {
  const containerRef = useGSAPAnimations();
  const { pageData, loading, error } = useDynamicPageData(2); // Assuming About page has ID 2

  // Debug: Log About page data
  console.log('📄 AboutPage - Data status:', {
    loading,
    error: error?.message,
    hasPageData: !!pageData,
    isDynamic: pageData?.isDynamic,
    hasDynamicSections: !!pageData?.dynamicSections,
    sectionsCount: pageData?.dynamicSections?.length || 0,
    pageDataKeys: pageData ? Object.keys(pageData) : []
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  // Check if this is dynamic content (has dynamicSections)
  const isDynamic = pageData?.isDynamic && pageData?.dynamicSections;

  return (
    <div ref={containerRef} className="about-page" style={{ position: 'relative' }}>
      {isDynamic ? (
        // Dynamic rendering - sections are controlled by Strapi
        <DynamicSectionRenderer 
          sections={pageData.dynamicSections} 
          pageType="about" 
          homepage={pageData}
        />
      ) : (
        // Fallback content if no dynamic sections
        <div className="container">
          <h1>About Us</h1>
          <p>This page is being configured. Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;