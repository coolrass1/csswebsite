'use client'
// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import {MdOutlineArrowBackIos} from 'react-icons/md'

const Backbutton= () => {
    const swiper = useSwiper();

    return (
      <button className='hidden md:block' style={{border:'1px solid gray', fontSize:"25px" , padding:"15px"}} onClick={() => swiper.slidePrev()}><MdOutlineArrowBackIos/></button>
    );
}

export default Backbutton