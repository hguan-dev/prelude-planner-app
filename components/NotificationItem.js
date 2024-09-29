import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  IconSize,
} from "../GlobalStyles";

const NotificationItem = ({ desc }) => {
  const [expanded, setExpanded] = useState(false);
  // const [description, setDescription] = useState(desc);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <LinearGradient
      style={styles.notificationItem}
      locations={[0, 1]}
      colors={["#2a1d52", "#2f2b80"]}
    >
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
            <View style={styles.greenBox} />
            <Text style={styles.subject}>Subject</Text>
          </View>
          <Text style={styles.senderXmAgo}>Sender, Xm ago</Text>
        </View>
        <TouchableOpacity onPress={toggleExpand} activeOpacity={1}>
          <Text
            style={expanded ? styles.expandedDescription : styles.description}
            numberOfLines={expanded ? undefined : 1}
            ellipsizeMode="tail"
          >
            {desc}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Padding.default,
  },
  leftHeaderContainer: {
    display: "flex",
    flexDirection: "row",
  },
  greenBox: {
    borderRadius: Border.tinyRadius,
    backgroundColor: Color.green,
    width: IconSize.iconSmall,
    height: IconSize.iconSmall,
    marginRight: Padding.default,
  },
  subject: {
    color: Color.white,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.small,
  },
  senderXmAgo: {
    color: Color.white,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.small,
  },
  description: {
    color: Color.white,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.small,
  },
  expandedDescription: {
    color: Color.white,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.small,
    textAlignVertical: "top",
    minHeight: 100,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: Padding.default,
    marginBottom: Padding.default,
  },
  notificationItem: {
    marginBottom: Padding.larger,
    borderRadius: Border.defaultRadius,
    paddingVertical: Padding.default,
    alignItems: "center",
    width: "100%",
  },
});

export default NotificationItem;
