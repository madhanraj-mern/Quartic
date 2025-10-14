import React, { useRef } from 'react';
import useGSAPAnimations from '../hooks/useGSAPAnimations';
import useHomepageData from '../hooks/useHomepageData';
import DynamicSectionRenderer from '../components/DynamicSectionRenderer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SimpleHeroSection from '../components/SimpleHeroSection';
import ClientLogoSlider from '../components/ClientLogoSlider';
import HowItWorksSection from '../components/HowItWorksSection';
import OurProcessSection from '../components/OurProcessSection';
import IWSSection from '../components/IWSSection';
import RequestDemoSection from '../components/RequestDemoSection';
// import SolutionsShowcaseSection from '../components/SolutionsShowcaseSection';
import ApplicationsSection from '../components/ApplicationsSection';
import SimpleApplicationsSection from '../components/SimpleApplicationsSection';
import ApplicationSection from '../components/ApplicationSection';
import WhoIsItForSection from '../components/WhoIsItForSection';
import RealResultsGridSection from '../components/RealResultsGridSection';
import WhyMOMSection from '../components/WhyMOMSection';
import WhyChooseQuarticSection from '../components/WhyChooseQuarticSection';
import CustomerProofsSection from '../components/CustomerProofsSection';
import BlogLatestSection from '../components/BlogLatestSection';
import Footer from '../components/Footer';

import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import ImageTest from '../components/ImageTest';
import DirectImageTest from '../components/DirectImageTest';
// import StrapiDebugTest from '../components/StrapiDebugTest';
// import StrapiConnectionTest from '../components/StrapiConnectionTest';

const HomePage = () => {
  const containerRef = useGSAPAnimations();
  const { homepage, loading, error, refreshData } = useHomepageData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  // Check if this is dynamic content (has dynamicSections)
  const isDynamic = homepage?.isDynamic && homepage?.dynamicSections;

  // Debug: Log which rendering path is being taken
  console.log('🏠 HomePage - Rendering decision:', {
    isDynamic,
    hasHomepage: !!homepage,
    hasDynamicSections: !!homepage?.dynamicSections,
    dynamicSectionsCount: homepage?.dynamicSections?.length || 0,
    homepageKeys: homepage ? Object.keys(homepage) : []
  });

  return (
    <div ref={containerRef} className="home-page" style={{ position: 'relative' }}>
      
      {/* <StrapiDebugTest /> */}
      {/* <StrapiConnectionTest /> */}
      {/* <ImageTest /> */}
      {/* <DirectImageTest /> */}
      
      {isDynamic ? (
        // Dynamic rendering - sections are controlled by Strapi
        <DynamicSectionRenderer 
          sections={homepage.dynamicSections} 
          pageType="homepage" 
          homepage={homepage}
        />
      ) : (
        // Static rendering - fallback to hardcoded sections
        <>
          <Header homepage={homepage} />
          <HeroSection homepage={homepage} />
          <ClientLogoSlider homepage={homepage} />
          <HowItWorksSection homepage={homepage} />
          <WhyMOMSection homepage={homepage} />
          <RealResultsGridSection homepage={homepage} />
          <OurProcessSection homepage={homepage} />
          <IWSSection homepage={homepage} />
          <RequestDemoSection homepage={homepage} />
          {/* <SolutionsShowcaseSection /> */}
          <ApplicationSection homepage={homepage} />
          <WhoIsItForSection homepage={homepage} />
          <WhyChooseQuarticSection homepage={homepage} />
          <CustomerProofsSection homepage={homepage} />
          <BlogLatestSection homepage={homepage} />
          <Footer homepage={homepage} />
        </>
      )}
    </div>
  );
};

export default HomePage;