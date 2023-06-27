import React from "react";
import SocialLogo from "./SocialLogo";
import Image from "next/image";

const TeamCard = () => {
  return (
    <div className="relative  mr-7 md:mr-0 flex flex-col gap-1 w-full md:w-[350px] bg-slate-300 shadow-xl">
      <div className="flex-1  ">
        {/* <img
          src="/images/marian_image.jpg"
          alt="marian"
         
        /> */}
         <Image
              src="/images/marianimage.jpg"
              width={700}
              height={700}
            //   quality={70}
              alt="logo "
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
      </div>
      <div className="bg-slate-300 px-3 transition-all hover:translate-y-[-50px] [&>*:last-child]:hover:flex z-10">
        <h1 className="text-xl text-center font-extrabold">
          Marian A. Fordjour
        </h1>

        <h3 className="text-lg text-center font-medium mb-2">
          {" "}
          LL.B (Hons); Pg.Dip (Law)
        </h3>
        <p className="text-center text-red-600">Immigration, Crime, Housing and Employment Solicitor</p>
        <div className=" absolute top-[70px] hidden transition-all  items-center justify-center w-full h-full  ">
          <SocialLogo/>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
