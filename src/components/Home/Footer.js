import React from "react";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube
} from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import logo from "../../assets/logo_typo.png";

//image
import FooterBg from "../../assets/FooterBg.png";

const LgFooter = () => {
  return (
    <>
      <div className="relative w-full xl:h-96">
        <img src={FooterBg} className="w-full h-full" />
        <div className="hidden md:block absolute flex flex-col md:gap-4 lg:gap-4 xl:gap-4 justify-evenly my-10 text-5xl text-white bottom-0 top-0 right-0 left-1/2">
          <div className=" lg:mt-14 md:w-11/12 lg:w-3/4 mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-3/4 h-12 focus:outline-none rounded-l-full text-black text-base border-none pl-5 p-auto placeholder:text-sm placeholder:text-grey-500 placeholder:mb-6"
            />
            <button className="bg-white w-1/4 p-1 h-12 rounded-r-full">
              <div className="bg-navGreenCol text-base text-white p-2 px-5 rounded-full ">
                Submit
              </div>
            </button>
          </div>
          <div className="backdrop-blur-sm w-max md:text-base md:mt-4 lg:text-lg px-3 py-2 rounded-lg mx-auto">
            Or follow us on
          </div>
          <div className="flex flex-row md:gap-2 md:mt-4 lg:gap-2 justify-evenly w-2/5 mx-auto">
            <div className="bg-white rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-mediaIcons xl:pt-1">
              <a
                href="https://www.linkedin.com/company/salam-kisan/"
                target="_blank"
              >
                <AiFillLinkedin className="w-3/4 m-auto" />
              </a>
            </div>

            <div className="bg-white rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-mediaIcons xl:pt-1">
              <a
                href="https://www.facebook.com/salamkisanofficial"
                target="_blank"
              >
                <GrFacebookOption className="w-3/4 m-auto" />
              </a>
            </div>
            <div className="bg-white rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-mediaIcons xl:pt-1">
              <a href="https://twitter.com/salamkisan1" target="_blank">
                <AiOutlineTwitter className="w-3/4 m-auto" />
              </a>
            </div>
            <div className="bg-white rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-mediaIcons xl:pt-1">
              <a
                href="https://www.instagram.com/salamkisanofficial/"
                target="_blank"
              >
                <AiOutlineInstagram className="w-3/4 m-auto" />
              </a>
            </div>
            <div className="bg-white rounded-full lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-mediaIcons xl:pt-1">
              <a
                href="https://www.youtube.com/@salamkisanofficial"
                target="_blank"
              >
                <AiOutlineYoutube className="w-3/4 m-auto" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 md:w-1/2 h-full bg-black bg-opacity-60 md:rounded-r-3xl">
          <div className="hidden md:block  lg:3/4 xl:w-2/3 lg:pl-10 xl:pl-0 mx-auto lg:my-20 xl:my-24 ">
            <h1 className="hidden md:block m-6 md:text-4xl lg:text-5xl  xl:text-6xl text-white font-bold ">
              Get Information About Us
            </h1>
            <p className="hidden md:block m-6 md:text-lg lg:text-xl xl:text-2xl text-white ">
              Join Us In The Agricultural Evolution
            </p>
          </div>
          <div className="block md:hidden">
            <img src={logo} className="w-56 mx-auto mt-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LgFooter;
