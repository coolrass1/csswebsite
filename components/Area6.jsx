import React from "react";

import FormContact1 from "./FormContact1";

const Area6 = () => {
  return (
    <section
      className="relative w-full min-h-[700px] z-0 pt-20 md:pt-2 mt-96 md:mt-0"
      style={{ backgroundImage: "url(/images/area6.jpg)" }}
    >
      <div className="absolute inset-0 z-10 opacity-80 bg-transparent" style={{backgroundImage:"linear-gradient(180deg, rgba(21,26,48,0.9) 0%, #070c26 100%)", backgroundColor:"transparent"}}></div>
      <div className="relative container max-w-screen-xl md:mx-auto  z-50  flex flex-col md:flex-row gap-3 items-center justify-center">
        <div className=" w-full px-3 flex1 flex flex-col gap-7  text-white">
          <h1 className="text-3xl text-white  md:text-6xl">Book An Appoionment</h1>
          <h3 className="text-golden">Contact one of our consultants</h3>
          <p className="text-lg">
            Feel free to register your interest to book an appointment. A member
            of our trained, honest team will contact you for more information
            and schedule an agreeable time. We endeavor to contact you within 24
            hours.
          </p>
        </div>
    <FormContact1/>
      </div>
    </section>
  );
};

export default Area6;
