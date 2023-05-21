import React, { useState, useRef } from "react";
import s from "./FaqSection.module.scss";
import cn from "classnames";
import faqData from "../../assests/data/faqData.json";
import { FaqBlock } from "../FaqBlock/FaqBlock";
import titleIcon from "./assets/images/photo/titleIcon.svg";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";

const FaqSection = () => {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

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

  return (
    <motion.div
      className={cn(s.faqSection)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="d-fl-col faqSection__container">
        <div ref={ref} className="titleIcon">
          <motion.h2
            className={cn(s.titleSection, "title")}
            variants={titleAnimation}
            custom={2}
          >
            Частые вопросы
          </motion.h2>
          <motion.span style={{ y }} className="iconTriangle">
            <img src={titleIcon} alt="иконка треугольника" />
          </motion.span>
        </div>

        <div className={s.grid}>
          <div className={s.faqLeft}>
            <p className={s.faqLeftDescription}>
              Если вы не смогли найти нужную информацию на нашем сайте, то
              возможно ответ на ваш вопрос есть в списке самых часто задаваемых
              вопросов
            </p>
          </div>

          <div className={s.faqRight}>
            {faqData.map((el, i) => {
              if (el.isActive) {
                // return <FaqBlock key={el.id} {...el} i={i} />;
                return (
                  <motion.div
                    className={cn(s.faqBlock, "d-fl-col")}
                    onClick={() => toggleAccordion(i)}
                    variants={textAnimation}
                    custom={i * 1.5}
                  >
                    <div className={cn(s.title, "d-fl")}>
                      <h2>{el.title}</h2>
                      <div
                        className={
                          selected === i ? s.iconPlus__show : s.iconPlus
                        }
                      ></div>
                    </div>
                    <div
                      className={selected === i ? s.content__show : s.content}
                    >
                      <p className={s.description}>{el.description}</p>
                    </div>
                  </motion.div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { FaqSection };
