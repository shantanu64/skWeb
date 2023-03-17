import React from "react";
import DQ1 from "../../assets/dq1.png";
import DQ2 from "../../assets/dq2.png";
import DQ3 from "../../assets/dq3.png";

const DistinctiveQualities = () => {
  return (
    <div className="my-8 md:my-8 lg:my-8 xl:my-4">
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-headGreen font-bold mx-auto w-max">
        <span className="text-heroYellow">Distintive Qualities</span> of Us
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-6 xl:w-9/12 md:my-10 p-6 mx-auto">
        <div
          style={{
            background:
              "linear-gradient(117.91deg, #FFFFFF -3.15%, #D5D8DD 100.02%)",
          }}
          className="flex flex-row justify-between px-2 items-center md:w-1/3 rounded-2xl border-x-[12px] border-borderVar1 shadow-xl h-32 md:h-32 lg:h-48"
        >
          <div className="w-1/4">
            <img src={DQ1} />
          </div>
          <div className="w-2/3 flex flex-col gap-3">
            <h2 className="font-bold lg:text-xl text-headGreen text-left">
              No Subscription Charges
            </h2>
            <p className="text-xs md:text-xs lg:text-sm font-light text-subHeadGreen text-left">
              We do not charge you to avail such awesome benefits at Salam Kisan
            </p>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(117.91deg, #FFFFFF -3.15%, #D5D8DD 100.02%)",
          }}
          className="flex flex-row justify-between px-2 items-center md:w-1/3 rounded-2xl border-x-[12px] border-borderVar2 shadow-xl h-32 md:h-32 lg:h-48"
        >
          <div className="w-1/4">
            <img src={DQ2} />
          </div>
          <div className="w-2/3 flex flex-col gap-3">
            <h2 className="font-bold lg:text-xl text-headGreen text-left">
              Customized Crop Calendar{" "}
            </h2>
            <p className="text-xs md:text-xs lg:text-sm font-light text-subHeadGreen text-left">
              You can add and customize crop according to the season.{" "}
            </p>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(117.91deg, #FFFFFF -3.15%, #D5D8DD 100.02%)",
          }}
          className="flex flex-row justify-between px-2 items-center md:w-1/3 rounded-2xl border-x-[12px] border-borderVar3 shadow-xl h-32 md:h-32 lg:h-48"
        >
          <div className="w-1/4">
            <img src={DQ3} />
          </div>
          <div className="w-2/3 flex flex-col gap-3">
            <h2 className="font-bold lg:text-xl text-headGreen text-left">
              Infographics for Crops
            </h2>
            <p className="text-xs md:text-xs lg:text-sm font-light text-subHeadGreen text-left">
              Infographics for many crops for guidance on how to
              successfully harvest them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistinctiveQualities;
