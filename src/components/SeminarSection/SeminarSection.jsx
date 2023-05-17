import React from "react";
import s from "./SeminarSection.module.scss";
import cn from "classnames";
import sliderData from "../../assests/data/sliderData.json";
import { Slide } from "../Slide/Slide";
import Slider from "react-slick";
import titleIcon from "./assets/images/photo/titleIcon.svg";
import star from "./assets/images/photo/star.svg";

const SeminarSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn(s.seminarSection)}>
      <div className="d-fl-col seminarSection__container">
        <div className="titleIcon">
          <h2 className="title">Семинары</h2>
          <span className="iconTriangle">
            <img src={titleIcon} alt="иконка треугольника" />
          </span>
        </div>

        <Slider {...settings}>
          {sliderData.map((el) => {
            if (el.isActive) {
              return <Slide key={el.id} {...el} />;
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export { SeminarSection };
