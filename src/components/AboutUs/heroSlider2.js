import React, { Component } from "react";
import Slider from "react-slick";
// import team3 from '../../assets/team3.jpg'
// import team4 from '../../assets/team4.jpg'
// import team9 from '../../assets/team9.jpg'
// import team10 from '../../assets/team10.jpg'

export default class HeroSlider2 extends Component {
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
          <div className="rounded-3xl h-60">
            <div className="bg-red-200 rounded-3xl h-full h-60 w-40 mx-auto rounded-3xl">
            <img src="team3.jpg" className="h-full w-full rounded-3xl" />
            </div>
          </div>
          <div className="rounded-3xl h-60">
            <div className="bg-red-200 rounded-3xl h-full h-60 w-40 mx-auto rounded-3xl">
            <img src="team4.jpg" className="h-full w-full rounded-3xl" />
            </div>
          </div>
          <div className="rounded-3xl h-60">
            <div className="bg-red-200 rounded-3xl h-full h-60 w-40 mx-auto rounded-3xl">
            <img src="team9.jpg" className="h-full w-full rounded-3xl" />
            </div>
          </div>
          <div className="rounded-3xl h-60">
            <div className="bg-red-200 rounded-3xl h-full h-60 w-40 mx-auto rounded-3xl">
            <img src="team10.jpg" className="h-full w-full rounded-3xl" />
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
