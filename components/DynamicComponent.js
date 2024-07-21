import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import BottomNav from "./BottomNav";

const DynamicComponent = () => {
  return (
    <View style={styles.tabbarParent}>
      <BottomNav />
      <Image
        style={styles.dateFillIcon}
        contentFit="cover"
        source={require("../assets/date-fill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateFillIcon: {
    width: 27,
    height: 27,
    marginLeft: -261,
  },
  tabbarParent: {
    width: 390,
    height: 136,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -231,
  },
});

export default DynamicComponent;
