import React from "react";
import LgFooter from "../Home/Footer";
import LgNav from "../NavBar/navBar";
import NavFinal from "../NavBar/NavFinal";
import ContactUs from "./contactUs";

const ContactHome = () => {
  return (
    <div>
      <NavFinal />
      <ContactUs />
      <LgFooter />
    </div>
  );
};

export default ContactHome;
