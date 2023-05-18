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

const ContactSection = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  return (
    <div className={cn(s.contactSection)} id="contact">
      <div className="d-fl-col contactSection__container">
        <div ref={ref} className="titleIcon">
          <h2 className="title">Контакты</h2>
          <motion.span style={{ y }} className="iconTriangle">
            <img src={titleIcon} alt="иконка треугольника" />
          </motion.span>
        </div>
        <div className={s.grid}>
          <div className={cn(s.contactLeft, "d-fl-col")}>
            <Link className={s.link} to="tel:+88005553535">
              8(800)555-35-35
            </Link>
            <Link className={s.link} to="mailto:sales@spectr.ru">
              sales@spectr.ru
            </Link>
          </div>
          <div className={cn(s.contactFrom, "d-fl-col")}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactSection };
