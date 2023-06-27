import React from "react";

const Area8 = () => {
  return (
    <section className="py-12" style={{backgroundColor: '#FFFFFF',
        backgroundImage: 'url(http://churchstreetsolicitors.com/wp-content/uploads/2020/08/funfact3.jpg)',
        backgroundPosition: "center center"}}>
      <div className="relative container max-w-screen-xl  gap-4 md:mx-auto flex  flex-col items-center justify-center ">
        <h1 className="text-golden text-4xl text-center">
          Subscribe Newsletter
        </h1>
        <div className=" flex flex-col gap-7 md:gap-0 md:flex-row">
          <input
            className="bg-slate-50 w-full px-2  text-secondary shadow-sm
        py-2 md:px-10 border-2 border-gray-100 cursor-pointer
         outline-none "
            placeholder="Enter your email"
          />
          <button className="px-24 py-2 bg-red-500 ">subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Area8;
