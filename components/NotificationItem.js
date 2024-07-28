import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NotificationItem = ({ title, propTop, propLeft }) => {
  const notificationItemStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <LinearGradient
      style={[styles.notificationItem, notificationItemStyle]}
      locations={[0, 1]}
      colors={["#311c51", "#4679d1"]}
    >
      <View style={styles.header}>
        <View style={[styles.header1, styles.headerPosition]}>
          <View style={[styles.headerChildGreen, styles.headerPosition]} />
          <Text style={[styles.subject, styles.subjectPosition]}>Subject</Text>
          <Text style={[styles.senderXmAgo, styles.subjectPosition]}>Sender, Xm ago</Text>
        </View>
      </View>
      <View style={styles.metaData}>
        <View style={styles.titleDescPic}>
          <View style={styles.titleDesc}>
            <View style={styles.title}>
              <Text style={styles.title1}>{title}</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: 0,
    top: 0,
    height: 18,
    position: "absolute",
  },
  /*sizing of Subject and Sender, Xm ago*/
  subjectPosition: {
    height: 21,
    top: 2,
    display: "flex",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    position: "absolute",
  },
  /*green square*/
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
    top: 2,
  },
  senderXmAgo: {
    right: 0,
    textAlign: "right",
    width: 117,
    height: 12,
    top: 2,
  },
  header1: {
    width: 339,
    left: 0,
    top: 0,
  },
  header: {
    height: 18,
    width: 339,
  },
  title1: {
    width: 292,
    display: "flex",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    alignItems: "center",
  },
  title: {
    width: 292,
    overflow: "hidden",
  },
  titleDesc: {
    overflow: "hidden",
    alignItems: "center",
  },
  titleDescPic: {
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  metaData: {
    marginTop: 8,
    overflow: "hidden",
  },
  /*size of the entire notification box*/
  notificationItem: {
    top: 71,
    height: 60,
    left: 22,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xs,
    backgroundColor: "transparent",
    alignItems: "center",
    position: "absolute",
  },
});

export default NotificationItem;
