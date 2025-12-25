import React from "react";

const BgBox = ({ ...rest }) => {
  return (
    <div {...rest}>
      <svg
        width="275"
        height="275"
        viewBox="0 0 275 275"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_14_19)">
          <rect
            x="271"
            y="4"
            width="267"
            height="267"
            transform="rotate(90 271 4)"
            fill="url(#paint0_linear_14_19)"
            fillOpacity="0.15"
          />
          <rect
            x="270.5"
            y="4.5"
            width="266"
            height="266"
            transform="rotate(90 270.5 4.5)"
            stroke="url(#paint1_linear_14_19)"
            strokeOpacity="0.15"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_14_19"
            x="0"
            y="0"
            width="275"
            height="275"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_14_19"
            />
          </filter>
          <linearGradient
            id="paint0_linear_14_19"
            x1="271"
            y1="137.5"
            x2="538"
            y2="137.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1B3575" />
            <stop offset="1" stopColor="#121B32" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_14_19"
            x1="271"
            y1="137.5"
            x2="538"
            y2="137.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#121B32" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BgBox;
