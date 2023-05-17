import s from "./Header.module.scss";
import cn from "classnames";
import React from "react";
import { Logo } from "../Logo/Logo";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { ButtonTheme } from "../ButtonTheme/ButtonTheme";
import { ButtonLanguage } from "../ButtonLanguage/ButtonLanguage";
import { motion } from "framer-motion";

const headerAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
    ease: "easeOut",
  },
  visible: (custom) => ({
    y: 0,
    ease: "easeOut",
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};

const Header = () => {
  return (
    <>
      <motion.header
        className={cn(s.header)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className={cn(s.wrapper, "d-fl")}
          variants={headerAnimation}
          custom={2}
        >
          <Logo />
          <NavigationMenu />
          <div className={cn(s.switchButton, "d-fl")}>
            <ButtonTheme />
            <ButtonLanguage />
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export { Header };
