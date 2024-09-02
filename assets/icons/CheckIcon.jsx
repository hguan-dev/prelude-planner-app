import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckIcon = ({ style, size }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={style}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="m5 14 3.233 2.425a1 1 0 0 0 1.374-.167L18 6"
    />
  </Svg>
);
export default CheckIcon;
