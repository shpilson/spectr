import React, { useRef } from "react";
import s from "./ConsultationBlock.module.scss";
import cn from "classnames";
import letter from "./assets/images/photo/letter.svg";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";

const ConsultationBlock = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <div className={cn(s.consultationBlock)}>
      <article className="d-fl-col">
        <div ref={ref} className="subtitle__wrapper">
          <h2 className="subtitle">Консультации</h2>
          <motion.span style={{ y }}>
            <img src={letter} alt="буква К фон" />
          </motion.span>
        </div>
        <ul className={s.list}>
          <li className={cn("list__item d-fl")}>
            Анализ и оптимизация бизнес-процессов проектов в области науки и
            образования
          </li>
          <li className={cn("list__item d-fl")}>
            Подбор и информирование <br /> опубликованных закупок
          </li>
          <li className={cn("list__item d-fl")}>
            Оказание помощи при написании <br /> и формировании заявок на гранты
          </li>
          <li className={cn("list__item d-fl")}>
            Взаимодействие с зарубежными <br /> компаниями по вопросам,
            связанным <br /> с грантовой поддержкой
          </li>
        </ul>
      </article>
    </div>
  );
};

export { ConsultationBlock };
