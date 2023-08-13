import s from "./ButtonTheme.module.scss";
import cn from "classnames";
import React from "react";
import { useState, useEffect } from "react";

const ButtonTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || "light"
  ); // state темы

  // функция для смены темы
  const toggleTheme = (event) => {
    setTheme(theme === "light" ? "dark" : "light"); // меняем state
    console.log("dsd");
  };

  useEffect(() => {
    const backgroundColor = `var(--background-color-${theme})`;
    const fontColor = `var(--font-color-${theme})`;
    const strokeColorPainted = `var(--stroke-colorPainted-${theme})`;
    const strokeColor = `var(--stroke-color-${theme})`;
    const letterColor = `var(--letter-color-${theme})`;
    const gradientTriangle = `var(--gradient-triangle-${theme})`;
    const arrowPrev = `var(--background-arrowPrev-${theme})`;
    const arrowNext = `var(--background-arrowNext-${theme})`;
    const arrow = `var(--background-arrow-${theme})`;

    document.body.style.setProperty("--background-color", backgroundColor);
    document.body.style.setProperty("--font-color", fontColor);
    document.body.style.setProperty("--stroke-color", strokeColor);
    document.body.style.setProperty("--letter-color", letterColor);
    document.body.style.setProperty("--gradient-triangle", gradientTriangle);
    document.body.style.setProperty("--background-arrowPrev", arrowPrev);
    document.body.style.setProperty("--background-arrowNext", arrowNext);
    document.body.style.setProperty("--background-arrow", arrow);
    document.body.style.setProperty(
      "--stroke-colorPainted",
      strokeColorPainted
    );

    localStorage.setItem("app-theme", theme);
    document.body.setAttribute("data-theme", `${theme}`);
  }, [theme]);

  useEffect(() => {
    let bodyTheme = document.body;
    let themeCheckbox = document.querySelector(".customCheckbox");

    if (bodyTheme.getAttribute("data-theme") === "dark") {
      themeCheckbox.checked = true;
    } else {
      themeCheckbox.checked = false;
    }
  }, [theme]);

  return (
    <div
      className={cn(s.theme, "button__animation d-fl")}
      onChange={toggleTheme}
    >
      <input
        type="checkbox"
        className={cn(s.customCheckbox, "customCheckbox")}
        id="theme"
        name="theme"
        value="yes"
      ></input>
      <label htmlFor="theme"></label>
    </div>
  );
};

export { ButtonTheme };
