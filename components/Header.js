import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Header = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.topnavigationParent}>
          <View style={styles.topnavigation}>
            <View style={styles.leftTitleRight}>
              <View style={styles.leftAccessory}>
                <Text style={styles.title}>Prelude Planner</Text>
                <Text style={styles.leftTitle}>Left Title</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.iosIcon36Notification}
            contentFit="cover"
            source={require("../assets/ios--icon--36--notification-bell.png")}
          />
          <View style={styles.iosIcon36Chat}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.upcomingEvents}>Upcoming Events</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    position: "relative",
    fontSize: FontSize.size_9xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 204,
    height: 36,
  },
  leftTitle: {
    position: "relative",
    fontSize: FontSize.defaultBoldHeadline_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.alataRegular,
    color: Color.defaultSystemBlueDark,
    textAlign: "left",
    display: "none",
    marginLeft: 5,
  },
  leftAccessory: {
    flex: 1,
    height: 71,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Padding.p_5xs,
  },
  leftTitleRight: {
    width: 220,
    height: 74,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topnavigation: {
    position: "absolute",
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 220,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iosIcon36Notification: {
    position: "absolute",
    top: 18,
    left: 261,
    width: 36,
    height: 36,
  },
  icon: {
    position: "relative",
    width: 27,
    height: 25,
  },
  iosIcon36Chat: {
    position: "absolute",
    top: 20,
    left: 306,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
  },
  topnavigationParent: {
    position: "relative",
    width: 341,
    height: 74,
  },
  frame1: {
    width: 364,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  upcomingEvents: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 200,
    height: 46,
    marginLeft: 30,
    marginTop: -4,
  },
  frame: {
    width: 364,
    height: 116,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Header;
