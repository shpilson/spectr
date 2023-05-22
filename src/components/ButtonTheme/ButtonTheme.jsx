import s from "./ButtonTheme.module.scss";
import cn from "classnames";
import React from "react";

const ButtonTheme = () => {
  return (
    <>
      <div className={cn(s.theme, "button__animation d-fl")}>
        <input
          type="checkbox"
          className={s.customCheckbox}
          id="theme"
          name="theme"
          value="yes"
        ></input>
        <label htmlFor="theme"></label>
      </div>
    </>
  );
};

export { ButtonTheme };
