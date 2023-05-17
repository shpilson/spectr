import React from "react";
import s from "./NotFound.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound__container">
      <p>
        Простите, по вашему запросу <br /> ничего не надено.
      </p>

      <Link to="/">На главную</Link>
    </div>
  );
};

export { NotFound };
