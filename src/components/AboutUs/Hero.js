import React from "react";

//image
import AboutUs1 from "../../assets/AboutUs1.png";
import AboutUs2 from "../../assets/AboutUs2.png";
import AboutUs3 from "../../assets/AboutUs3.png";
import AboutUs4 from "../../assets/AboutUs4.png";
import HeroSlider1 from "./heroSlider1";
import HeroSlider2 from "./heroSlider2";
import HeroSlider3 from "./heroSlider3";
import HeroSlider4 from "./heroSlider4";
import SliderMobile from "./sliderMobile";

const Hero = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex gap-6 p-6 items-end justify-center mt-10">
          <div className="w-40 h-40 rounded-3xl">
            <HeroSlider1 />
          </div>
          <div className=" w-40 h-60 rounded-3xl">
            <HeroSlider2 />
          </div>
          <div className="w-96 mb-14 ml-2">
            <h1 className="text-4xl text-headGreen font-bold mb-6">
              We Are A Results Driven Team.
            </h1>
            <p className="w-4/5 text-sm text-subHeadGreen justify-content mb-3">
              Our team at Salam Kisan is dedicated to achieving tangible and
              meaningful results for farmers and all stakeholders in the
              agriculture ecosystem through innovation and collaboration.
            </p>
          </div>
        </div>
        <div className="flex gap-6 p-6 items-start justify-center -mt-6 mb-16">
          <div className="w-72 h-44 rounded-3xl ">
            <HeroSlider3 />
          </div>
          <div className="w-96 h-56 rounded-3xl rounded-br-aboutUsHeroRadius">
            <HeroSlider4 />
          </div>
        </div>
      </div>
      <div
        // style={{
        //   background:
        //     "linear-gradient(110.31deg, #0E7240 11.4%, #21A74D 108.31%)",
        // }}
        className="block md:hidden mx-8 p-4 rounded-3xl bg-heroYellow"
      >
        <div className="mb-14 text-center mx-6">
          <h1 className="text-3xl text-white font-bold mb-6">
            We Are A Results Driven Team.
          </h1>
          <SliderMobile />
          <p className="text-sm text-white justify-content mt-3 mb-3">
            Our team at Salam Kisan is dedicated to achieving tangible and
            meaningful results for farmers and all stakeholders in the
            agriculture ecosystem through innovation and collaboration.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
