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
            <img src={letter} alt="буква Д фон" />
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
