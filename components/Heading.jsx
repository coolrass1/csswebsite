"use client";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Hero from "./Hero";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Heading = () => {
  const userouter = useRouter();

  const [isopen, setIsopen] = useState(false);
  const Handleopen = (e) => {
    //e.preventDefault();
    setIsopen(!isopen);
  };
  return (
    <section className=" relative flex flex-col gap-0 md:flex-auto   ">
      <div className=" z-50 bg-blue-950 py-3 ">
        <div className="  relative container max-w-screen-xl md:mx-auto  flex flex-col md:flex-row md:justify-between md:items-center  text-white min-h-[60px] md:px-6">
          <ul className="flex flex-col md:flex-row text-sm md:text-base p-4 md:p-0  gap-7 md:justify-center md:items-center">
            <li className="flex flex-row gap-1 justify-center items-center">
              <span className="flex items-center justify-between text-golden">
                <MdOutlineLocationOn />
              </span>{" "}
              <span>12 Church Street, London, E15 3HX</span>
            </li>
            <li className="flex flex-row gap-1 justify-center items-center">
              <span className="flex items-center justify-between text-golden">
                <MdOutlineLocationOn />{" "}
              </span>
              <span> 020 8221 0233</span>
            </li>
            <li className="flex flex-row gap-  justify-center items-start md:items-center">
              <span className=" flex items-center justify-between text-golden">
                <MdOutlineLocationOn />
              </span>{" "}
              <span className="text-center">
                {" "}
                Mon-Fri 9.30am - 6.30pm, Sat 11am - 2pm By Appointment
              </span>
            </li>
          </ul>
          <button className=" text-[#FF0000] pb-2  md:py-1 md:px-10 md:border-2 md:border-golden rounded-full md:hover:bg-golden">
            Professional advice
          </button>
        </div>
      </div>
      {/* fii */}
      <div className="hidden md:block bg-auto">
        <div className="  bg-auto z-50 left-10 right-10 absolute top-[80px] container max-w-screen-xl md:max-w-screen-xl  md:mx-auto  flex flex-row justify-between items-center  shadow-2xl  text-white h-[100px] ">
          <span className="flex items-center justify-center">
            <Image
              src="/images/logo.png"
              width={300}
              height={200}
              quality={70}
              alt="logo "
            />
          </span>{" "}
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center gap-7">
              <li
                className="cursor-pointer "
                onClick={(e) => {
                  e.preventDefault();
                  userouter.push("/");
                }}
              >
                Home
              </li>
              <li
                className="cursor-pointer "
                onClick={(e) => {
                  e.preventDefault();
                  userouter.push("/about-us");
                }}
              >
                About us
              </li>
              <li
                className="cursor-pointer "
                onClick={(e) => {
                  e.preventDefault();
                  userouter.push("/area-of-practice");
                }}
              >
                What we do
              </li>
              <li
                className="cursor-pointer "
                onClick={(e) => {
                  e.preventDefault();
                  userouter.push("/our-team");
                }}
              >
                Our team
              </li>
              <li
                className="cursor-pointer "
                onClick={(e) => {
                  e.preventDefault();
                  userouter.push("/our-fee");
                }}
              >
                Our fee
              </li>
              <li
                className="cursor-pointer "
                onClick={(e) => {
                  e.preventDefault();
                  userouter.push("/contact");
                }}
              >
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* mobile version **************************************/}
      <div className=" relative z-50  h-[80px] py-2 bg-[#005a87] flex items-center justify-center md:hidden bg-auto">
        <div className=" relative flex justify-between pl-3 items-center w-full  ">
          <span className="flex  justify-center items-center  h-3/4 w-[150px]">
            <Image
              src="/images/logo.png"
              width={150}
              height={200}
              quality={70}
              alt="logo "
            />
          </span>{" "}
          <nav
            className={` fixed ${
              isopen ? "translate-x-[0%]" : "translate-x-[200%]"
            } transition-all z-50  bg-white w-3/4 h-screen top-0 right-0`}
          >
            <button
              onClick={Handleopen}
              className="rounded-full translate-x-[-20px] bg-yellow-100  absolute text-2xl h-[40px] w-[40px] flex items-center justify-center"
            >
              <IoMdClose />
            </button>
            <ul className=" mt-12 pl-0 flex flex-col gap-5 items-start justify-start ">
              <li onClick={(e) => {
                  
                  userouter.push("/");
                  Handleopen()
                }} className=" text-start pl-5 pt-0 pb-3 cursor-pointer border-b-[0.8px]  border-slate-500 w-full ">
                Home
              </li>
              <li onClick={(e) => {
                 
                  userouter.push("/about-us");
                  Handleopen()
                }} className=" pl-5 pt-0 pb-3 cursor-pointer border-b-[0.8px]   border-slate-500 w-full ">
                About us
              </li>
              <li className=" pl-5 pt-0 pb-3  cursor-pointer border-b-[0.8px]   border-slate-500 w-full ">
                What we do
              </li>
              <li onClick={(e) => {
                 
                  userouter.push("/our-team");
                  Handleopen()
                }} className=" pl-5 pt-0 pb-3  cursor-pointer border-b-[0.8px]   border-slate-500 w-full ">
                Our team
              </li>
              <li onClick={(e) => {
               
                  userouter.push("/our-fee");
                  Handleopen()
                }} className=" pl-5 pt-0 pb-3  cursor-pointer border-b-[0.8px]   border-slate-500 w-full ">
                Our fee
              </li>
              <li onClick={(e) => {
                  e.preventDefault();
                  userouter.push("/contact");
                  Handleopen()
                }} className=" pl-5 pt-0 pb-3  cursor-pointer border-b-[0.8px]   border-slate-500 w-full ">
                Contact
              </li>
            </ul>
          </nav>
          <button
            onClick={Handleopen}
            className="h-8 w-9 mr-2 px-1  flex justify-center items-center text-3xl text-white bg-[#FF0000]"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Heading;
