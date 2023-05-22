import s from "./ButtonLanguage.module.scss";
import cn from "classnames";
import React from "react";

const ButtonLanguage = () => {
  return (
    <>
      <>
        <div className={cn(s.language, "button__animation d-fl")}>
          <input
            type="checkbox"
            className={s.customCheckbox}
            id="language"
            name="language"
            value="yes"
          ></input>
          <label htmlFor="language"></label>
        </div>
      </>
    </>
  );
};

export { ButtonLanguage };
