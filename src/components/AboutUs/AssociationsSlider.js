import React, { Component } from "react";
import Slider from "react-slick";
import Iotech from "../../assets/iotechLogo.png";
import Agribot from "../../assets/agribotLogo.png";
import Agrinext from "../../assets/agrinextLogo.png";
import Agrowon from "../../assets/agrowonLogo.jpeg";
import Sakal from "../../assets/sakalLogo.png";
import IITK from "../../assets/bluelog.jpg"
export default class AssociationsSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 4,
            infinite: true,
            autoplaySpeed: 800,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            center:true,
          },
        },
      ],
    };
    return (
      <div className="px-10 md:px-20 py-10 my-4 bg-white shadow-lg">
        <Slider {...settings}>
          <div className="md:mx-4 h-52 px-4">
            <div className="bg-white h-full lg:h-40 lg:w-40 xl:h-48 xl:w-48 mx-auto shadow-xl rounded-xl">
              <img src={Iotech} className="h-full" />
            </div>
          </div>
          <div className="md:mx-4 h-52 px-4">
            <div className="bg-white h-full lg:h-40 lg:w-40 xl:h-48 xl:w-48 mx-auto py-10 shadow-xl rounded-xl">
              <img src={Agribot} className="lg:h-24 xl:h-28 mx-auto" />
            </div>
          </div>
          <div className="md:mx-4 h-52 px-4">
            <div className="bg-white h-full lg:h-40 lg:w-40 xl:h-48 xl:w-48 pt-10 mx-auto shadow-xl rounded-xl">
              <img src={Agrinext} className="h-3/4  mx-auto" />
            </div>
          </div>
          <div className="md:mx-4 h-52 px-4">
            <div className="bg-white h-full lg:h-40 lg:w-40 xl:h-48 xl:w-48 mx-auto shadow-xl rounded-xl">
              <img src={Agrowon} className="lg:h-36 xl:h-40 lg:pt-4 xl:pt-6 mx-auto" />
            </div>
          </div>
          <div className="md:mx-4 h-52 px-4">
            <div className="bg-white h-full lg:h-40 lg:w-40 xl:h-48 xl:w-48 mx-auto shadow-xl rounded-xl">
              <img src={Sakal} className="pt-14 mx-auto" />
            </div>
          </div>
          <div className="md:mx-4 h-52 px-4">
            <div className="bg-white h-full lg:h-40 lg:w-40 xl:h-48 xl:w-48 mx-auto shadow-xl rounded-xl">
              <img src={IITK} className="mx-auto" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
