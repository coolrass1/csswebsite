"use client";

import Backbutton from "./Backbutton";
import Nextbutton from "./Nextbutton";

const Carouselitem = ({ item }) => {
  return (
    <>
      <div className=" relative h-[100vh]  md:w-screen flex items-center justify-center md:h-screen  ">
        <img
          src={item.imgurl}
          className="w-full h-full object-cover  md:w-screen md:h-screen  md:bg-slate-900 md:object-cover md:fill-transparent md:bg-blend-multiply "
          alt="rass"
        />

        <div className=" mt-24 absolute   container max-w-screen-xl mx-auto flex flex-col items-start justify-center gap-7">
          <div className=" translate-y-[-120px] absolute    flex justify-between items-center w-[80vw]  z-[999]">
            {" "}
            <Backbutton className="  px-11 z-50" />{" "}
            <Nextbutton className="  px-11 z-50" />
          </div>
          <h1 className="text-lg  px-5 md:ml-32 md:text-5xl leading-relaxed text-white capitalize   text-start md:w-1/2">
            {item.title}
          </h1>
          <button className="  mx-5 text-lg px-5  py-2 md:ml-32 md:py-2  md:text-xl cursor-pointer md:px-12 bg-orange-950 text-white">
            contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default Carouselitem;
