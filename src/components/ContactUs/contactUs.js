import React from "react";
import LgNav from "../NavBar/navBar";
import contactUs from "../../assets/contactUs.jpg";
import ContactForm from "./form";

const ContactUs = () => {
  return (
    <div className="h-auto flex flex-col md:flex-row my-4">
      {/* <LgNav /> */}
      <div className="md:w-1/2 h-full flex flex-col items-center gap-4">
        <div className="text-center w-max mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-2 text-headGreen">Contact Us</h1>
          <h3 className="text-sm md:text-base lg:text-xl xl:text-2xl text-subHeadGreen my-2">
            Our Friendly Team would Love to Hear From You.
          </h3>
        </div>
        <div className="md:w-3/4 mx-auto -mt-6">
          <ContactForm />
        </div>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-300 h-max my-auto">
        <img src={contactUs} />
      </div>
    </div>
  );
};

export default ContactUs;
