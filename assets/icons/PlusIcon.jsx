import React from "react";
import Svg, { Path, G, Defs, Filter, FeFlood, FeGaussianBlur, FeComposite, FeColorMatrix, FeOffset, FeBlend } from "react-native-svg";

const PlusIcon = ({ size = 24, hexagonColor="#713FA2", plusColor="white" }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 148 156"
    fill="none"
  >
    <G filter="url(#filter0_bdi_302_912)">
      <Path d="M69 46.8868C72.094 45.1004 75.906 45.1004 79 46.8868L102.775 60.6132C105.869 62.3996 107.775 65.7008 107.775 69.2735V96.7265C107.775 100.299 105.869 103.6 102.775 105.387L79 119.113C75.906 120.9 72.094 120.9 69 119.113L45.225 105.387C42.131 103.6 40.225 100.299 40.225 96.7265V69.2735C40.225 65.7008 42.131 62.3996 45.225 60.6132L69 46.8868Z" fill={hexagonColor} fillOpacity="0.5" style={{ mixBlendMode: 'overlay' }} shapeRendering="crispEdges"/>
    </G>
    <Path d="M61.4316 83.4238C61.4316 84.6543 62.4277 85.6504 63.6582 85.6504H71.7881V93.7803C71.7881 94.9961 72.7695 96.0068 74 96.0068C75.2305 96.0068 76.2266 94.9961 76.2266 93.7803V85.6504H84.3564C85.5723 85.6504 86.5684 84.6543 86.5684 83.4238C86.5684 82.208 85.5723 81.2119 84.3564 81.2119H76.2266V73.082C76.2266 71.8662 75.2305 70.8555 74 70.8555C72.7695 70.8555 71.7881 71.8662 71.7881 73.082V81.2119H63.6582C62.4277 81.2119 61.4316 82.208 61.4316 83.4238Z" fill={plusColor}/>
  </Svg>
);

export default PlusIcon;
