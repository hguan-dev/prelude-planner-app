import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FileIcon = ({style, size}) => (
  <Svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <Path
        d="M18.66 4.25h-5.91c-2.671 0-4.007 0-4.837.83-.83.83-.83 2.165-.83 4.837v14.166c0 2.672 0 4.007.83 4.837.83.83 2.166.83 4.837.83h8.5c2.671 0 4.007 0 4.837-.83.83-.83.83-2.165.83-4.837V12.507c0-.58 0-.869-.108-1.129s-.313-.465-.722-.874L20.663 5.08c-.41-.41-.614-.614-.874-.722-.26-.108-.55-.108-1.13-.108z"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M12.75 18.417h8.5M12.75 24.083h5.667"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M18.417 4.25v5.667c0 1.335 0 2.003.415 2.418.415.415 1.082.415 2.418.415h5.667"
        stroke="#fff"
        strokeWidth={2}
      />
    </Svg>
)
export default FileIcon
