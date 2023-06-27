import Link from "next/link";
import React from "react";
import {FaArrowRight} from 'react-icons/fa'

const HeroAbout = ({title}) => {
  return (
    <div className="relative bg-transparent">
      <div
        className=" bg-blend-multiply mt-[-200px] md:mt-[-70px] w-screen md:h-[100vh] flex items-center justify-start  "
        style={{
          backgroundImage: `url(/images/hero2.jpg)`,

          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" absolute inset-0 bottom-[31px] md:bottom-[240px] top-0 md:top-16 z-[0] ll"></div>
        <div className=" z-50 container max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-7">
          <h1 className="md:text-4xl text-white capitalize">{title}</h1>
          <div className="flex gap-1 justify-center items-center">
            <Link href="#" className="text-golden">
      Home
            </Link>{" "}
            <div className="text-golden"><FaArrowRight/></div> <span className="text-white">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
