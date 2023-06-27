import React, { useEffect } from 'react'

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation'
import Swiper from 'swiper';
import Hero from './Hero';
import { useSwiper } from 'swiper/react';


const SwipeHolder3 = () => {
    const swiper = useSwiper();
    useEffect(() => {
        // Initialize Swiper
        new Swiper('.swiper-container', {
          // Configure Swiper options here
        //   direction: 'horizontal',
        // effect: 'cube',
   
        // cubeEffect: {
        //   slideShadows: true,
        // },
          loop: true,
          slidesPerView: 1,
          autoplay: {
            delay: 8000,
          },
          pagination: {
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass:'swiper-button-disabled'
          },
          injectStyles: [`.swiper-button-prev {
            display:hidden
            background-image: url("/box-arrow-in-left.svg");
          }`]
          
        
          
        
        });
      }, []);
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* Add your carousel items here */}
        <div className="swiper-slide"><Hero/></div>
        <div className="swiper-slide"><Hero/></div>
        <div className="swiper-slide"><Hero/></div>
      </div>

      {/* Add navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      
    </div>
  )
}

export default SwipeHolder3