import React, { useRef } from 'react';
import useGSAPAnimations from '../hooks/useGSAPAnimations';
import useHomepageData from '../hooks/useHomepageData';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ClientLogoSlider from '../components/ClientLogoSlider';
import InsightsSection from '../components/InsightsSection';
import WhyMOMSection from '../components/WhyMOMSection';
import DataIntoActionSection from '../components/DataIntoActionSection';
import ProcessFlowSection from '../components/ProcessFlowSection';
import IWSSection from '../components/IWSSection';
import VideoCTASection from '../components/VideoCTASection';
// import SolutionsShowcaseSection from '../components/SolutionsShowcaseSection';
import ApplicationsSection from '../components/ApplicationsSection';
import SimpleApplicationsSection from '../components/SimpleApplicationsSection';
import SophisticatedApplicationsSection from '../components/SophisticatedApplicationsSection';
import StakeholdersSection from '../components/StakeholdersSection';
import IndustriesSection from '../components/IndustriesSection';
import WhyChooseQuarticSection from '../components/WhyChooseQuarticSection';
import CustomerTestimonialsSection from '../components/CustomerTestimonialsSection';
import BlogLatestSection from '../components/BlogLatestSection';
import Footer from '../components/Footer';

import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
// import StrapiDebugTest from '../components/StrapiDebugTest';
// import StrapiConnectionTest from '../components/StrapiConnectionTest';

const HomePage = () => {
  const containerRef = useGSAPAnimations();
  const { data: homepage, loading, error } = useHomepageData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div ref={containerRef} className="home-page" style={{ position: 'relative' }}>
      {/* <StrapiDebugTest /> */}
      {/* <StrapiConnectionTest /> */}
      <Header />
      <HeroSection homepage={homepage} />
      <ClientLogoSlider homepage={homepage} />
      <InsightsSection homepage={homepage} />
      <WhyMOMSection homepage={homepage} />
      <DataIntoActionSection homepage={homepage} />
      <ProcessFlowSection homepage={homepage} />
      <IWSSection homepage={homepage} />
      <VideoCTASection homepage={homepage} />
      {/* <SolutionsShowcaseSection /> */}
      <SophisticatedApplicationsSection homepage={homepage} />
      <StakeholdersSection homepage={homepage} />
      <IndustriesSection homepage={homepage} />
      <WhyChooseQuarticSection homepage={homepage} />
      <CustomerTestimonialsSection homepage={homepage} />
      <BlogLatestSection homepage={homepage} />
      <Footer />
    </div>
  );
};

export default HomePage;