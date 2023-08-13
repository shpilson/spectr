import s from "./ButtonMenu.module.scss";
import cn from "classnames";
import { useState } from "react";
import close from "./assets/images/icon/close.svg";
import { Link } from "react-scroll";
import { ButtonTheme } from "../ButtonTheme/ButtonTheme";
import { ButtonLanguage } from "../ButtonLanguage/ButtonLanguage";
import Media from "react-media";

const ButtonMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const bodyNoScroll = () => {
    let bodyScroll = document.querySelector("body");
    if (menuActive) {
      bodyScroll.classList.add("none");
    } else {
      bodyScroll.classList.remove("none");
    }
  };
  bodyNoScroll();

  // делаем 100vh на телефоне
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <>
      <div
        onClick={() => {
          setMenuActive(true);
        }}
        className={cn(s.menu, "d-fl-col")}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={cn(s.menuBurger, `${menuActive ? s.animated : " "}`)}>
        <div className={cn(s.container, "menu__container d-fl-col")}>
          <div className={cn(s.wrapper, "d-fl-col")}>
            <div
              className={cn(s.imgClose)}
              onClick={() => {
                setMenuActive(false);
              }}
            >
              <svg
                width="56"
                height="40"
                viewBox="0 0 56 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className={s.rect1}
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="39"
                  rx="19.5"
                />
                <g clip-path="url(#clip0_1021_10170)">
                  <g clip-path="url(#clip1_1021_10170)">
                    <path
                      className={s.stroke1}
                      d="M21.6367 26.364L34.3646 13.6361"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      className={s.stroke2}
                      d="M34.3643 26.364L21.6363 13.6361"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
                <rect
                  className={s.rect2}
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="39"
                  rx="19.5"
                />
                <defs>
                  <clipPath id="clip0_1021_10170">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(16 8)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1021_10170">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(16 8)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className={cn(s.wrapperContent, "d-fl-col")}>
              <nav className={cn(s.navigation, "d-fl-col")}>
                <ul className={cn(s.list, "d-fl-col")}>
                  <li>
                    <Link
                      className={s.link}
                      to="about"
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => {
                        setMenuActive(false);
                      }}
                    >
                      О нас
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={s.link}
                      to="services"
                      smooth={true}
                      offset={-200}
                      duration={500}
                      onClick={() => {
                        setMenuActive(false);
                      }}
                    >
                      Услуги
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={s.link}
                      to="experience"
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => {
                        setMenuActive(false);
                      }}
                    >
                      Опыт
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={s.link}
                      to="seminar"
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => {
                        setMenuActive(false);
                      }}
                    >
                      Семинары
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={s.link}
                      to="faq"
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => {
                        setMenuActive(false);
                      }}
                    >
                      Частые вопросы
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={s.link}
                      to="contact"
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => {
                        setMenuActive(false);
                      }}
                    >
                      Контакты
                    </Link>
                  </li>
                </ul>
              </nav>

              <Media
                query="(max-width: 1000px)"
                render={() => (
                  <div className={cn(s.switchButton, "d-fl")}>
                    <ButtonTheme />

                    <Media
                      query="(max-width: 768px)"
                      render={() => <ButtonLanguage />}
                    />
                  </div>
                )}
              />
            </div>

            <button className={cn(s.contact, "button__animation")}>
              <Link
                onClick={() => {
                  setMenuActive(false);
                }}
                to="contact"
                smooth={true}
                offset={-150}
                duration={500}
                className={s.linkButton}
              >
                Связаться
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ButtonMenu };
