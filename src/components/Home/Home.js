import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logoTypoGreen.png";
import LgNav from "../NavBar/navBar";
import NavFinal from "../NavBar/NavFinal";
import MainVisionValue from "../visionValue/mainVisionValue";
import Main from "../whyBetter/main";
import DistinctiveQualities from "./DistinctiveQualities";
import LgFooter from "./Footer";
import Hero from "./Hero";
import ServicesIndustries from "./ServicesIndustries";

const Home = () => {
  return (
    <>
      <div className="">
        <NavFinal />
        <Hero />
        <Main />
        <MainVisionValue />
        <DistinctiveQualities />
        <ServicesIndustries />
        <LgFooter />
      </div>
    </>
  );
};

export default Home;
