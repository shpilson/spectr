import React from "react";
import s from "./AboutSection.module.scss";
import cn from "classnames";
import { ConsultationBlock } from "../ConsultationBlock/ConsultationBlock";
import { ServicesBlock } from "../ServicesBlock/ServicesBlock";
import titleIcon from "./assets/images/photo/titleIcon.svg";

const AboutSection = () => {
  return (
    <div className={cn(s.aboutSection)}>
      <div className="d-fl-col aboutSection__container">
        <article className="d-fl-col">
          <div className="titleIcon">
            <h2 className="title">О нас</h2>
            <span className="iconTriangle">
              <img src={titleIcon} alt="иконка треугольника" />
            </span>
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
