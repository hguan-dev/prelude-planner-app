import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const TimeIcon = ({style, size}) => (
  <Svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <Circle cx={17.0001} cy={17} r={12.3333} stroke="#fff" strokeWidth={2} />
      <Path
        d="M23.375 17H17.25a.25.25 0 01-.25-.25v-4.708"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
  </Svg>
)
export default TimeIcon
