import React, { useRef } from "react";
import s from "./ServicesBlock.module.scss";
import cn from "classnames";
import letter from "./assets/images/photo/letter.svg";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";

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

const blockAnimationLeft = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};
const blockAnimationRight = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};

const ServicesBlock = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <motion.div
      className={cn(s.servicesBlock)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <article className="d-fl-col">
        <div ref={ref} className="subtitle__wrapper">
          <motion.h2 className="subtitle" variants={titleAnimation} custom={2}>
            Документационно-организационные услуги
          </motion.h2>
          <motion.span style={{ y }}>
            <svg
              width="162"
              height="92"
              viewBox="0 0 162 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_847_2731)">
                <path
                  className="pathStrokePainted"
                  opacity="0.8"
                  d="M118.121 46.0915L158.621 19.7637V72.4193L118.121 46.0915Z"
                  fill="url(#paint0_linear_847_2731)"
                />
                <path
                  opacity="0.3"
                  d="M142.121 71.4979L103.038 46.0915L142.121 20.6851V71.4979Z"
                  className="pathStroke"
                />
              </g>
              <path
                opacity="0.3"
                d="M82 60.997H72.6259V1V0.5H72.1259H17.9194H17.4364L17.4197 0.982732L16.6137 24.3065C16.6137 24.3068 16.6137 24.307 16.6137 24.3073C16.4125 29.6233 16.0773 34.547 15.6084 39.0787L15.6084 39.0787L15.6077 39.086C15.2067 43.608 14.5393 47.553 13.609 50.925C12.681 54.2178 11.4325 56.7336 9.88534 58.5055L9.88526 58.5054L9.87851 58.5134C8.54218 60.1103 6.87412 60.9338 4.84041 60.997H2.10076H1.60246L1.60076 61.4953L1.5 90.9983L1.49829 91.5H2H17.1133H17.6133V91V76.0562H66.3867V91V91.5H66.8867H82H82.5V91V61.497V60.997H82ZM55.505 60.997H25.4154C25.8147 60.407 26.1852 59.7604 26.5275 59.0586C27.76 56.6687 28.7456 53.787 29.4907 50.4217L29.4912 50.4195C30.2352 46.9873 30.7753 43.2032 31.1126 39.0683C31.5164 34.9413 31.8191 30.5667 32.0209 25.9449L32.021 25.9449L32.0212 25.937L32.31 15.5592H55.505V60.997Z"
                className="pathStroke"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_847_2731"
                  x1="118.121"
                  y1="46.0915"
                  x2="154.621"
                  y2="46.0915"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B7ADD3" />
                  <stop offset="1" stop-color="#FFADAD" stop-opacity="0.22" />
                </linearGradient>
                <clipPath id="clip0_847_2731">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(102 16)"
                  />
                </clipPath>
              </defs>
            </svg>
          </motion.span>
        </div>

        <ul className={cn(s.list, "d-fl-col")}>
          <motion.li
            className={cn("list__item d-fl")}
            variants={blockAnimationLeft}
            custom={3.5}
          >
            Организационно-документационное сопровождение проектов от подачи
            конкурсных заявок до сдачи отчетности, включая предоставление
            грантов и по ФЗ 44 и ФЗ-223
          </motion.li>
          <motion.li
            className={cn("list__item d-fl")}
            variants={blockAnimationRight}
            custom={4}
          >
            Подбор и информирование об опубликованных закупках, предоставление
            информации и документации, необходимой для участия.
          </motion.li>
        </ul>
      </article>
    </motion.div>
  );
};

export { ServicesBlock };
