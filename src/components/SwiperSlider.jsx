import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const SwiperSlider = ({
  slides = [],
  className = '',
  autoplay = false,
  autoplayDelay = 3000,
  effect = 'slide',
  loop = true,
  navigation = false,
  pagination = false,
  slidesPerView = 1,
  spaceBetween = 0,
  breakpoints = {},
  onSlideChange = () => {},
  children
}) => {
  const swiperRef = useRef(null);

  const swiperConfig = {
    modules: [Autoplay, Navigation, Pagination, EffectFade],
    className: `swiper-slider ${className}`,
    loop,
    effect,
    slidesPerView,
    spaceBetween,
    breakpoints,
    onSwiper: (swiper) => {
      swiperRef.current = swiper;
    },
    onSlideChange: (swiper) => {
      onSlideChange(swiper);
    },
    autoplay: autoplay ? {
      delay: autoplayDelay,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    } : false,
    navigation: navigation ? {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } : false,
    pagination: pagination ? {
      el: '.swiper-pagination',
      clickable: true,
    } : false,
  };

  return (
    <div className="swiper-container">
      <Swiper {...swiperConfig}>
        {children ? (
          children
        ) : (
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide}
            </SwiperSlide>
          ))
        )}
      </Swiper>
      
      {navigation && (
        <>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </>
      )}
      
      {pagination && (
        <div className="swiper-pagination"></div>
      )}
    </div>
  );
};

export default SwiperSlider;
