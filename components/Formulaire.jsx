"use client";
import React from "react";

const Formulaire = () => {
  return (
    <div>
      <form className="w-full  overflow-x-hidden flex flex-col gap-7 py-28">
        <div className="w-full px-2 flex flex-col gap-3 ">
          <input
            type="text"
            //className="py-2  my-7 md:my-0 w-full md:w-80  border-2 border-black "
            placeholder="Enter your name"
            className="w-full py-2 bg-slate-50 text-secondary shadow-sm
        border-2 border-gray-100 cursor-pointer
       outline-none "
          />{" "}
          <input
            type="email"
            className="bg-slate-50 w-full px-2  text-secondary shadow-sm
      py-2 md:px-10 border-2 border-gray-100 cursor-pointer
       outline-none "
            placeholder="Enter your email"
            //className="py-2 w-full  md:w-80 border-2 border-black"
          />
        </div>
        <div className="max-w-full px-1 overflow-x-hidden">
          <input
            type="text"
            className="bg-slate-50 w-full    text-secondary shadow-sm
     py-2 md:px-10 border-2 border-gray-100 cursor-pointer
      outline-none "
            placeholder="Your subjt"
          />

          <textarea
            className="bg-slate-50 text-secondary w-full px-2  
    shadow-sm py-2 md:px-10 border-2 border-gray-100
     cursor-pointer outline-none "
            id="msg"
            name="user_message"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className="ml-1 py-3 w-1/2 md:w-1/3 "
          style={{
            backgroundColor: "#DA2128",
            borderStyle: " solid",
            borderColor: "#C10007",
          }}
        >
          send message
        </button>
      </form>
    </div>
  );
};

export default Formulaire;
