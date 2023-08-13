import React from "react";
import s from "./Slide.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import Media from "react-media";

const Slide = ({ title, download, description }) => {
  return (
    <div className={cn(s.slide, "d-fl-col")}>
      <Media
        query="(min-width: 769px)"
        render={() => <h5 className={s.title}>{title}</h5>}
      />

      <Media
        query="(max-width: 768px)"
        render={() => (
          <h5 className={s.title}>
            {title.length >= 62 ? title.substr(0, 62) + "..." : title}
          </h5>
        )}
      />

      <Media
        query="(min-width: 769px)"
        render={() => (
          <p className={s.description}>
            {description.length >= 151
              ? description.substr(0, 151) + "..."
              : description}
          </p>
        )}
      />

      <Media
        query="(max-width: 768px)"
        render={() => (
          <p className={s.description}>
            {description.length >= 131
              ? description.substr(0, 131) + "..."
              : description}
          </p>
        )}
      />

      <Link to="/README.md" target="_blank" download="" className={s.link}>
        Скачать
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.75 11.2501C3.55109 11.2501 3.36032 11.3291 3.21967 11.4697C3.07902 11.6104 3 11.8011 3 12.0001C3 12.199 3.07902 12.3897 3.21967 12.5304C3.36032 12.671 3.55109 12.7501 3.75 12.7501H18.2955L12.249 18.1921C12.174 18.2574 12.1127 18.3369 12.0687 18.4261C12.0247 18.5154 11.9989 18.6124 11.9928 18.7117C11.9867 18.811 12.0004 18.9105 12.0331 19.0044C12.0658 19.0984 12.1168 19.1849 12.1833 19.2589C12.2497 19.3329 12.3303 19.3929 12.4201 19.4355C12.51 19.4781 12.6075 19.5024 12.7068 19.507C12.8062 19.5116 12.9055 19.4964 12.9989 19.4622C13.0923 19.428 13.178 19.3756 13.251 19.3081L20.751 12.5581C20.8293 12.4877 20.892 12.4017 20.9348 12.3055C20.9777 12.2094 20.9999 12.1053 20.9999 12.0001C20.9999 11.8948 20.9777 11.7907 20.9348 11.6946C20.892 11.5984 20.8293 11.5124 20.751 11.4421L13.251 4.69205C13.1025 4.56279 12.9091 4.49713 12.7125 4.50923C12.516 4.52134 12.3321 4.61024 12.2006 4.75675C12.069 4.90326 12.0004 5.09563 12.0094 5.29232C12.0185 5.48901 12.1045 5.67425 12.249 5.80805L18.2955 11.2501H3.75Z" />
        </svg>
      </Link>
    </div>
  );
};

export { Slide };
