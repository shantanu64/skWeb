import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar";
import logo from "../../assets/logoTypoGreen.png";
// import {} from '@mui/material'


const LgNav = () => {
  // State to track if the dropdown is open or closed
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown open/closed
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between px-6 md:h-20 lg:h-20 xl:h-24 bg-transparent w-full">
        <div className="md:w-1/4 lg:w-1/4 xl:w-1/5">
          <a href="/">
            <img src={logo} className="" alt="Logo" />
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
          <div className="relative">
            <button
              className="lg:text-base xl:text-xl"
              onClick={toggleDropdown}
            >
              News
            </button>
            {/* Dropdown content */}
            {/* {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-300 py-2 mt-2 rounded shadow-lg">
                <NavLink to={"/news1"}>
                  <button className="block w-40 px-4 py-2 text-sm text-green-800 hover:bg-gray-100">
                    News 1 
                  </button>
                </NavLink>
                <NavLink to={"/news2"}>
                  <button  className="block w-40 px-4 py-2 text-sm text-green-800 hover:bg-gray-100">
                    News 2
                  </button>
                </NavLink>
                
              </div>
            )} */}
          </div>
          <NavLink  to={"/career"}>
            <button className="lg:text-base xl:text-xl">Career</button>
          </NavLink>
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

