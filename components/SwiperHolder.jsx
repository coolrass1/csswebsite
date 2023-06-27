'use client'


import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Hero from './Hero';
import Carouselitem from './Carouselitem';

register();





const SwiperHolder = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        navigation: true,
        pagination: true,
        autoplay:true,
        //add this
        injectStyles: [
          `
            .swiper-button-next,
            .swiper-button-prev {
              background-color: white;
              background-position: center;
              background-size: 40px;
              background-repeat: no-repeat;
              padding: 8px 16px;
              border-radius: 100%;
              border: 2px solid black;
              color: red;
            }
  
        
            .swiper-button-prev {
              background-image: url("/box-arrow-in-left.svg");
            }
  
            .swiper-button-next {
              background-image: url("/box-arrow-in-right.svg");
            }
          
            
            .swiper-button-next::after,
            .swiper-button-prev::after {
              content: "";
            }
  
            .swiper-pagination-bullet{
              display:hidden
              width: 0px;
              height: 0px;
              background-color: red;
            }
        `,
        ],
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);
  
      return (
      
        <swiper-container
        ref={swiperRef} init="false"
        
        
         
        >
          <swiper-slide><Hero/></swiper-slide>
          <swiper-slide><Hero/></swiper-slide>
          <swiper-slide><Hero/></swiper-slide>
      
        </swiper-container>
   
      );
   
}

export default SwiperHolder