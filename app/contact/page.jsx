import FormContact1 from "@/components/FormContact1";
import Formulaire from "@/components/Formulaire";

import HeroAbout from "@/components/HeroAbout";
import React from "react";
import { ImLocation } from "react-icons/im";

const page = () => {
  return (
    <div>
      {" "}
      <HeroAbout title="Contact" />
      <div className="flex py-20 mt-[-100px] relative container max-w-screen-xl md:mx-auto flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-secondary py-3">Our contacts</h1>
          <p className="text-lg py-3">
            Feel free to contact a member of our trained, honest team. A member
            of staff will endeavor to contact you within 2 hours.
          </p>
          <div className="flex flex-col gap-7">
            <div className="flex justify-start items-center gap-3">
              <div className="flex items-center justify-start text-3xl text-gray-300">
                <ImLocation />
              </div>
              <div>
                <h1>Address</h1>
                <p>12 Church Street, London, E15 3HX</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="flex items-center justify-start text-3xl text-gray-300">
                <ImLocation />
              </div>
              <div>
                <h1>Address</h1>
                <p>12 Church Street, London, E15 3HX</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="flex items-center justify-start text-3xl text-gray-300">
                <ImLocation />
              </div>
              <div>
                <h1>Address</h1>
                <p>12 Church Street, London, E15 3HX</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="flex items-center justify-start text-3xl text-gray-300">
                <ImLocation />
              </div>
              <div>
                <h1>Address</h1>
                <p>12 Church Street, London, E15 3HX</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1"><Formulaire/></div>
      </div>
    </div>
  );
};

export default page;
