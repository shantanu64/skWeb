import React from "react";
import drone from "../../assets/drone.png";
import finance from "../../assets/finance.png";
import soilTesting from "../../assets/soilTesting.png";

const ServicesWeProvide = () => {
  return (
    <>
      <div className="mx-auto mb-20">
        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-headGreen text-center my-5">
          Services We Provide
        </h1>
        <p className="px-2.5 md:px-0 lg:text-lg xl:text-xl my-5 mb-15 text-subHeadGreen text-center md:w-3/4 lg:w-3/4 xl:w-2/4 mx-auto">
          From seed to market, Salam Kisan offers comprehensive solutions for
          all your agricultural needs, driving growth and sustainability.
        </p>

        <div className="xl:w-3/4 mx-auto md:grid md:grid-cols-3">
          <div className="border-2 border-cardBlue rounded-2xl mx-10 lg:mx-16 my-10">
            <div className="flex flex-col justify-center">
              <div>
                <img
                  src={drone}
                  className="w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto"
                />
              </div>
              <div className="mx-auto md:text-xl text-cardBlue font-bold ">
                Drone Services
              </div>
              <div className="mx-auto mt-1 text-xs md:text-base lg:text-sm px-5 text-cardBlue text-center">
                We provide the best in class drone service in the whole
                agriculture Industry
              </div>
              <div className="mx-auto my-8">
                <a href="tel:8447911453">
                  <button className="text-sm md:text-base bg-cardBlue px-4 py-2 rounded-full font-semibold text-white">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-cardYellow rounded-2xl mx-10 lg:mx-16 my-10">
            <div className="flex flex-col justify-center">
              <div>
                <img
                  src={finance}
                  className="w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto"
                />
              </div>
              <div className="mx-auto text-xl font-bold text-cardYellow">
                Finance Services
              </div>
              <div className="mx-auto mt-1 text-xs md:text-base lg:text-sm px-5 text-cardYellow text-center">
                We provide the best in class drone service in the whole
                agriculture Industry
              </div>
              <div className="mx-auto my-8">
                <a href="tel:8447911453">
                  <button className="text-sm md:text-base bg-cardYellow px-4 py-2 rounded-full font-semibold text-white">
                    Consult Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-cardBrown rounded-2xl mx-10 lg:mx-16 my-10">
            <div className="flex flex-col justify-center">
              <div>
                <img
                  src={soilTesting}
                  className="w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto"
                />
              </div>
              <div className="mx-auto text-xl font-bold text-cardBrown">
                Soil Testing
              </div>
              <div className="mx-auto mt-1 text-xs md:text-base lg:text-sm px-5 text-cardBrown text-center">
                We provide the best in class drone service in the whole
                agriculture Industry
              </div>

              <div className="mx-auto my-8">
                <a href="tel:8447911453">
                  <button className="text-sm md:text-base bg-cardBrown px-4 py-2 rounded-full font-semibold text-white">
                    Test Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesWeProvide;
