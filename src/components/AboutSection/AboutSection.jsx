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
              <img src={titleIcon} alt="иконка треугольника" />
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
