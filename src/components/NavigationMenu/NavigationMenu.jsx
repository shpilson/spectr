import s from "./NavigationMenu.module.scss";
import React from "react";
import cn from "classnames";
import { ButtonMenu } from "../ButtonMenu/ButtonMenu";
import { Link } from "react-scroll";

const NavigationMenu = () => {
  return (
    <>
      <div className={cn(s.wrapper, "d-fl")}>
        <ButtonMenu />
        <nav className={cn(s.navigation, "d-fl")}>
          <Link
            to="services"
            smooth={true}
            offset={0}
            duration={500}
            className={s.link}
          >
            Услуги
          </Link>
          <Link
            to="experience"
            smooth={true}
            offset={0}
            duration={500}
            className={s.link}
          >
            Опыт
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className={s.link}
          >
            Контакты
          </Link>
        </nav>
        <button className={cn(s.contact, "button__animation")}>
          <span>Связаться</span>
        </button>
      </div>
    </>
  );
};

export { NavigationMenu };
