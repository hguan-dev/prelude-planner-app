import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const CategoryIcon = ({ color = "#fff", size = 24 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x={3}
        y={3}
        width={7}
        height={7}
        rx={1}
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <Rect
        x={3}
        y={14}
        width={7}
        height={7}
        rx={1}
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <Rect
        x={14}
        y={3}
        width={7}
        height={7}
        rx={1}
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <Rect
        x={14}
        y={14}
        width={7}
        height={7}
        rx={1}
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default CategoryIcon;
