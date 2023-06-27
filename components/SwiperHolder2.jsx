"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { slideTab } from "@/Data";

// Import Swiper styles
import "swiper/css";

import Carouselitem from "./Carouselitem";

const SwiperHolder2 = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        speed={500}
        pagination={{ clickable: true }}
        // effect='cube'
        // cubeEffect={{ slideShadows: false}

        // }

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slideTab.map((t, i) => (
          <SwiperSlide key={i}>
            <Carouselitem item={t} key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SwiperHolder2;
