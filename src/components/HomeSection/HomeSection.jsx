import s from "./HomeSection.module.scss";
import cn from "classnames";
import React from "react";
import triangle from "./assets/images/photo/triangle.svg";
import triangleTwo from "./assets/images/photo/triangleTwo.svg";
import triangleThree from "./assets/images/photo/triangleThree.svg";
import triangleFour from "./assets/images/photo/triangleFour.svg";

const HomeSection = () => {
  return (
    <div className={cn(s.homeSection)}>
      <div className="d-fl-col homeSection__container">
        <div className={cn(s.wrapperTitle, "d-fl-col")}>
          <span className={s.titleOne}>Делать сложное ––</span>
          <span className={s.titleTwo}>Просто</span>
          <h1 className={s.title}>Спектр. Управленческий консалтинг. </h1>
          <hr className={s.lineOne} />
        </div>

        <button className={cn(s.contact, "button__animation")}>
          <span>Связаться</span>
        </button>

        <hr className={s.lineTwo} />
        <hr className={s.lineThree} />
      </div>

      <div className={s.triangleAbsolute}>
        <div className={s.triangleWrapper}>
          <div className={cn(s.triangle, s.triangleOne)}>
            <img src={triangle} alt="Треугольник фон" />
          </div>
          <div className={cn(s.triangle, s.triangleTwo)}>
            <img src={triangleTwo} alt="Треугольник фон" />
          </div>
          <div className={cn(s.triangle, s.triangleThree)}>
            <img src={triangleThree} alt="Треугольник фон" />
          </div>
          <div className={cn(s.triangle, s.triangleFour)}>
            <img src={triangleFour} alt="Треугольник фон" />
          </div>
        </div>
      </div>

      <div className={s.triangleAbsolute2}>
        <div className={s.triangleWrapper2}>
          <div className={cn(s.triangle2, s.triangleOne2)}>
            <img src={triangle} alt="Треугольник фон" />
          </div>
          <div className={cn(s.triangle2, s.triangleTwo2)}>
            <img src={triangleTwo} alt="Треугольник фон" />
          </div>
          <div className={cn(s.triangle2, s.triangleThree2)}>
            <img src={triangleThree} alt="Треугольник фон" />
          </div>
          <div className={cn(s.triangle2, s.triangleFour2)}>
            <img src={triangleFour} alt="Треугольник фон" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeSection };
