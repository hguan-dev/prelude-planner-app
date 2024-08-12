import React from "react"
import Svg, { Path } from "react-native-svg"

const AddIcon = ({ style, size}) => (

<Svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style = {style}
>
    <Path
    d="M13 6.5v13M19.5 13h-13"
    stroke="#fff"
    strokeWidth={3}
    strokeLinecap="square"
    strokeLinejoin="round"
    />
</Svg>
);

export default AddIcon
