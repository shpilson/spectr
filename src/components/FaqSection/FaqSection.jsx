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
  let y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

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
      id="faq"
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
            <svg
              width="70"
              height="54"
              viewBox="0 0 70 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M16 27.0005L56.5 3.61781V50.3832L16 27.0005Z"
                fill="url(#paint0_linear_847_1413)"
                className="pathStrokePainted"
              />
              <path
                opacity="0.3"
                d="M40 49.5167L0.999999 27L40 4.48335V49.5167Z"
                className="pathStroke"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_847_1413"
                  x1="16"
                  y1="27.0005"
                  x2="52.5"
                  y2="27.0005"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B7ADD3" />
                  <stop offset="1" stop-color="#FFADAD" stop-opacity="0.22" />
                </linearGradient>
              </defs>
            </svg>
          </motion.span>
        </div>

        <div className={s.grid}>
          <div ref={ref} className={s.triangleBackground}>
            <motion.svg
              style={{ y }}
              width="434"
              height="492"
              viewBox="0 0 434 492"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M320.406 352.478L56.0506 245.979L202.897 92.8295L320.406 352.478Z"
                fill="url(#paint0_linear_847_1423)"
                className={s.pathStrokePainted}
              />
              <path
                opacity="0.4"
                d="M198.43 124.371L315.12 382.21L52.6067 276.454L198.43 124.371Z"
                className={s.pathStroke}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_847_1423"
                  x1="320.406"
                  y1="352.478"
                  x2="148.331"
                  y2="187.486"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B7ADD3" />
                  <stop offset="1" stopColor="#FFADAD" stopOpacity="0.22" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

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
                    key={el.id}
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
