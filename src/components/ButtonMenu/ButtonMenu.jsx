import s from "./ButtonMenu.module.scss";
import cn from "classnames";
import React from "react";

const ButtonMenu = () => {
  return (
    <>
      <div className={cn(s.menu, "d-fl-col")}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export { ButtonMenu };
