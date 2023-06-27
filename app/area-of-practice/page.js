import Area4 from "@/components/Area4";
import HeroAbout from "@/components/HeroAbout";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <HeroAbout title="Area of Laws" />
      <div className="mt-[-100px]">
        <Area4 />
      </div>
    </div>
  );
};

export default page;
