import React, { useRef } from "react";
import s from "./ContactSection.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import titleIcon from "./assets/images/photo/titleIcon.svg";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";

const titleAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};

const blockAnimationLeft = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};
const blockAnimationRight = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.3 },
  }),
};

const ContactSection = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  return (
    <motion.div
      className={cn(s.contactSection)}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="d-fl-col contactSection__container">
        <div ref={ref} className="titleIcon">
          <motion.h2 className="title" variants={titleAnimation} custom={2}>
            Контакты
          </motion.h2>
          <motion.span style={{ y }} className="iconTriangle">
            <img src={titleIcon} alt="иконка треугольника" />
          </motion.span>
        </div>
        <div className={s.grid}>
          <motion.div
            className={cn(s.contactLeft, "d-fl-col")}
            variants={blockAnimationLeft}
            custom={4}
          >
            <Link className={s.link} to="tel:+88005553535">
              8(800)555-35-35
            </Link>
            <Link className={s.link} to="mailto:sales@spectr.ru">
              sales@spectr.ru
            </Link>
          </motion.div>
          <motion.div
            className={cn(s.contactFrom, "d-fl-col")}
            variants={blockAnimationRight}
            custom={4}
          >
            <p className={s.formText}>
              Оставьте заявку и наш менеджер свяжется с вами в ближайшее время
            </p>
            <form className={cn(s.form, "d-fl-col")}>
              <div className={s.item}>
                <input
                  type="text"
                  className={s.input}
                  name="name"
                  id="name"
                  required=""
                  autocomplete="off"
                  placeholder=" "
                />
                <label htmlFor="name" className={s.label}>
                  ФИО
                </label>
              </div>

              <div className={s.item}>
                <input
                  type="text"
                  className={s.input}
                  name="company"
                  id="company"
                  autocomplete="off"
                  placeholder=" "
                />
                <label htmlFor="company" className={s.label}>
                  Название компании
                </label>
              </div>

              <div className={s.item}>
                <input
                  type="tel"
                  className={s.input}
                  name="phone"
                  id="phone"
                  required=""
                  autocomplete="off"
                  placeholder=" "
                />
                <label htmlFor="phone" className={s.label}>
                  Телефон
                </label>
              </div>

              <div className={s.item}>
                <input
                  type="email"
                  className={s.input}
                  name="email"
                  id="email"
                  required=""
                  autocomplete="off"
                  placeholder=" "
                />
                <label htmlFor="email" className={s.label}>
                  Элекронный адрес
                </label>
              </div>

              <div className={s.item}>
                <textarea
                  type="text"
                  className={cn(s.textarea, s.input)}
                  name="message"
                  id="message"
                  autocomplete="off"
                  placeholder=" "
                />
                <label htmlFor="message" className={s.label}>
                  Сообщение
                </label>
              </div>

              <button className={cn(s.sendButton, "button__animation")}>
                <span>Связаться</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export { ContactSection };
