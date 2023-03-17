import React from "react";
import Services from "../../assets/Services.png";

const ServicesHero = () => {
  return (
    <div className="shadow-2xl md:shadow-none px-3 md:px-0 mx-6 md:mx-14 xl:h-100 bg-navGreenCol md:bg-white rounded-3xl flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-row ">
        <div className="flex flex-col lg:gap-6 xl:justify-evenly -mt-5 pb-5 md:pb-20 xl:px-24 xl:pl-32">
          <div className="hidden md:block mt-10 md:mt-10 lg:mt-12">
            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl mb-1.5 md:mb-5 font-bold text-heroYellow">
              One Stop
            </h1>
            <h1 className=" text-2xl md:text-3xl lg:text-5xl xl:text-6xl mb-1.5 md:mb-5 font-bold text-headGreen">
              Agricultural
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl mb-1.5 md:mb-5 font-bold text-headGreen">
              Services At Your
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl mb-5 font-bold text-headGreen">
              Fingertips
            </h1>
          </div>
          <div className="block md:hidden mt-10  md:mt-10 lg:mt-12 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl mb-1.5 md:mb-5 font-bold text-heroYellow">
              One Stop
            </h1>
            <h1 className=" text-2xl md:text-3xl lg:text-5xl xl:text-6xl mb-1.5 md:mb-5 font-bold text-white">
              Agricultural Services
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl mb-5 font-bold text-white">
              At Your Fingertips
            </h1>
          </div>
          <div className="mb-6 md:mb-0 text-sm lg:text-base xl:text-xl text-white md:text-subHeadGreen text-center md:text-justify md:w-3/4">
            <p>
              We provide you with a great range of services for your
              agricultural needs. Don’t wait and avail these services.
            </p>
          </div>
          <div>
            <div className="mx-auto md:mx-0 w-max md:mt-8 xl:mt-8 p-3 px-7 rounded-lg bg-heroYellow font-semibold">
              <div className="rounded-lg xl:text-xl text-white">Explore Our Services</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2">
        <img src={Services} className=" xl:w-4/5 xl:h-4/5 md:mt-10 xl:ml-10" />
      </div>
    </div>
  );
};

export default ServicesHero;
