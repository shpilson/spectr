import React, { useRef, useState } from "react";
import s from "./ExperienceSection.module.scss";
import cn from "classnames";
import img10 from "./assets/images/photo/10.svg";
import img350 from "./assets/images/photo/350.svg";
import fondOne from "./assets/images/photo/fondOne.svg";
import fondTwo from "./assets/images/photo/fondTwo.svg";
import fondThree from "./assets/images/photo/fondThree.svg";
import fondFour from "./assets/images/photo/fondFour.svg";
import titleIcon from "./assets/images/photo/titleIcon.svg";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

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

const ExperienceSection = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <motion.div
      className={cn(s.experienceSection)}
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="d-fl-col experienceSection__container">
        <div ref={ref} className="titleIcon">
          <motion.h2 className="title" variants={titleAnimation} custom={2}>
            Опыт
          </motion.h2>
          <motion.span style={{ y }} className="iconTriangle">
            <img src={titleIcon} alt="иконка треугольника" />
          </motion.span>
        </div>
        <div className={cn(s.info)}>
          <div className={cn(s.block, "d-fl-col")}>
            <span className={s.blockTitle}>Свыше</span>
            <div className={cn(s.number, s.numberOne, "number")}>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                // onExit={() => setCounterOn(false)}
              >
                {counterOn && (
                  <CountUp start={0} end={350} duration={2} delay={0}></CountUp>
                )}
              </ScrollTrigger>
              {/* <img src={img350} alt="350 реализованных проектов" /> */}
            </div>
            <span className={s.blockTitle}>успешно реализованных проектов</span>
          </div>
          <div className={cn(s.block, "d-fl-col")}>
            <span className={s.blockTitle}>Более</span>
            <div className={cn(s.number, s.numberTwo)}>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                // onExit={() => setCounterOn(false)}
              >
                {counterOn && (
                  <CountUp start={0} end={10} duration={4} delay={0}></CountUp>
                )}
              </ScrollTrigger>
              {/* <img src={img10} alt="10 лет на рынке" /> */}
            </div>
            <span className={s.blockTitle}>лет на рынке</span>
          </div>
          <div className={cn(s.block, "d-fl-col")}>
            <motion.span
              className={cn(s.blockTitle, s.blockTitleCenter)}
              variants={textAnimation}
              custom={2}
            >
              Многолетний опыт подачи заявок (ФЗ-44, ФЗ-223, гранты)
            </motion.span>
          </div>
        </div>
        <div className={cn(s.grant, "d-fl-col")}>
          <p className={cn(s.blockTitle, s.blockTitleLeft)}>
            Организационная и техническая поддержка при реализации грантов
            различных ФОИВ и фондов:
          </p>
          <motion.div
            className={s.grantGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={cn(s.grantBlock, "d-fl")}>
              <div className={s.grandImg}>
                <motion.img
                  src={fondOne}
                  alt="Mega Grants 10"
                  variants={textAnimation}
                  custom={2}
                />
              </div>
              <div className={s.grandImg}>
                <motion.img
                  src={fondTwo}
                  alt="Mega Grants 10"
                  variants={textAnimation}
                  custom={4}
                />
              </div>
            </div>
            <div className={cn(s.grantBlock, "d-fl")}>
              <div className={s.grandImg}>
                <motion.img
                  src={fondThree}
                  alt="Mega Grants 10"
                  variants={textAnimation}
                  custom={3}
                />
              </div>
              <div className={s.grandImg}>
                <motion.img
                  src={fondFour}
                  alt="Mega Grants 10"
                  variants={textAnimation}
                  custom={5}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export { ExperienceSection };
