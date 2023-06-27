import HeroAbout from "@/components/HeroAbout";
import TeamCard from "@/components/TeamCard";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroAbout title="Area of Laws" />
      <div className=" md:mt-[-150px] relative container max-w-screen-xl md:mx-auto pb-7">
        <div className=" mb-20 mt-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl capitalize">meet the team</h1>
          <div className=" mt-2 h-[2px] w-24 bg-golden"></div>
        </div>
        <div className=" flex flex-col md:flex-row flex-wrap gap-7 justify-between items-center">
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
        </div>
      </div>
    </div>
  );
};

export default page;
