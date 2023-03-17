import React from "react";
import LgNav from "./navBar";
import NavMob from "./navMob";

const NavFinal = () => {
  return (
    <>
      <div className="hidden md:block"> 
        <LgNav className="" />
      </div>
      <NavMob className="block md:hidden" />
    </>
  );
};

export default NavFinal;
