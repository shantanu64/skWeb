import React, { Component } from "react";
import Slider from "react-slick";
import team11 from "../../assets/team11.jpg";
import team12 from "../../assets/team12.jpg";
import team15 from "../../assets/team15.jpg";

export default class HeroSlider4 extends Component {
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
          <div className="rounded-3xl rounded-br-aboutUsHeroRadius h-56">
            <div className="bg-red-200 rounded-3xl rounded-br-aboutUsHeroRadius h-full h-56 w-96 mx-auto rounded-3xl rounded-br-aboutUsHeroRadius">
              <img
                src={team11}
                className="h-full w-full rounded-br-aboutUsHeroRadius rounded-3xl"
              />
            </div>
          </div>
          <div className="rounded-3xl rounded-br-aboutUsHeroRadius h-56">
            <div className="bg-red-200 rounded-3xl rounded-br-aboutUsHeroRadius h-full h-56 w-96 mx-auto rounded-3xl rounded-br-aboutUsHeroRadius">
              <img
                src={team12}
                className="h-full w-full rounded-br-aboutUsHeroRadius rounded-3xl"
              />
            </div>
          </div>
          <div className="rounded-3xl rounded-br-aboutUsHeroRadius h-56">
            <div className="bg-red-200 rounded-3xl rounded-br-aboutUsHeroRadius h-full h-56 w-96 mx-auto rounded-3xl rounded-br-aboutUsHeroRadius">
              <img
                src={team15}
                className="h-full w-full rounded-br-aboutUsHeroRadius rounded-3xl"
              />
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
