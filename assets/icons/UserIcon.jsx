import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"

const UserIcon = ({style, size}) => (
  <Svg
  width={size}
  height={size}
  viewBox="0 0 34 34"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={style}
>
  <Path
    d="M27.947 28.967c-.645-1.808-2.068-3.405-4.048-4.544-1.979-1.139-4.404-1.756-6.899-1.756s-4.92.617-6.9 1.756c-1.979 1.14-3.401 2.736-4.047 4.544"
    stroke="#fff"
    strokeWidth={2}
    strokeLinecap="round"
  />
  <Ellipse
    cx={16.9999}
    cy={11.3334}
    rx={5.66667}
    ry={5.66667}
    stroke="#fff"
    strokeWidth={2}
    strokeLinecap="round"
  />
</Svg>
)
export default UserIcon
