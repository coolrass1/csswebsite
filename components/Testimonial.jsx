"use client";

import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [showvalue, setShowvalue] = useState(0);
  const Handleclick = (value) => {
    setShowvalue(value);
  };
  return (
    <div className="flex-1 gap-0 flex flex-col">
      <div className="min-w-full min-h-full  flex  overflow-x-hidden  ">
        <div
          className={`flex flex-col transition-[transform] ease-in-out duration-500 justify-center gap-7 items-start min-w-full min-h-full ${
            showvalue == 0 ? "translate-x-[0%] opacity-100" : "translate-x-[300%] opacity-0 "
          }`}
        >
          {" "}
          <div>
            <h5 className="capitalize text-xl">what people say</h5>
            <h1 className="text-secondary text-4xl font-extrabold capitalize pt-3">
              {" "}
              client testimonial
            </h1>
          </div>
          <div className="flex justify-start items-start gap-5">
            <div className="flex justify-start items-start text-3xl text-golden">
              <FaQuoteLeft />
            </div>{" "}
            <p className="w-3/4">
              I was introduced to Church solicitors in 2018. They dealt with my
              case in a professional manner. I find them to be very efficient,
              helpful, understanding and very professional. I would have no
              hesitation in using their services again or recommending them to
              friends.
            </p>
          </div>
          <div className="mt-7">
            <h1 className="text-3xl text-golden ">Femi SOTONWA</h1>
            <p className="text-secondary pt-3">South Ockendon, Essex</p>
          </div>
        </div>
        <div
          className={` flex flex-col transition-[transform] ease-in-out duration-500 justify-center gap-7 items-start min-w-full min-h-full  ${
            showvalue == 100 ? "translate-x-[-100%] opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h5 className="capitalize text-xl">what people say</h5>
            <h1 className="text-secondary text-4xl font-extrabold capitalize pt-3">
              {" "}
              client testimonial
            </h1>
          </div>
          <div className="flex justify-start items-start gap-5">
            <div className="flex justify-start items-start text-3xl text-golden">
              <FaQuoteLeft />
            </div>{" "}
            <p className="w-3/4">
              You know what I do not know how to thank you enough am elated. A
              billion thank you thank you and thank you. You are doing a great
              job and only the people you work with can tell how good you and
              God will continue to bless this firm abundantly. I will come and
              see you for the girl’s citizenships but will ring you before I
              come. Thank you again.
            </p>
          </div>
          <div className="mt-7">
            <h1 className="text-3xl text-golden ">Lisa</h1>
            <p className="text-secondary pt-3">Immigration Client</p>
          </div>
        </div>
        <div
          className={` flex flex-col  justify-center gap-7 transition-[transform] ease-in-out duration-500 items-start min-w-full min-h-full  ${
            showvalue == 200 ? "translate-x-[-200%] opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h5 className="capitalize text-xl">what people say</h5>
            <h1 className="text-secondary text-4xl font-extrabold capitalize pt-3">
              {" "}
              client testimonial
            </h1>
          </div>
          <div className="flex justify-start items-start gap-5">
            <div className="flex justify-start items-start text-3xl text-golden">
              <FaQuoteLeft />
            </div>{" "}
            <p className="w-3/4">
              You know what I don’t know how to thank you enough am elated and
              praying to God Almighty that he knows what you have in your heart
              desires and HE shall grand you that and to your offsprings. I will
              deposit your balance of £200 and will text you to let you know
              once I done it. A billion thank you thank you and thank you. You
              are doing a great job and only the people you work with can tell
              how good you and God will continue to bless this firm abundantly.
              I will come and see you for the girls citizenships but will ring
              you before I come. Thank you again.
            </p>
          </div>
          <div className="mt-7">
            <h1 className="text-3xl text-golden ">Lisa</h1>
            <p className="text-secondary pt-3">London</p>
          </div>
        </div>
      </div>
      <div className=" translate-y-[-100px] md:translate-y-[-30px] md:mt-0 self-end flex justify-center items-center gap-2">
        <button
          onClick={(e) => Handleclick(0)}
          className={`h-3 w-3 ${showvalue==0?'bg-slate-600':'bg-slate-300'}  rounded-full`}
        ></button>
        <button
          onClick={(e) => Handleclick(100)}
          className={`h-3 w-3 rounded-full ${showvalue==100?'bg-slate-600':'bg-slate-300'}`}
        ></button>
        <button
          onClick={(e) => Handleclick(200)}
          className={`h-3 w-3 rounded-full ${showvalue==200?'bg-slate-600':'bg-slate-300'}`}
        ></button>
      </div>
    </div>
  );
};

export default Testimonial;
