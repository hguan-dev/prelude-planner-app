import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const TimeIcon = ({style, size}) => (
  <Svg
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Circle cx={17} cy={17} r={12.333} stroke="#fff" strokeWidth={2} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M23.375 17H17.25a.25.25 0 0 1-.25-.25v-4.708"
    />
  </Svg>
)
export default TimeIcon
