import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import NotificationItem from "../components/NotificationItem";
import { Color, FontFamily, Padding, Border } from "../GlobalStyles";

const NotificationScreen = () => {
  return (
    <View style={[styles.notificationScreen, styles.listShadowBox]}>
      <Image
        style={styles.notificationScreenChild}
        contentFit="cover"
        source={require("../assets/images/ellipse-background.png")}
      />
      <View style={styles.leftAccessory}>
        <Text style={[styles.title, styles.textClr]}>Notifications</Text>
      </View>
      <View style={[styles.list, styles.listPosition]}>
        <NotificationItem
          title={`<descriptionthatisverylongdescriptionthatisveryl...>`}
        />
        <NotificationItem
          title={`<descriptionthatisverylongdescriptionthatisveryl...>`}
          propTop={150}
          propLeft={22}
        />
        <NotificationItem
          title={`<description>`}
          propTop={-8}
          propLeft={22}
        />
        <NotificationItem
          title={`<description>`}
          propTop={-251}
          propLeft={22}
        />
        <NotificationItem
          title={`<description>`}
          propTop={-332}
          propLeft={22}
        />
        <NotificationItem
          title={`<description>`}
          propTop={-89}
          propLeft={22}
        />
        <NotificationItem
          title={`<description>`}
          propTop={-170}
          propLeft={23}
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
  listPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  textClr: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    letterSpacing: 0,
  },
  notificationScreenChild: {
    top: 344,
    left: 101,
    width: 215,
    height: 215,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -82,
    top: -2,
    width: 164,
    height: 31,
  },
  batteryIcon: {
    marginLeft: 8.95,
    width: 24,
    top: 0,
  },
  wifiIcon: {
    marginLeft: -11.35,
    width: 15,
    top: 0,
  },
  mobileSignalIcon: {
    marginLeft: -33.35,
    width: 17,
    top: 0,
  },
  rightSide: {
    marginLeft: 103.7,
    top: 17,
    width: 67,
  },
  text: {
    top: 1,
    left: 0,
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    height: 20,
    width: 54,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: 24,
    top: 0,
  },
  leftSide: {
    marginLeft: -169,
    top: 12,
  },
  statusbarIphone1313Pro: {
    right: 4,
    left: 4,
    height: 44,
    display: "none",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  title: {
    fontSize: 28,
    lineHeight: 24,
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
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 390,
    height: 790,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 40,
    },
  },
  addIcon: {
    top: 83,
    left: 287,
    width: 26,
    height: 26,
    position: "absolute",
  },
  crossIcon: {
    top: 87,
    left: 325,
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
