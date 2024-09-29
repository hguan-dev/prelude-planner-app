import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Swipeable } from "react-native-gesture-handler";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  IconSize,
} from "../GlobalStyles";

const NotificationItem = ({
  subject,
  sender,
  time,
  desc,
  deleteNotification,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const renderRightActions = () => {
    return (
      <View style={styles.deleteContainer}>
        <Text style={styles.deleteText}>Delete</Text>
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={deleteNotification}
    >
      <LinearGradient
        style={styles.notificationItem}
        locations={[0, 1]}
        colors={["#2a1d52", "#2f2b80"]}
      >
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftHeaderContainer}>
              <View style={styles.greenBox} />
              <Text style={styles.subject}>{subject}</Text>
            </View>
            <Text style={styles.senderXmAgo}>
              {sender}, {time} ago
            </Text>
          </View>
          <TouchableOpacity onPress={toggleExpand} activeOpacity={1}>
            <Text
              style={styles.description}
              numberOfLines={expanded ? undefined : 1}
              ellipsizeMode="tail"
            >
              {desc}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Padding.default,
  },
  leftHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
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
  contentContainer: {
    padding: Padding.default,
  },
  notificationItem: {
    marginBottom: Padding.larger,
    borderRadius: Border.defaultRadius,
    paddingVertical: Padding.default,
    width: "100%",
  },
  deleteContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "red",
    width: 100, // Adjust width for your design
    borderRadius: Border.defaultRadius,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    padding: Padding.default,
  },
});

export default NotificationItem;
