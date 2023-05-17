import s from "./Logo.module.scss";
import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/icon/logo_black.svg";

const Logo = () => {
  return (
    <>
      <Link to="/" className={cn(s.logo, "d-fl")}>
        <div className={s.img}>
          <img src={logo} alt="Логотип - Спектр" />
        </div>
        <span className={s.title}>спектр</span>
      </Link>
    </>
  );
};

export { Logo };
