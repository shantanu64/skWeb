import React from "react";
import LgNav from "../NavBar/navBar";
import Hero from "./Hero";
import Associations from "./Associations";
import VisionMission from "./VisionMission";
import LgFooter from "../Home/Footer";
import NavFinal from "../NavBar/NavFinal";
import Team from "./Team";

const AboutUs = () => {
  return (
    <div>
      <NavFinal />
      <Hero />
      <Associations />
      <VisionMission />
      <Team />
      <LgFooter />
    </div>
  );
};

export default AboutUs;
