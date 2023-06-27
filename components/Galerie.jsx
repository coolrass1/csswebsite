'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Carouselitem from './Carouselitem';

export const Galerie = () => {
  return (
    <div>
    <h2>My Photo Gallery</h2>
    <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
    <div><Carouselitem/>  </div>    <div><Carouselitem/>  </div>    <div><Carouselitem/>  </div>    <div><Carouselitem/>  </div>
       
        
    </Carousel>
</div>
  )
}
