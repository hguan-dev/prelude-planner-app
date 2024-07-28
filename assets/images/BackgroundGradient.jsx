import React from "react";
import Svg, { Defs, RadialGradient, Stop, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";

const RadialGradientCircle = () => {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="390"
        height="615"
        viewBox="0 0 390 615"
        fill="none"
      >
        <Defs>
          <RadialGradient
            id="paint0_linear_127_1852"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
            gradientUnits="objectBoundingBox"
          > 
            <Stop offset="0%" stopColor="#0C445B" />
            <Stop offset="100%" stopColor="#211134" /> 
          </RadialGradient>
        </Defs>
        <Circle
          cx="207.5"
          cy="307.5"
          r="107.5"
          fill="url(#paint0_linear_127_1852)"
        />
      </Svg>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RadialGradientCircle;
