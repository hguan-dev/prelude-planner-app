import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import NotificationItem from "../components/NotificationItem";
import { FontFamily, Color, Padding, Border } from "../GlobalStyles";

const NotificationScreen = () => {
  return (
    <View style={[styles.notificationScreen, styles.listShadowBox]}>
      <Image
        style={styles.notificationScreenChild}
        contentFit="cover"
        source={require("../assets/images/ellipse-background.png")}
      />
      <View style={styles.leftAccessory}>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <View style={[styles.list, styles.listShadowBox]}>
        <NotificationItem
          title={`<description>`}
          propTop={-330}
          propLeft={22}
        />
        <NotificationItem
          title={`<description>`}
          propTop={-250}
          propLeft={22}
        />
        <NotificationItem
          title={`<description>`}
          propTop={-170}
          propLeft={22}
        />
        <NotificationItem
          title={`<description>`}
          propTop={-90}
          propLeft={22}
        />
        <NotificationItem
          title={`<description>`}
          propTop={-10}
          propLeft={23}
        />
        <NotificationItem
          title={`<descriptionthatisverylongdescriptionthatisveryl...>`}
          propTop={70}
          propLeft={22}
        />
        <NotificationItem
          title={`<descriptionthatisverylongdescriptionthatisveryl...>`}
          propTop={150}
          propLeft={22}
        />
      </View>
      <Image
        style={styles.addIcon}
        contentFit="cover"
        source={require("../assets/images/add.png")}
      />
      <Image
        style={styles.crossIcon}
        contentFit="cover"
        source={require("../assets/images/cross.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 40,
    },
  },
  notificationScreenChild: {
    top: 344,
    left: 101,
    width: 215,
    height: 215,
    position: "absolute",
  },
  title: {
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 30,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    display: "flex",
    width: 204,
    height: 36,
    alignItems: "center",
  },
  leftAccessory: {
    top: 58,
    left: 34,
    width: 175,
    height: 72,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    alignItems: "center",
    position: "absolute",
  },
  list: {
    marginLeft: -195,
    top: 470,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 390,
    height: 790,
    position: "absolute",
  },
  addIcon: {
    top: 83,
    left: 312,
    width: 26,
    height: 26,
    position: "absolute",
  },
  crossIcon: {
    top: 87,
    left: 350,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  notificationScreen: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 80,
    elevation: 80,
    borderRadius: Border.br_31xl,
    backgroundColor: "#211134",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default NotificationScreen;
