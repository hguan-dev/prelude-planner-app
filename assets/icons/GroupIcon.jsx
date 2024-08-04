import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GroupIcon = ({style, size}) => (
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
      d="M27 14.667a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    />
    <Path
      stroke="#fff"
      d="M24.88 11.708a4.083 4.083 0 1 1 1.495 5.578M19.12 11.708a4.083 4.083 0 1 0-1.495 5.578"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      d="M22 22.917c8.212 0 9.736 7.295 10.019 10.003.057.55-.383.997-.936.997H12.917c-.553 0-.993-.447-.936-.997.283-2.708 1.808-10.003 10.02-10.003Z"
    />
    <Path
      fill="#fff"
      d="m35.577 29.16-.49.097.49-.096Zm-11.584-6.086-.37-.337-.62.68.908.15.082-.493Zm7.506 7.176-.48.139.104.361h.376v-.5Zm-3.082-8.667c2.293 0 3.826 1.273 4.87 2.898 1.05 1.638 1.566 3.585 1.8 4.776l.98-.193c-.242-1.238-.788-3.33-1.939-5.123-1.159-1.806-2.968-3.358-5.711-3.358v1Zm-4.055 1.828c.982-1.075 2.288-1.828 4.055-1.828v-1c-2.095 0-3.656.908-4.793 2.154l.738.674Zm-.451.156c4.447.74 6.313 4.077 7.108 6.822l.96-.278c-.843-2.915-2.908-6.7-7.904-7.53l-.164.986Zm10.734 6.183h-3.146v1h3.146v-1Zm.441-.493c.049.245-.137.493-.441.493v1c.879 0 1.602-.77 1.423-1.686l-.982.193ZM20.007 23.074l.082.493.908-.15-.62-.68-.37.337ZM8.423 29.161l-.49-.097.49.097ZM12.5 30.25v.5h.376l.104-.361-.48-.139Zm3.082-8.667c1.768 0 3.073.753 4.055 1.828l.738-.674c-1.137-1.246-2.698-2.154-4.793-2.154v1Zm-6.67 7.674c.234-1.19.75-3.138 1.8-4.776 1.044-1.626 2.577-2.898 4.87-2.898v-1c-2.743 0-4.552 1.552-5.711 3.358-1.151 1.794-1.697 3.885-1.94 5.123l.981.193Zm.442.493c-.304 0-.49-.248-.442-.493l-.98-.193c-.18.916.543 1.686 1.422 1.686v-1Zm3.146 0H9.355v1h3.146v-1Zm.48.639c.794-2.745 2.662-6.083 7.108-6.822l-.164-.986c-4.996.83-7.061 4.615-7.904 7.53l.96.278Z"
    />
  </Svg>
)
export default GroupIcon
