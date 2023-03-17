import React from "react";
import whyBetter1 from "../../assets/whyBetter1.png";
import whyBetter2 from "../../assets/whyBetter2.png";
import whyBetter3 from "../../assets/whyBetter3.png";

const Main = () => {
  return (
    <div className="lg:my-8 flex flex-col md:flex-row items-center gap-6 w-11/12 mx-auto py-10 h-max">
      <div className="md:justify-center gap-2 md:gap-4 lg:gap-6 xl:w-1/3 md:h-68 lg:h-72 px-4 flex flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-headGreen">
          Why We Are Better Than Others?
        </h1>
        <p className="md:text-sm lg:text-lg xl:w-3/4 xl:text-xl text-subHeadGreen">
          Leading-edge agritech solutions for sustainable and efficient farming.
        </p>
      </div>
      <div className="w-5/6 md:w-1/5 md:h-68 lg:h-72">
        <div className="bg-white shadow-2xl py-2 md:py-2  md:h-3/4 lg:h-full mx-auto rounded-3xl">
          <div className="w-max mx-auto">
            <img
              src={whyBetter1}
              className="w-32 h-32 md:w-32 md:h-32 lg:w-40 lg:h-40"
            />
          </div>
          <h3 className="text-center md:text-left md:text-sm lg:text-lg xl:text-xl mx-4 md:my-1 lg:my-2 text-[#E0A200] mt-2 font-bold">
            Best in the industry with Innovation.
          </h3>
        </div>
      </div>

      <div className="w-5/6 md:w-1/5 md:h-68 lg:h-72">
        <div className="bg-white shadow-2xl py-2 md:py-2 md:h-3/4 lg:h-full mx-auto rounded-3xl">
          <div className="w-max mx-auto">
            <img
              src={whyBetter2}
              className="h-32 w-32 md:w-32 md:h-32 lg:w-40 lg:h-40"
            />
          </div>
          <h3 className="text-center md:text-left md:text-sm lg:text-lg xl:text-xl mx-4 md:my-1 lg:my-2 text-[#E0A200] mt-2 font-bold">
            A dedicated team who beleives in the cause.
          </h3>
        </div>
      </div>
      <div className="w-5/6 md:w-1/5 md:h-68 lg:h-72">
        <div className="bg-white shadow-2xl py-2 md:py-2 md:h-3/4 lg:h-full mx-auto rounded-3xl">
          <div className="w-max mx-auto">
            <img
              src={whyBetter3}
              className="h-32 w-32 md:w-32 md:h-32 lg:w-40 lg:h-40"
            />
          </div>
          <h3 className="text-center md:text-left md:text-sm lg:text-lg xl:text-xl mx-4 md:my-1 lg:my-2 text-[#E0A200] mt-2 font-bold">
            Easy to understand{" "}
            <span className="text-headGreen">Salam Kisan</span> App.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
