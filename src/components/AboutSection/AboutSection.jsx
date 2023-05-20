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

// const ImgParallax = ({ speed }) => {
//   const { scrollYProgress } = useViewportScroll();
//   const yValue = useTransform(scrollYProgress, [0, 1], [0, -10 * speed]);

//   return (
//     <motion.span
//       className="iconTriangle"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//       style={{ y: yValue }}
//     >
//       <img src={titleIcon} alt="иконка треугольника" />
//     </motion.span>
//   );
// };

const AboutSection = () => {
  // let { scrollYProgress } = useScroll();
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <div className={cn(s.aboutSection)}>
      <div className="d-fl-col aboutSection__container">
        <article className="d-fl-col">
          <div ref={ref} className="titleIcon">
            <h2 className="title">О нас</h2>
            <motion.span style={{ y }} className="iconTriangle">
              <img src={titleIcon} alt="иконка треугольника" />
            </motion.span>
          </div>

          <hr className={s.line} />

          <div className={cn(s.description, "d-fl-col")}>
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
          </div>
        </article>

        <ConsultationBlock />
        <ServicesBlock />
      </div>
    </div>
  );
};

export { AboutSection };
