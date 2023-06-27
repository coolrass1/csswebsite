import Image from "next/image";
import React from "react";
import Testimonial from "./Testimonial";

const Area5 = () => {
  return (
    <section className="container  max-w-screen-xl mx-auto h-[700px] ">
      <div className="mx-3  gap-7 flex flex-col md:flex-row md:gap-3">
        <div className="flex-1 ">
          <Image src="/images/testimonial.png" width={500} height={500} />
        </div>
       <Testimonial/>
      </div>
    </section>
  );
};

export default Area5;
