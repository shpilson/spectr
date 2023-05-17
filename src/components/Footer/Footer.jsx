import s from "./Footer.module.scss";
import cn from "classnames";
import React from "react";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="footer__container">
        <hr className={s.line} />
        <div className={cn(s.wrapper, "d-fl-wrap")}>
          <span>АНО/OOO «Спектр»</span>
          <span>Copyright 2023 © Спектр</span>
          <span>Design by NoName</span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
