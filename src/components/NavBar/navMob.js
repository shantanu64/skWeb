import React from "react";
import logo from "../../assets/logoTypoGreen.png";
import { Twirl as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar";

const NavMob = () => {
  return (
    <div className="block md:hidden bg-white shadow-md mb-6 flex flex-row items-center justify-between">
      <div className="w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/5">
        <a href="/">
          <img src={logo} className="" />
        </a>
      </div>
      <div className="mr-4">
        {/* <Hamburger direction="right" /> */}
        <Sidebar />
      </div>
    </div>
  );
};

export default NavMob;
