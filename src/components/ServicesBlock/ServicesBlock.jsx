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

const ServicesBlock = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);
  return (
    <div className={cn(s.servicesBlock)}>
      <article className="d-fl-col">
        <div ref={ref} className="subtitle__wrapper">
          <h2 className="subtitle">Документационно-организационные услуги</h2>
          <motion.span style={{ y }}>
            <img src={letter} alt="буква Д фон" />
          </motion.span>
        </div>

        <ul className={cn(s.list, "d-fl-col")}>
          <li className={cn("list__item d-fl")}>
            Организационно-документационное сопровождение проектов от подачи
            конкурсных заявок до сдачи отчетности, включая предоставление
            грантов и по ФЗ 44 и ФЗ-223
          </li>
          <li className={cn("list__item d-fl")}>
            Подбор и информирование об опубликованных закупках, предоставление
            информации и документации, необходимой для участия.
          </li>
        </ul>
      </article>
    </div>
  );
};

export { ServicesBlock };
