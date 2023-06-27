import Link from "next/link";
import React from "react";

import Fotercard from "./Fotercard";

const Footer = () => {
  return (
    <section className="bg-blue-950 py-12">
      <div className="flex flex-col items-start  justify-center  gap-12 relative container max-w-screen-xl md:mx-auto">
        <div className=" flex-1 self-start flex flex-col w-full  justify-start items-start pl-3 gap-7 md:flex-row md:justify-around">
          <Fotercard />
          <Fotercard />
          <Fotercard />
        </div>
     
      </div>
    </section>
  );
};

export default Footer;
