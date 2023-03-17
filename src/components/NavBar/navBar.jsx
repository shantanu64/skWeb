import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logoTypoGreen.png";

import { Twirl as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar";

const LgNav = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-6 md:h-20 lg:h-20 xl:h-24 bg-transparent w-full">
        <div className="md:w-1/4 lg:w-1/4 xl:w-1/5">
          <a href="/">
            <img src={logo} className="" />
          </a>
        </div>

        <div className="flex flex-row items-center justify-around md:w-3/4 lg:w-8/12 xl:w-3/5 h-full text-navGreenCol font-normal">
          <NavLink to={"/"}>
            <button className="lg:text-base xl:text-xl">Home</button>
          </NavLink>
          <NavLink to={"/aboutUs"}>
            <button className="lg:text-base xl:text-xl">About Us</button>
          </NavLink>
          <NavLink to={"/services"}>
            <button className="lg:text-base xl:text-xl">Services</button>
          </NavLink>
          <button className="lg:text-base xl:text-xl">News</button>
          <button className="lg:text-base xl:text-xl">Events</button>
          <NavLink to={"/contactUs"}>
            <button className="lg:text-base xl:text-xl">Contact Us</button>
          </NavLink>
        </div>
      </div>
  
    </>
  );
};

export default LgNav;
