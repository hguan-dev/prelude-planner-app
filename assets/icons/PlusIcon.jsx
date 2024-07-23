import React from "react";
import Svg, { Path, Defs, Filter, FeFlood, FeGaussianBlur, FeComposite, FeColorMatrix, FeOffset, FeBlend } from "react-native-svg";

const PlusIcon = ({ size = 24 }) => (
  <Svg 
        width={size} height={size} viewBox="0 0 148 156" fill="none">
    <Defs>
      <Filter id="filter0_bdi_302_912" x="-59.7749" y="-54.453" width="267.55" height="274.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <FeFlood flood-opacity="0" result="BackgroundImageFix" />
        <FeGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
        <FeComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_302_912" />
        <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <FeOffset dy="-5" />
        <FeGaussianBlur stdDeviation="20" />
        <FeComposite in2="hardAlpha" operator="out" />
        <FeColorMatrix type="matrix" values="0 0 0 0 0.160784 0 0 0 0 0.152941 0 0 0 0 0.509804 0 0 0 0.1 0" />
        <FeBlend mode="normal" in2="effect1_backgroundBlur_302_912" result="effect2_dropShadow_302_912" />
        <FeBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_302_912" result="shape" />
        <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <FeOffset dy="1" />
        <FeGaussianBlur stdDeviation="0.25" />
        <FeComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <FeColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
        <FeBlend mode="overlay" in2="shape" result="effect3_innerShadow_302_912" />
      </Filter>
    </Defs>
    <G filter="url(#filter0_bdi_302_912)">
      <Path
        d="M69 46.8868C72.094 45.1004 75.906 45.1004 79 46.8868L102.775 60.6132C105.869 62.3996 107.775 65.7008 107.775 69.2735V96.7265C107.775 100.299 105.869 103.6 102.775 105.387L79 119.113C75.906 120.9 72.094 120.9 69 119.113L45.225 105.387C42.131 103.6 40.225 100.299 40.225 96.7265V69.2735C40.225 65.7008 42.131 62.3996 45.225 60.6132L69 46.8868Z"
        fill="white"/>
    </G>
    </Svg>
);   

export default PlusIcon;