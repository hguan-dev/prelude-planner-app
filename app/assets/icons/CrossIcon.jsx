import React from "react";
import Svg, { Path } from "react-native-svg";

const CrossIcon = ({ style, size }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style = {style}
    
  >
    <Path
      stroke="#fff"
      strokeWidth={3}
      d="M2.06066 1.93934L15.8161 15.6948"
    />
    <Path
      stroke="#fff"
      strokeWidth={3}
      d="M1.93934 15.6947L15.6948 1.93928"
    />
  </Svg>
);

export default CrossIcon
