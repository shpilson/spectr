import React, { useState } from "react";
import s from "./FaqSection.module.scss";
import cn from "classnames";
import faqData from "../../assests/data/faqData.json";
import { FaqBlock } from "../FaqBlock/FaqBlock";
import titleIcon from "./assets/images/photo/titleIcon.svg";

const FaqSection = () => {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className={cn(s.faqSection)}>
      <div className="d-fl-col faqSection__container">
        <div className="titleIcon">
          <h2 className="title">Частые вопросы</h2>
          <span className="iconTriangle">
            <img src={titleIcon} alt="иконка треугольника" />
          </span>
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
                  <div
                    className={cn(s.faqBlock, "d-fl-col")}
                    onClick={() => toggleAccordion(i)}
                  >
                    <div className={cn(s.title, "d-fl")}>
                      <h2>{el.title}</h2>
                      <span
                        className={
                          selected === i ? s.iconPlus__show : s.iconPlus
                        }
                      ></span>
                    </div>
                    <div
                      className={selected === i ? s.content__show : s.content}
                    >
                      <p className={s.description}>{el.description}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FaqSection };
