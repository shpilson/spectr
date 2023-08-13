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

  const titleAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.3 },
    }),
  };

  return (
    <motion.div
      className={cn(s.seminarSection)}
      id="seminar"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="d-fl-col seminarSection__container">
        <div ref={ref} className="titleIcon">
          <motion.h2 className="title" variants={titleAnimation} custom={2}>
            Семинары
          </motion.h2>
          <motion.span style={{ y }} className="iconTriangle">
            <svg
              width="70"
              height="54"
              viewBox="0 0 70 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 27.0005L56.5 3.61781V50.3832L16 27.0005Z"
                fill="url(#paint0_linear_847_1435)"
                className="pathStrokePainted"
              />
              <path
                opacity="0.3"
                d="M40 49.5167L0.999999 27L40 4.48335V49.5167Z"
                className="pathStroke"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_847_1435"
                  x1="16"
                  y1="27.0005"
                  x2="57.5"
                  y2="27.0005"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D3CFAD" />
                  <stop offset="1" stop-color="#ADFFC4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
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
    </motion.div>
  );
};

export { SeminarSection };
