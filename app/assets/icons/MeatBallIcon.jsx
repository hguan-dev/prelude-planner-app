import React from "react";
import Svg, { Ellipse } from "react-native-svg";

const MeatBallIcon = ({ style, size }) => (
    <Svg
      width={size}
      height={size + 2}
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style = {style}
    >
      <Ellipse
        cx={15}
        cy={16}
        rx={1.25}
        ry={1.33333}
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Ellipse
        cx={7.5}
        cy={16}
        rx={1.25}
        ry={1.33333}
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Ellipse
        cx={22.5}
        cy={16}
        rx={1.25}
        ry={1.33333}
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
);

export default MeatBallIcon
