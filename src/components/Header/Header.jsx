import s from "./Header.module.scss";
import cn from "classnames";
import React from "react";
import { Logo } from "../Logo/Logo";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { ButtonTheme } from "../ButtonTheme/ButtonTheme";
import { ButtonLanguage } from "../ButtonLanguage/ButtonLanguage";

const Header = () => {
  return (
    <>
      <header className={cn(s.header)}>
        <div className={cn(s.wrapper, "d-fl")}>
          <Logo />
          <NavigationMenu />
          <div className={cn(s.switchButton, "d-fl")}>
            <ButtonTheme />
            <ButtonLanguage />
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
