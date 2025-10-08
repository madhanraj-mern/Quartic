import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import AnimatedText from './AnimatedText';
import iwsImg1 from '../assets/images/home/iws/iws-slider-img.jpg';
import iwsImg2 from '../assets/images/home/iws/iws-slider-img2.jpg';
import iwsImg3 from '../assets/images/home/iws/iws-slider-img3.jpg';
import iwsImg4 from '../assets/images/home/iws/iws-slider-img4.jpg';

const IWSSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const mainSwiperRef = useRef(null);

  const slides = [
    {
      image: iwsImg1,
      title: 'Process Control Engineers',
      description: 'Monitor, analyze, and tune processes in real time with contextual AI support.',
      features: [
        'Optimize control strategies on live production',
        'Identify root causes faster with MVDA',
        'Eliminate guesswork in process tuning'
      ]
    },
    {
      image: iwsImg2,
      title: 'Data Scientists',
      description: 'Leverage clean, contextualized OT/IT data to deploy AI models that scale.',
      features: [
        'Access ready-to-use industrial datasets',
        'Apply models with faster validation cycles',
        'Reduce model-to-impact lag time'
      ]
    },
    {
      image: iwsImg3,
      title: 'IT/OT Engineers',
      description: 'Securely bridge OT and IT with a scalable, governed data infrastructure.',
      features: [
        'Integrate edge, cloud, and enterprise systems',
        'Maintain compliance and data lineage',
        'Avoid vendor lock-in with open standards'
      ]
    },
    {
      image: iwsImg4,
      title: 'Plant Managers',
      description: 'Turn digital strategy into measurable plant-level impact — quickly and at scale.',
      features: [
        'Connect strategy to real operational KPIs',
        'Accelerate time-to-impact from months to weeks',
        'Build a culture of informed decision-making'
      ]
    }
  ];

  return (
    <section className="home_iws_sec" id="statistics">
      <div className="container one_side_full_container pe-0 ms-auto me-0 position-relative">
        <div className="row gx-0">
          <div className="osfc_left_col pe-2 pe-md-3">
            <div className="sec_heading_wrap">
              <div className="sec_heading_holder">
                <span className="tag_lightBlue lh-base tag-mb-20px">Roles</span>
                <AnimatedText
                  tag="h2"
                  className="h4_heading_text fw-medium text-start"
                  text="Built for Regulated Operations"
                />
              </div>
            </div>
          </div>
          <div className="osfc_right_col">
            <div className="iws_slider_holder">
              {/* Main Slider */}
              <Swiper
                modules={[Autoplay, Thumbs]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                className="iws-slider-main"
                ref={mainSwiperRef}
                speed={1500}
                loop={true}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="main-slide-image">
                      <div className="ratio">
                        <img src={slide.image} alt={slide.title} loading="lazy" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Slider */}
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={0}
                slidesPerView={1.25}
                watchSlidesProgress={true}
                className="iws-thumb-slider"
                breakpoints={{
                  480: { slidesPerView: 2 },
                  768: { slidesPerView: 4 },
                }}
                speed={1500}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-info">
                      <div className="content_holder">
                        <h3 className="heading_text fw-medium">{slide.title}</h3>
                        <p className="dsc_text">{slide.description}</p>
                        
                        <div className="active_show_content">
                          <ul className="feature_list">
                            {slide.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                          <div className="btn_holder mt-3">
                            <a href="#" className="link_text">Read More</a>
                          </div>
                        </div>
                      </div>
                      <div className="underline"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IWSSection;
