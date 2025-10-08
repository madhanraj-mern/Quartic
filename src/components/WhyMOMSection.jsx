import React from 'react';
import AnimatedText from './AnimatedText';
import AnimatedDivider from './AnimatedDivider';
import momSvgDesktop from '../assets/images/home/intelligent-mom.svg';
import momSvgMobile from '../assets/images/home/why-mom-img.svg';

const whyMomFeatures = [
  {
    title: 'Highly Responsive',
    description: 'Instantly adapts to production changes with real-time insight.',
  },
  {
    title: 'Predictive Operations',
    description: 'AI-powered intelligence enables proactive decisions and control.',
  },
  {
    title: 'Decision Automation',
    description: 'Reduces manual effort with system-driven decision execution.',
  },
  {
    title: 'Real-Time Connectivity',
    description: 'Unifies siloed data across OT and IT for seamless operations.',
  },
];

const WhyMOMSection = ({ homepage }) => {
  // Use Strapi data with fallbacks
  const advantageData = homepage?.theQuarticAdvantage || {};
  const title = advantageData.title || 'The Quartic Advantage';
  const subtitle = advantageData.subtitle || 'Connected, Intelligent MOM';
  const points = advantageData.points || whyMomFeatures;
  const buttonText = advantageData.buttonText || 'Why Intelligent MOM';
  const buttonUrl = advantageData.buttonUrl || '/why-mom';
  
  // Debug logging
  console.log('🔍 WhyMOMSection Debug:', {
    hasHomepage: !!homepage,
    hasAdvantageData: !!advantageData,
    advantageData,
    title,
    subtitle,
    buttonText,
    buttonUrl,
    pointsCount: points?.length || 0,
    debugInfo: advantageData._debug
  });
  return (
    <section className="theQuarticAdvantage">
      <div className="container pe-sm-0">
        <div className="w-100 position-relative">
          <AnimatedDivider className="col_divider_line anim-item-clipDown-line" />

          <div className="row align-items-center gx-lg-4">
            <div className="home_why_mom_svg_col px-lg-4">
              <div className="zoom-container d-block d-md-none">
                <button className="zoom_toggle_btn" id="toggleZoomBtn">
                  <img src="/assets/images/icons/zoom-icon.svg" alt="Zoom In" />
                  <span>Zoom In</span>
                </button>
                <img src={momSvgMobile} alt="Intelligent MOM diagram" className="w-100" />
              </div>

              <div className="svg_holder w-100 text-start d-none d-md-block">
                <img src={momSvgDesktop} loading="lazy" alt="Intelligent MOM" />
              </div>
            </div>

            <div className="home_why_mom_dsc_content_col pe-lg-4">
              <div className="home_why_mom_dsc_content_holder">
                <div className="sec_heading_wrap">
                  <div className="sec_heading_holder">
                    <span className="tag_lightBlue lh-base tag-mb-20px">{title}</span>
                    <AnimatedText
                      tag="h2"
                      className="h3_heading_text fw-medium text-white"
                      text={subtitle}
                    />
                  </div>
                </div>

                <div className="comn_dsc_text_white">
                  <ul className="reveal_li">
                    {points.map((feature) => (
                      <li key={feature.title}>
                        <p className="fw-medium text-white">{feature.title}</p>
                        <p>{feature.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="btn-holder">
                  <a href={buttonUrl} className="btn btn_orange" aria-label={buttonText}>
                    <span>{buttonText}</span>
                    <span className="arrow" />
                  </a>
                  <p className="fst-italic text-white mt-3 mb-0">
                    Connected, Intelligent, and Responsive MOM Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMOMSection;
