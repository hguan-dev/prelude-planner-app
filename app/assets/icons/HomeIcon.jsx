import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ size = 24 }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="white"
    width={size}
    height={size}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </Svg>
);

export default HomeIcon;
