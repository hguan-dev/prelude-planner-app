import React from "react";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";

const RadialGradientCircle = ({ stop1, stop2 }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMinYMin slice"
    >
      <Defs>
        <RadialGradient
          id="custom_grad"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor={stop1} />
          <Stop offset="100%" stopColor={stop2} />
        </RadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100" height="100" fill="url(#custom_grad)" />
    </Svg>
  );
};

export default RadialGradientCircle;
