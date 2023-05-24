import React, { useRef } from "react";
import s from "./ContactSection.module.scss";
import cn from "classnames";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
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
  let y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uck7ezm",
        "template_yeokx4m",
        form.current,
        "cmw3Gi7A-4PvMA-7b"
      )
      .then(
        () => {
          Swal.fire({
            title: "Спасибо! Ваша заявка принята.",
            text: "Наш менеджер свяжется с Вами в ближайее время.",
            icon: "success",
            background: "white",
            allowEnterKey: false,
            confirmButtonColor: "#ffffff",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
            <form
              ref={form}
              className={cn(s.form, "d-fl-col")}
              onSubmit={sendEmail}
            >
              <div className={s.item}>
                <input
                  type="text"
                  className={s.input}
                  name="name"
                  id="name"
                  required=""
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor="message" className={s.label}>
                  Сообщение
                </label>
              </div>
              {/* <input
                type="submit"
                value="Связаться"
                className={cn(s.sendButton, "button__animation")}
              /> */}
              <button
                type="submit"
                className={cn(s.sendButton, "button__animation")}
              >
                <span>Связаться</span>
              </button>
            </form>
          </motion.div>

          <div ref={ref} className={s.triangleBackground}>
            <motion.svg
              style={{ y }}
              width="548"
              height="588"
              viewBox="0 0 548 588"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M59.3408 232.439L337.898 182.404L171.108 411.05L59.3408 232.439Z"
                stroke="#171717"
              />
              <path
                opacity="0.8"
                d="M367.712 193.378L199.752 423.627L87.2006 243.763L367.712 193.378Z"
                fill="url(#paint0_linear_847_1402)"
              />
              <path
                opacity="0.8"
                d="M396.384 205.065L228.424 435.315L115.873 255.451L396.384 205.065Z"
                fill="url(#paint1_linear_847_1402)"
              />
              <path
                opacity="0.8"
                d="M428.83 218.288L260.87 448.537L148.318 268.674L428.83 218.288Z"
                fill="url(#paint2_linear_847_1402)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_847_1402"
                  x1="367.712"
                  y1="193.378"
                  x2="165.623"
                  y2="319.837"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D3ADAD" />
                  <stop offset="1" stopColor="#FFEDAD" stopOpacity="0.22" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_847_1402"
                  x1="396.384"
                  y1="205.065"
                  x2="194.295"
                  y2="331.524"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B7ADD3" />
                  <stop offset="1" stopColor="#FFADAD" stopOpacity="0.22" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_847_1402"
                  x1="428.83"
                  y1="218.288"
                  x2="177.522"
                  y2="360.587"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D3CFAD" />
                  <stop offset="1" stopColor="#ADFFC4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { ContactSection };
