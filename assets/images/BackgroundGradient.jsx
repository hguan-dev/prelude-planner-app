import React from "react";
import Svg, { Path } from "react-native-svg";

const BackgroundGradient = ({ style, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="390"
    height="615"
    viewBox="0 0 390 615"
    fill="none"
  >
    <g filter="url(#filter0_f_127_1852)">
      <circle
        cx="207.5"
        cy="307.5"
        r="107.5"
        fill="url(#paint0_linear_127_1852)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_127_1852"
        x="-100"
        y="0"
        width="615"
        height="615"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="100"
          result="effect1_foregroundBlur_127_1852"
        />
      </filter>
      <linearGradient
        id="paint0_linear_127_1852"
        x1="207.5"
        y1="200"
        x2="207.5"
        y2="415"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0C445B" />
        <stop offset="1" stop-color="#1A8FC1" />
      </linearGradient>
    </defs>
  </svg>
);

export default BackgroundGradient;
