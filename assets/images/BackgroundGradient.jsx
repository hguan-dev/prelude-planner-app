import React from "react";
import Svg, { Defs, LinearGradient, Stop, Circle } from "react-native-svg";
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
          <LinearGradient
            id="paint0_linear_127_1852"
            x1="207.5"
            y1="200"
            x2="207.5"
            y2="415"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stop-color="#0C445B" />
            <Stop offset="1" stop-color="#1A8FC1" />
          </LinearGradient>
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
