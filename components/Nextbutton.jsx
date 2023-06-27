"use client";
// some-inner-component.jsx
import { React } from "react";
import { useSwiper } from "swiper/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Nextbutton = () => {
  const swiper = useSwiper();

  return (
    <button
    className='hidden md:block' 
      style={{
        border: "1px solid gray",
        fontSize: "25px",
        padding: "15px",
        marginRight: "-100px",
      }}
      onClick={() => swiper.slideNext()}
    >
      <MdOutlineArrowForwardIos />
    </button>
  );
};

export default Nextbutton;
