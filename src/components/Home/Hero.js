import React from "react";
import Mascot from "../../assets/Mascot.png";

const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(110.31deg, #0E7240 11.4%, #21A74D 108.31%)",
      }}
      className="mx-6 md:mx-14 lg:h-100 rounded-3xl flex flex-row md:rounded-br-heroRadius"
    >
      <div className="w-1/2 flex">
        <div className="flex flex-col gap-4 md:gap-4 justify-evenly py-16 md:py-20 px-6 md:px-24 xl:pl-32">
          <div className="">
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white">
              Revolutionizing
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#A1FFC0]">
              Farming
            </h1>
          </div>
          <div className="md:text-sm lg:text-lg xl:text-xl text-white">
            <p className="">
              Empowering rural communities through sustainable practices and
              innovative solutions, building resilience and a brighter future
              for all.
            </p>
          </div>
          <div className="flex gap-2 md:gap-8">
            <div className="border-2 border-heroYellow rounded-md p-2 md:p-2 lg:p-3 lg:px-7 bg-heroYellow text-white font-semibold">
              <a href="/aboutUs">
                <button>Read more</button>
              </a>
            </div>
            <div className="border-2 border-white rounded-md p-2 md:p-2 lg:p-3 lg:px-7 text-white font-semibold">
              <a href="/contactUs">
                <button>Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2">
        <img
          src={Mascot}
          className="md:mt-20 md:ml-4 lg:mt-28 lg:ml-10 lg:h-5/6 xl:h-full xl:mt-10 xl:ml-28"
        />
      </div>
    </div>
  );
};

export default Hero;
