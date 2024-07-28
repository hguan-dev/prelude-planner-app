import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NotificationItem = ({ title, propLeft }) => {
  const notificationItemStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <LinearGradient
      style={[styles.notificationItem, notificationItemStyle]}
      locations={[0, 1]}
      colors={["#311c51", "#4679d1"]}
    >
      <View style={styles.header}>
          <View style={[styles.headerChildGreen, styles.headerPosition]} />
          <Text style={[styles.subject, styles.headerPosition]}>Subject</Text>
          <Text style={[styles.senderXmAgo, styles.headerPosition]}>Sender, Xm ago</Text>
      </View>
      <Text style={styles.description}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    width: 339,
  },
  headerPosition: {
    height: 18,
    top: 10,
    display: "flex",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    position: "absolute",
  },
  headerChildGreen: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorLime,
    width: 18,
  },
  subject: {
    left: 25,
    width: 183,
    textAlign: "left",
    height: 12,
  },
  senderXmAgo: {
    right: 0,
    textAlign: "right",
    width: 117,
    height: 12,
  },
  description: {
    top: 5,
    marginBottom: 15,
    width: 292,
    display: "flex",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    alignItems: "center",
    overflow: "hidden",
  },
  notificationItem: {
    marginBottom: 20, // Add bottom margin to space items apart
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xs,
    backgroundColor: "transparent",
    alignItems: "center",
  },
});

export default NotificationItem;
