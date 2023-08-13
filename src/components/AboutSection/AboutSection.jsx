import React, { useRef } from "react";
import s from "./AboutSection.module.scss";
import cn from "classnames";
import { ConsultationBlock } from "../ConsultationBlock/ConsultationBlock";
import { ServicesBlock } from "../ServicesBlock/ServicesBlock";
import titleIcon from "./assets/images/photo/titleIcon.svg";
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

const textAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};

const AboutSection = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <motion.div
      className={cn(s.aboutSection)}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="d-fl-col aboutSection__container">
        <article className="d-fl-col">
          <div ref={ref} className="titleIcon">
            <motion.h2 className="title" variants={titleAnimation} custom={2}>
              О нас
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
                  className="pathStrokePainted"
                  d="M16 27.0006L56.5 3.61793V50.3833L16 27.0006Z"
                  fill="url(#paint0_linear_847_2747)"
                />
                <path
                  opacity="0.3"
                  d="M40 49.5167L0.999999 27L40 4.48335V49.5167Z"
                  className="pathStroke"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_847_2747"
                    x1="16"
                    y1="27.0006"
                    x2="60.2188"
                    y2="28.3506"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D3CFAD" />
                    <stop offset="1" stop-color="#ADFFC4" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.span>
          </div>

          <hr className={s.line} />

          <motion.div
            className={cn(s.description, "d-fl-col")}
            variants={textAnimation}
            custom={3.5}
          >
            <p className={s.text}>
              Мы стремимся предоставить нашим клиентам <span>наилучший </span>
              сервис и наиболее эффективные решения для их бизнеса.
            </p>

            <p className={s.text}>
              <span>Наша команда</span> состоит из профессионалов, которые
              обладают необходимыми знаниями и опытом для достижения
              поставленных целей.
              <br />
              С нами вы можете быть уверены в том, что ваши задачи будут решены
              в срок <br /> и в соответствии с
              <span> высокими стандартами качества.</span>
            </p>
          </motion.div>
        </article>

        <ConsultationBlock />
        <ServicesBlock />
      </div>
    </motion.div>
  );
};

export { AboutSection };
