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
            stroke="#171717"
          />
          <path
            opacity="0.8"
            d="M82.7273 131.345L364.418 174.657L256.427 357.296L82.7273 131.345Z"
            fill="url(#paint0_linear_847_2722)"
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
            <img src={letter} alt="буква К фон" />
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
