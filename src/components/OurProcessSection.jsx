import React, { useState } from 'react';
import { motion } from 'framer-motion';
import connectIcon from '../assets/images/home/our_process/connect-icon.svg';
import dataopsIcon from '../assets/images/home/our_process/iLuminator-icon.svg';
import intelligenceIcon from '../assets/images/home/our_process/eXponence-icon.svg';
import applicationsIcon from '../assets/images/home/our_process/applications-icon.svg';
import contactGraphicImg from '../assets/images/home/our_process/contact-graphic-img.png';
import iLuminatorImg from '../assets/images/home/our_process/iLuminator_img.png';
import applicationsGraphicImg from '../assets/images/home/our_process/applications-graphic-img.png';

const OurProcessSection = ({ homepage }) => {
  // Use Strapi data with fallbacks - Fixed data access pattern
  const ourProcessData = homepage?.OurProcess || {};
  const title = ourProcessData.title || 'Our Process';
  const subtitle = ourProcessData.subtitle || 'How MOM Becomes Intelligent';
  const description = ourProcessData.description || 'Quartic uses DataOps for real-time context to convert raw signals into decision intelligence across the enterprise.';
  const strapiSteps = ourProcessData.steps || [];
  
  // Default steps as fallback
  const defaultSteps = [
    {
      key: 'connect',
      title: 'Connect',
      description: 'Connect legacy OT and modern IT systems with iLuminator.',
      icon: connectIcon,
      linkText: 'Learn more',
      linkHref: '#',
      image: contactGraphicImg,
    },
    {
      key: 'iluminator',
      title: 'Industrial DataOps',
      subtitle: 'iLuminator',
      description: 'Stream real-time context across materials, processes, products and equipments.',
      icon: dataopsIcon,
      linkText: 'Learn more',
      linkHref: '#',
      image: iLuminatorImg,
    },
    {
      key: 'exponence',
      title: 'Industrial Intelligence',
      subtitle: 'eXponence',
      description: 'Apply MVDA, ML, and optimization for quality and yield.',
      icon: intelligenceIcon,
      linkText: 'Learn more',
      linkHref: '#',
      image: iLuminatorImg,
    },
    {
      key: 'applications',
      title: 'Applications',
      description: 'Deploy across edge/cloud using modular smart manufacturing solutions.',
      icon: applicationsIcon,
      linkText: 'View All Applications',
      linkHref: '#',
      image: applicationsGraphicImg,
    },
  ];

  // Use Strapi steps if available, otherwise use default steps
  const steps = strapiSteps.length > 0 ? strapiSteps.map((step, index) => ({
    key: step.key || `step-${index}`,
    title: step.title || defaultSteps[index]?.title || '',
    subtitle: step.subtitle || defaultSteps[index]?.subtitle || '',
    description: step.description || defaultSteps[index]?.description || '',
    icon: defaultSteps[index]?.icon || connectIcon,
    linkText: step.linkText || defaultSteps[index]?.linkText || 'Learn more',
    linkHref: step.linkHref || defaultSteps[index]?.linkHref || '#',
    image: defaultSteps[index]?.image || contactGraphicImg,
  })) : defaultSteps;

  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleAccordionToggle = (index) => {
    setActiveAccordion((prev) => (prev === index ? -1 : index));
  };

  // Debug logging
  console.log('OurProcessSection - homepage:', homepage);
  console.log('OurProcessSection - ourProcessData:', ourProcessData);

  return (
    <section className="home_our_process_sec bg-black">
      <div className="home_our_process_top">
        <div className="container px-sm-0">
          <div className="row justify-content-center gx-0">
            <div className="col-xl-5">
              <motion.div
                className="sec_heading_wrap"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
              >
                <div className="sec_heading_holder">
                  <span className="tag_lightBlue lh-base tag-mb-20px">{title}</span>
                  <h2 className="h3_heading_text fw-medium text-white">
                    {subtitle}
                  </h2>
                </div>
              </motion.div>
              <motion.div
                className="comn_dsc_text_white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p>
                  {description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="home_our_process_accordion_holder d-block d-xl-none">
        <div className="container px-sm-0">
          <div className="accordion card-accordion" id="home_our_process_accordion">
            {steps.map((step, index) => {
              const isActive = activeAccordion === index;
              return (
                <div className="accordion-item" key={step.key}>
                  <h3 className="accordion-header" id={`heading-${step.key}`}>
                    <button
                      className={`accordion-button${isActive ? '' : ' collapsed'}`}
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={`collapse-${step.key}`}
                      onClick={() => handleAccordionToggle(index)}
                    >
                      <div className="icon-holder">
                        <img loading="lazy" className="object-fit-contain" src={step.icon} alt={step.title} />
                      </div>
                      <span className="heading_text fw-medium lh-base">{step.title}</span>
                    </button>
                  </h3>
                  <div
                    id={`collapse-${step.key}`}
                    className={`accordion-collapse collapse${isActive ? ' show' : ''}`}
                    aria-labelledby={`heading-${step.key}`}
                  >
                    <div className="accordion-body">
                      <div className="accordion-body-content">
                        <div className="dscText_content">
                          <p className="mb-0">{step.description}</p>
                          <div className="link_holder mt-2">
                            <a href={step.linkHref} className="link_text" aria-label={step.linkText}>
                              {step.linkText}
                            </a>
                          </div>
                        </div>
                        <div className={`img_wrap ${step.key === 'connect' ? 'connect_graphic_img' : ''}`}>
                          <div className="ratio">
                            <img src={step.image} alt={step.title} loading="lazy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Cards */}
      <div className="home_our_process_cards_holder d-none d-xl-block">
        <div className="flex_card_group_total">
          {/* Left fixed card */}
          <div className="flex_card_fixed">
            <div className="flex_card_fixed_body h-100">
              <div className="card_top_content">
                <div className="icon-holder">
                  <img loading="lazy" className="object-fit-contain" src={steps[0].icon} alt={steps[0].title} />
                </div>
                <h3 className="heading_text fw-medium lh-base">{steps[0].title}<span className="brand d-block">iLuminator</span></h3>
                <div className="comn_dsc_text">
                  <p>{steps[0].description}</p>
                </div>
              </div>
              <div className="card_graphic_img_holder">
                <div
                  className="card_graphic_img"
                  style={{ backgroundImage: `url(${steps[0].image})` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex_card_group">
            {[steps[1], steps[2]].map((step, index) => (
              <div
                className={`flex_card flex_card_is_hoverable${index === 0 ? ' is_hovered always_hovered' : ''}`}
                key={step.key}
              >
                <div className="d-flex flex-column h-100">
                  <div className="card_top_content">
                    <div className="icon-holder">
                      <img loading="lazy" className="object-fit-contain" src={step.icon} alt={step.title} />
                    </div>
                    <h3 className="heading_text fw-medium lh-base">{step.title}<span className="brand d-block">{index === 0 ? 'iLuminator' : 'eXponence'}</span></h3>
                  </div>
                  <div className="card_top_content_onhover">
                    <div className="inner-box d-flex justify-content-between w-100">
                      <div className="icon-holder flex-shrink-0">
                        <img loading="lazy" className="object-fit-contain" src={step.icon} alt={step.title} />
                      </div>
                      <div className="dscText_content">
                        <h3 className="heading_text fw-medium lh-base">{step.title}<span className="brand d-block">{index === 0 ? 'iLuminator' : 'eXponence'}</span></h3>
                        <p className="mb-0">{step.description}</p>
                        <div className="link_holder mt-2">
                          <a href={step.linkHref} className="link_text" aria-label={step.linkText}>
                            {step.linkText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card_side_img_holder mt-auto">
                    <div
                      className="card_side_img"
                      style={{ backgroundImage: `url(${step.image})` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right fixed card */}
          <div className="flex_card_fixed">
            <div className="flex_card_fixed_body h-100">
              <div className="card_top_content">
                <div className="icon-holder">
                  <img loading="lazy" className="object-fit-contain" src={steps[3].icon} alt={steps[3].title} />
                </div>
                <h3 className="heading_text fw-medium lh-base">{steps[3].title}</h3>
                <div className="comn_dsc_text">
                  <p>{steps[3].description}</p>
                  <div className="link_holder mt-2">
                    <a href={steps[3].linkHref} className="link_text" aria-label={steps[3].linkText}>
                      {steps[3].linkText}
                    </a>
                  </div>
                </div>
              </div>
              <div className="card_graphic_img_holder applications_graphic_img_holder">
                <div
                  className="card_graphic_img"
                  style={{ backgroundImage: `url(${steps[3].image})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
