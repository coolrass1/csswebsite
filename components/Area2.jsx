import React from "react";
import Slogan from "./Slogan";

const Area2 = () => {
  return (
    <div className="  md:h-auto bg-[url('/bg/feature-2-bg.jpg')] ">
  <div className="bg-blue-950/50 w-full py-12">
      <div
        className=" w-full h-full md:h-[150px]   flex
     flex-col gap-3 justify-between items-center  md:flex-row md:justify-center md:items-center
      md:gap-3 relative container max-w-screen-xl mt-0 mx-auto "
      >
        <Slogan />
        <Slogan />
        <Slogan />
      </div>
      </div>
    </div>
  );
};

export default Area2;
