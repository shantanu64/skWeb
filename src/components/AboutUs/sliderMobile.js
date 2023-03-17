import React, { Component } from "react";
import Slider from "react-slick";
import team2 from '../../assets/team2.JPG'
import team5 from '../../assets/team5.JPG'
import team6 from '../../assets/team6.JPG'
import team8 from '../../assets/team8.JPG'
import team7 from '../../assets/team7.jpg'

export default class SliderMobile extends Component {
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
          <div className="rounded-3xl h-48">
            <div className="bg-red-200 rounded-3xl h-full h-48 w-full mx-auto rounded-3xl">
              <img src={team2} className="h-full w-full rounded-3xl" />
            </div>
          </div>
          <div className="rounded-3xl h-48">
            <div className="bg-red-200 rounded-3xl h-full h-48 w-full mx-auto rounded-3xl">
              <img src={team5} className="h-full w-full rounded-3xl" />
            </div>
          </div>
          <div className="rounded-3xl h-48">
            <div className="bg-red-200 rounded-3xl h-full h-48 w-full mx-auto rounded-3xl">
              <img src={team6} className="h-full w-full rounded-3xl" />
            </div>
          </div>
          <div className="rounded-3xl h-48">
            <div className="bg-red-200 rounded-3xl h-full h-48 w-full mx-auto rounded-3xl">
              <img src={team8} className="h-full w-full rounded-3xl" />
            </div>
          </div>
          <div className="rounded-3xl h-48">
            <div className="bg-red-200 rounded-3xl h-full h-48 w-full mx-auto rounded-3xl">
              <img src={team7} className="h-full w-full rounded-3xl" />
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
