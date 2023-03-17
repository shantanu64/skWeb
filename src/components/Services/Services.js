import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logoTypoGreen.png'
import LgNav from "../NavBar/navBar";
import ServicesHero from "./ServicesHero";
import ServicesWeProvide from "./servicesWeProvide";
import LgFooter from "../Home/Footer";
import NavFinal from "../NavBar/NavFinal";

const Services = () => {
    return (
        <>
            <div className="">
                <NavFinal />
                <ServicesHero />
                <ServicesWeProvide />
                <LgFooter />
            </div>
        </>
    );
};

export default Services;