import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import visionValue from "../../assets/visionValueBg.png";
import ceo from "../../assets/ceo.png";
// import team1 from "../../assets/team1.jpg";

const MainVisionValue = () => {
  return (
    <div className="flex flex-col md:flex-row my-4 md:my-0 md:gap-8 lg:gap-0 lg:my-14 xl:my-8 w-11/12 mx-auto border-solid xl:h-100">
      <div className="block md:hidden my-4 md:my-0">
        <h1 className="font-bold mx-auto w-max xl:mx-auto v  lg:ml-14 text-2xl md:text-4xl lg:text-5xl xl:text-7xl md:w-3/4 lg:w-3/5 xl:w-3/5 text-headGreen">
          Our Values & <span className="text-[#FCBB12]">Vision</span>
        </h1>
      </div>
      <div className="md:w-1/2 my-auto">
        <div className="relative">
          <img src={visionValue} />
          <div className="absolute  top-4 left-4 md:-top-2 lg:-top-3 md:left-7 lg:left-10 xl:left-12">
            <img
              src="team1.jpg"
              className="h-[175px] md:h-[220px] lg:h-[300px] xl:h-teamH xl:w-team rounded-3xl md:rounded-3xl lg:rounded-4xl"
            />
            {/* <div className='bg-green-800 rounded-tr-3xl px-2 rounded-br-3xl rounded-bl-3xl absolute w-6/12 h-44 -top-4 -left-12'>
                            <h3 className='text-3xl font-bold mx-auto w-max'>Dhanashree Mandhani</h3>
                            <h3 className='text-xl mx-auto w-max'>CEO</h3>
                        </div> */}
          </div>
        </div>
      </div>
      <div className="md:w-1/2 lg:ml-4 xl:ml-0 flex flex-col justify-center gap-4 md:gap-4 lg:gap-6 xl:gap-12">
        <div className="hidden md:block">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-headGreen font-bold mx-auto w-max">
            Our Values & <span className="text-[#FCBB12]">Vision</span>
          </h1>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-center md:text-left lg:w-3/4 xl:w-3/5 mx-auto md:text-sm lg:text-lg xl:text-xl text-subHeadGreen">
            At Salam Kisan, we envision a sustainable and prosperous future for
            the agriculture industry, where farmers have access to all the
            resources and technology they need to thrive. Our goal is to create
            an ecosystem that empowers all stakeholders in the agriculture value
            chain, from farmers to consumers, and drives growth and innovation
            in the industry.
          </p>
        </div>
        {/* <div className="hidden md:block lg:w-3/4 xl:w-3/5 gap-4 lg:mx-auto">
          <div className="flex flex-row items-center w-full justify-start gap-10">
            <p className="text-2xl font-bold text-headGreen">Follow Us:</p>
            <div className="flex flex-row gap-8">
              <i className="md:text-4xl lg:text-5xl text-blue-800">
                <FaFacebook />
              </i>
              <i className="md:text-4xl lg:text-5xl text-blue-600">
                <BsLinkedin />
              </i>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainVisionValue;
