import React, { useRef } from "react";
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

const ExperienceSection = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);
  return (
    <div className={cn(s.experienceSection)} id="experience">
      <div className="d-fl-col experienceSection__container">
        <div ref={ref} className="titleIcon">
          <h2 className="title">Опыт</h2>
          <motion.span style={{ y }} className="iconTriangle">
            <img src={titleIcon} alt="иконка треугольника" />
          </motion.span>
        </div>
        <div className={cn(s.info)}>
          <div className={cn(s.block, "d-fl-col")}>
            <span className={s.blockTitle}>Свыше</span>
            <div className={cn(s.number, s.numberOne)}>
              <img src={img350} alt="350 реализованных проектов" />
            </div>
            <span className={s.blockTitle}>успешно реализованных проектов</span>
          </div>
          <div className={cn(s.block, "d-fl-col")}>
            <span className={s.blockTitle}>Более</span>
            <div className={cn(s.number, s.numberTwo)}>
              <img src={img10} alt="10 лет на рынке" />
            </div>
            <span className={s.blockTitle}>лет на рынке</span>
          </div>
          <div className={cn(s.block, "d-fl-col")}>
            <span className={cn(s.blockTitle, s.blockTitleCenter)}>
              Многолетний опыт подачи заявок (ФЗ-44, ФЗ-223, гранты)
            </span>
          </div>
        </div>
        <div className={cn(s.grant, "d-fl-col")}>
          <p className={cn(s.blockTitle, s.blockTitleLeft)}>
            Организационная и техническая поддержка при реализации грантов
            различных ФОИВ и фондов:
          </p>
          <div className={s.grantGrid}>
            <div className={cn(s.grantBlock, "d-fl")}>
              <div className={s.grandImg}>
                <img src={fondOne} alt="Mega Grants 10" />
              </div>
              <div className={s.grandImg}>
                <img src={fondTwo} alt="Mega Grants 10" />
              </div>
            </div>
            <div className={cn(s.grantBlock, "d-fl")}>
              <div className={s.grandImg}>
                <img src={fondThree} alt="Mega Grants 10" />
              </div>
              <div className={s.grandImg}>
                <img src={fondFour} alt="Mega Grants 10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExperienceSection };
