import Link from "next/link";
import React from "react";
import LawareaCard from "./LawareaCard";

const Area4 = () => {
  //GrUserManager FaUsers MdFamilyRestroom FaHouseChimney
  return (
    <section >
      <div className="  relative container max-w-screen-xl mx-auto flex flex-col gap-7 justify-center items-center">
        <div className="text-center">
          <h5 className="text-red-500">How Can We Help You</h5>
          <p className="text-3xl py-5 ">Area Of Law Practice</p>
          <div className="w-[50%] h-[2px] bg-golden translate-x-[60px]"></div>
        </div>
        <div className=" px-7 md:px-0 py-16 flex flex-col md:flex-row gap-7 flex-wrap">
       <LawareaCard/>
       <LawareaCard/>
       <LawareaCard/>
       <LawareaCard/>
       <LawareaCard/>
       <LawareaCard/>
       </div>
      </div>
    </section>
  );
};

export default Area4;
