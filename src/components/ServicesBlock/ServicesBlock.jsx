import React from "react";
import s from "./ServicesBlock.module.scss";
import cn from "classnames";
import letter from "./assets/images/photo/letter.svg";

const ServicesBlock = () => {
  return (
    <div className={cn(s.servicesBlock)} id="services">
      <article className="d-fl-col">
        <div className="subtitle__wrapper">
          <h2 className="subtitle">Документационно-организационные услуги</h2>
          <span>
            <img src={letter} alt="буква Д фон" />
          </span>
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
