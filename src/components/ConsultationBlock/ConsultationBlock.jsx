import React, { useRef } from "react";
import s from "./ConsultationBlock.module.scss";
import cn from "classnames";
import letter from "./assets/images/photo/letter.svg";
import triangleBackground from "./assets/images/photo/triangleBackground.svg";
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

const blockAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};

const ConsultationBlock = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <motion.div
      className={cn(s.consultationBlock)}
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div ref={ref} className={s.triangleBackground}>
        <motion.svg
          style={{ y }}
          width="470"
          height="478"
          viewBox="0 0 470 478"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M257.666 391.297L85.1765 166.921L364.904 209.932L257.666 391.297Z"
            className={s.pathStroke}
          />
          <path
            opacity="0.8"
            d="M82.7273 131.345L364.418 174.657L256.427 357.296L82.7273 131.345Z"
            fill="url(#paint0_linear_847_2722)"
            className={s.pathStrokePainted}
          />
          <defs>
            <linearGradient
              id="paint0_linear_847_2722"
              x1="82.7273"
              y1="131.345"
              x2="324.628"
              y2="289.107"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D3CFAD" />
              <stop offset="1" stopColor="#ADFFC4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <article className="d-fl-col">
        <div ref={ref} className="subtitle__wrapper">
          <motion.h2 className="subtitle" variants={titleAnimation} custom={2}>
            Консультации
          </motion.h2>
          <motion.span style={{ y }}>
            <svg
              width="161"
              height="92"
              viewBox="0 0 161 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_847_2700)">
                <path
                  className="pathStrokePainted"
                  opacity="0.8"
                  d="M117.121 46.0915L157.621 19.7637V72.4193L117.121 46.0915Z"
                  fill="url(#paint0_linear_847_2700)"
                />
                <path
                  opacity="0.3"
                  d="M141.121 71.4979L102.038 46.0915L141.121 20.6851V71.4979Z"
                  className="pathStroke"
                />
              </g>
              <path
                opacity="0.3"
                d="M57.5409 91.2665L57.688 91.5H57.964H81H81.9093L81.4222 90.7322L52.0789 44.474L80.5412 1.27509L81.0518 0.5H80.1236H58.7152H58.4396L58.2924 0.733015L35.4605 36.8857H21.6565V1V0.5H21.1565H1H0.5V1V91V91.5H1H21.1565H21.6565V91V55.2429H34.8497L57.5409 91.2665Z"
                className="pathStroke"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_847_2700"
                  x1="117.121"
                  y1="46.0915"
                  x2="153.621"
                  y2="46.0915"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B7ADD3" />
                  <stop offset="1" stop-color="#FFADAD" stop-opacity="0.22" />
                </linearGradient>
                <clipPath id="clip0_847_2700">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(101 16)"
                  />
                </clipPath>
              </defs>
            </svg>
          </motion.span>
        </div>
        <ul className={s.list}>
          <motion.li
            className={cn("list__item d-fl")}
            variants={titleAnimation}
            custom={3.5}
          >
            Анализ и оптимизация бизнес-процессов проектов в области науки и
            образования
          </motion.li>
          <motion.li
            className={cn("list__item d-fl")}
            variants={titleAnimation}
            custom={4}
          >
            Подбор и информирование <br /> опубликованных закупок
          </motion.li>
          <motion.li
            className={cn("list__item d-fl")}
            variants={titleAnimation}
            custom={4.5}
          >
            Оказание помощи при написании <br /> и формировании заявок на гранты
          </motion.li>
          <motion.li
            className={cn("list__item d-fl")}
            variants={titleAnimation}
            custom={5}
          >
            Взаимодействие с зарубежными <br /> компаниями по вопросам,
            связанным <br /> с грантовой поддержкой
          </motion.li>
        </ul>
      </article>
    </motion.div>
  );
};

export { ConsultationBlock };
