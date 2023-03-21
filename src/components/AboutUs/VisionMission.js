import React from "react";
import Vision from "../../assets/vision.png";
import Mission from "../../assets/mission.png";

const VisionMission = () => {
  return (
    <div className="my-10">
      <h1 className=" w-max mx-auto xl:mt-16 my-10 text-2xl md:text-3xl lg:text-5xl text-headGreen font-bold">
        We at Salam Kisan
      </h1>
      <p className=" mx-6 md:w-3/4 lg:w-3/4 xl:w-1/2 md:mx-auto md:text-sm lg:text-lg text-subHeadGreen text-center -mt-4 mb-10">
        Salam Kisan is an agricultural ecosystem providing a centralised
        end-to-end solution for all stakeholders in the agriculture value chain.
      </p>
      <div className="flex px-2 flex-col xl:w-2/3 mx-auto xl:gap-4">
        <div className="flex flex-row lg:gap-6 lg:w-max justify-center items-center">
          <div className="w-1/2 lg:-mr-20 lg:ml-8">
            <img className="p-4 md:p-0 md:w-3/4 lg:w-3/4 mx-auto" src={Vision} />
          </div>
          <div className="xl:mr-28 w-1/2 flex flex-col gap-3">
            <h1 className="md:text-2xl lg:text-3xl font-bold text-left md:ml-16 lg:ml-20 text-heroYellow">
              Our Vision
            </h1>
            <p className="md:w-2/3 text-headGreen mx-auto text-sm md:text-lg">
              Driving rural communities towards resilience and sustainability
            </p>
          </div>
        </div>
        <div className="items-center flex flex-row-reverse justify-between">
          <div className="w-1/2 md:w-1/2 lg:w-full lg:mr-12">
            <img className="p-6 w-11/12 mx-auto md:w-2/4  lg:w-2/4 md:mx-auto" src={Mission} />
          </div>
          <div className="w-1/2 md:w-1/2 lg:w-2/5 flex flex-col gap-3 lg:ml-8">
            <h1 className="ml-24 md:text-2xl lg:text-3xl md:ml-40 lg:ml-0 font-bold lg:text-right text-heroYellow">
              Our Mission
            </h1>
            <p className=" md:w-2/3 md:ml-10 lg:ml-0 lg:w-full text-headGreen lg:mx-auto text-sm md:text-lg">
            Transcending agriculture by bridging the fragmented agriculture value chain with data-driven insights, artificial intelligence and end-to-end products and services
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row gap-6 w-max justify-center items-center">
          <div className="w-1/2 flex flex-col gap-3">
            <h1 className="text-3xl font-bold w-max mx-auto text-heroYellow">
              Our Mission
            </h1>
            <p className="w-2/3 mx-auto text-headGreen text-lg">
              "Bring together stakeholders in the agriculture ecosystem to
              provide farm management, financial support, market linkage and
              government convergence."
            </p>
          </div>
          <div className="w-1/2">
            <img className="w-3/4 mx-auto" src={Mission} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VisionMission;
