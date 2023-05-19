import React, { useRef } from "react";
import s from "./SeminarSection.module.scss";
import cn from "classnames";
import sliderData from "../../assests/data/sliderData.json";
import { Slide } from "../Slide/Slide";
import Slider from "react-slick";
import titleIcon from "./assets/images/photo/titleIcon.svg";
import star from "./assets/images/photo/star.svg";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";

const SeminarSection = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

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
        <div ref={ref} className="titleIcon">
          <h2 className="title">Семинары</h2>
          <motion.span style={{ y }} className="iconTriangle">
            <img src={titleIcon} alt="иконка треугольника" />
          </motion.span>
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
