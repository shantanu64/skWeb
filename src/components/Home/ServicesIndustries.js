import React from "react";
import ServicesProducts from "../../assets/productsServices1.png";
import ServicesProducts2 from "../../assets/productsServices2.png";
import { BsCalendar4Week } from "react-icons/bs";
import { SiDrone, SiMarketo } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTestTubes } from "react-icons/gi";
import { GiDeliveryDrone } from "react-icons/gi";
import { GiNewspaper } from "react-icons/gi";
import { RiPlantLine } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { SiEventstore } from "react-icons/si";
import { MdPestControl } from "react-icons/md";

const ServicesIndustries = () => {
  return (
    <div className="bg-headGreen h-max py-4">
      <div className="w-max mx-auto py-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          Our Products & Industries
        </h1>
      </div>
      <div className="w-full flex md:flex-col md:flex-col-reverse lg:flex-col lg:flex-col-reverse md:gap-4 lg:gap-4 xl:gap-0 xl:flex-row my-10">
        <div className="lg:w-full xl:w-3/5 px-10 flex flex-wrap justify-center gap-4">
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <BsCalendar4Week className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">Crop Calendar</h2>
          </div>
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <SiMarketo className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">Market Linkage</h2>
          </div>
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <GiReceiveMoney className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">
              Financial Services
            </h2>
          </div>
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <MdPestControl className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">Pest Detection</h2>
          </div>
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <SiEventstore className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">
              Market Availablity
            </h2>
          </div>
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <FaStore className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">
              Salam Kisan Stores
            </h2>
          </div>
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <RiPlantLine className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">Crop Advisory</h2>
          </div>
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <GiNewspaper className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">
              Agricultural News
            </h2>
          </div>
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <GiDeliveryDrone className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">Drone Services</h2>
          </div>
          <div className="w-28 md:w-28 lg:w-40 xl:w-48 rounded-lg shadow-xl h-36 bg-navGreenCol flex flex-col justify-center text-center gap-4">
            <i className="text-heroYellow">
              <GiTestTubes className="mx-auto text-5xl" />
            </i>
            <h2 className="md:text-sm lg:text-base xl:text-xl text-white font-semibold">Soil Testing</h2>
          </div>
        </div>
        <div className="hidden md:block lg:w-1/2 mx-auto xl:w-2/5">
          <div className="mx-auto lg:w-3/4 h-full flex flex-col justify-center relative ">
            <img src={ServicesProducts} className="logoRotate md:h-72 lg:h-max lg: xl:h-full w-full" />
            <img src={ServicesProducts2} className="absolute md:h-32 lg:h-40 xl:h-52 rounded-full md:left-[72px] lg:left-[100px] xl:top-[128px] xl:left-[108px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesIndustries;
