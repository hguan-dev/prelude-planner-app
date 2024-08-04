import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const UserIcon = ({style, size}) => (
  <Svg
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M27.947 28.967c-.645-1.808-2.068-3.405-4.048-4.544-1.979-1.139-4.404-1.756-6.899-1.756s-4.92.617-6.9 1.756c-1.979 1.14-3.401 2.736-4.047 4.544"
    />
    <Circle
      cx={17}
      cy={11.333}
      r={5.667}
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </Svg>
)
export default UserIcon
