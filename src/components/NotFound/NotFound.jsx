import React from "react";
import s from "./NotFound.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={cn(s.notFound, "notFound__container d-fl-col")}>
      <span className={s.number}>404</span>
      <span className={s.text}>Упс. Ошибка.</span>

      <Link className={cn(s.link, "button__animation")} to="/">
        <span>На главную</span>
      </Link>
    </div>
  );
};

export { NotFound };
