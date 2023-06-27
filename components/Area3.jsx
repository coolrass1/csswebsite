"use client";
import React from "react";
import Image from "next/image";

const Area3 = () => {
  return (
    <section className="relative container max-w-screen-xl pt-12 md:mx-auto min-h-[60vh]">
      <div className="flex  p-3 flex-col md:flex-row justify-between items-center h-full w-full gap-12 ">
        <div className=" flex-1 bg-[#FF0000] pt-3 pl-3">
          <Image
            src="/images/Solicitors-East.png"
            width={600}
            height={600}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-start items-start">
          <h1 className="text-3xl text-secondary mb-3">
            Solicitors In Stratford East London
          </h1>
          <p className="w-full md:w-2/3 ">
            The firm started operations in June 2015 with the sole aim of
            providing our clients with high quality legal services in the areas
            of Immigration, Family, Crime, Civil Litigation, Housing and
            Employment Law.
          </p>
          <p className="w-full md:w-2/3 ">
            We pride ourselves in our ability to advise you correctly and also
            to provide you with high standard and personalised professional
            services.
          </p>
          <buton className=" px-12 py-3  bg-[#FF0000]">
            More about us
          </buton>
        </div>
      </div>
    </section>
  );
};

export default Area3;
