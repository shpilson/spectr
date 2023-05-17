import React from "react";
import s from "./ConsultationBlock.module.scss";
import cn from "classnames";
import letter from "./assets/images/photo/letter.svg";

const ConsultationBlock = () => {
  return (
    <div className={cn(s.consultationBlock)}>
      <article className="d-fl-col">
        <div className="subtitle__wrapper">
          <h2 className="subtitle">Консультации</h2>
          <span>
            <img src={letter} alt="буква К фон" />
          </span>
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
