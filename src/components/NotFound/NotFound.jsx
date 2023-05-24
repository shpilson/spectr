import React from "react";
import s from "./NotFound.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={cn(s.notFound, "notFound__container d-fl-col")}>
      <span className={s.number}>404</span>
      <span className={s.text}>Упс. Ошибка.</span>

      <div className={cn(s.triangleAbsoluteTop)}>
        <svg
          width="673"
          height="576"
          viewBox="0 0 673 576"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M585.124 275.098L264.02 478.545L355.562 109.603L585.124 275.098Z"
            stroke="#171717"
          />
          <path
            opacity="0.8"
            d="M221.719 479.635L313.739 108.765L544.501 275.125L221.719 479.635Z"
            fill="url(#paint0_linear_1160_3352)"
          />
          <path
            opacity="0.8"
            d="M180.207 479.635L272.228 108.765L502.989 275.125L180.207 479.635Z"
            fill="url(#paint1_linear_1160_3352)"
          />
          <path
            opacity="0.8"
            d="M133.231 479.635L225.251 108.765L456.013 275.125L133.231 479.635Z"
            fill="url(#paint2_linear_1160_3352)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1160_3352"
              x1="221.719"
              y1="479.635"
              x2="408.636"
              y2="220.359"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D3ADAD" />
              <stop offset="1" stop-color="#FFEDAD" stop-opacity="0.22" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1160_3352"
              x1="180.207"
              y1="479.635"
              x2="367.124"
              y2="220.359"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B7ADD3" />
              <stop offset="1" stop-color="#FFADAD" stop-opacity="0.22" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1160_3352"
              x1="133.231"
              y1="479.635"
              x2="373.241"
              y2="175.784"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D3CFAD" />
              <stop offset="1" stop-color="#ADFFC4" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={cn(s.triangleAbsoluteBottom)}>
        <svg
          width="627"
          height="588"
          viewBox="0 0 627 588"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M138.344 232.44L416.901 182.405L250.111 411.05L138.344 232.44Z"
            stroke="#171717"
          />
          <path
            opacity="0.8"
            d="M446.716 193.379L278.756 423.629L166.204 243.765L446.716 193.379Z"
            fill="url(#paint0_linear_1160_3357)"
          />
          <path
            opacity="0.8"
            d="M475.387 205.066L307.427 435.316L194.875 255.452L475.387 205.066Z"
            fill="url(#paint1_linear_1160_3357)"
          />
          <path
            opacity="0.8"
            d="M507.832 218.29L339.872 448.54L227.321 268.676L507.832 218.29Z"
            fill="url(#paint2_linear_1160_3357)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1160_3357"
              x1="446.716"
              y1="193.379"
              x2="244.627"
              y2="319.838"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D3ADAD" />
              <stop offset="1" stop-color="#FFEDAD" stop-opacity="0.22" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1160_3357"
              x1="475.387"
              y1="205.066"
              x2="273.298"
              y2="331.526"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B7ADD3" />
              <stop offset="1" stop-color="#FFADAD" stop-opacity="0.22" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1160_3357"
              x1="507.832"
              y1="218.29"
              x2="256.524"
              y2="360.59"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D3CFAD" />
              <stop offset="1" stop-color="#ADFFC4" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Link className={cn(s.link, "button__animation")} to="/">
        <span>На главную</span>
      </Link>
    </div>
  );
};

export { NotFound };
