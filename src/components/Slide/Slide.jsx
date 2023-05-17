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
      </Link>
    </div>
  );
};

export { Slide };
