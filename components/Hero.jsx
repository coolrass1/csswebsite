'use client'


const Hero = () => {
  
  return (
    <>
    <div
      className=" z-25  w-screen h-screen flex items-center justify-start  "
      style={{
        backgroundImage: `url(/images/slide-1.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }}
    >
      <div className=" container max-w-screen-xl mx-auto flex flex-col items-start justify-center gap-7">
        <h1 className="text-6xl text-white capitalize">Always on your side</h1>
        <button className=" py-2 cursor-pointer px-12 bg-orange-950 text-white">
          contact us
        </button>
      </div>
    </div>
    </>
  );
};

export default Hero;
