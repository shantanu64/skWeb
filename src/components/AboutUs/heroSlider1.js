import React, { Component } from "react";
import Slider from "react-slick";
// import team13 from '../../assets/team13.jpg'
// import team14 from '../../assets/team14.jpg'
export default class HeroSlider1 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      initialSlide: 0,
      autoplay: true,
      arrows: false,
      fade: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider {...settings}>
          <div className="rounded-3xl h-40">
            <div className="bg-red-200 rounded-3xl h-full h-40 w-40 mx-auto rounded-3xl">
            <img src="team13.jpg" className="h-full w-full rounded-3xl" />

            </div>
          </div>
          <div className="rounded-3xl h-40">
            <div className="bg-red-200 rounded-3xl h-full h-40 w-40 mx-auto rounded-3xl">
            <img src="team14.jpg" className="h-full w-full rounded-3xl" />

            </div>
          </div>
        </Slider>
      </>
    );
  }
}
