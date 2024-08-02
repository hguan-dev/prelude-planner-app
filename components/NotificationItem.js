import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const NotificationItem = ({ desc }) => {
  return (
    <LinearGradient
      style={styles.notificationItem}
      locations={[0, 1]}
      colors={["#311c51", "#4679d1"]}
    >
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
            <View style={styles.leftHeaderContainer}>
              <View style={styles.greenBox} />
              <Text style={styles.subject}>Subject</Text>
            </View>
            <Text style={styles.senderXmAgo}>Sender, Xm ago</Text>
        </View>
        <Text style={styles.description}>{desc}</Text>
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
    marginBottom: 10,
  },
  leftHeaderContainer: {
    display: "flex",
    flexDirection: "row",
  },
  greenBox: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorLime,
    width: 18,
    height: 18,
    marginRight: 10,
  },
  subject: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
  },
  senderXmAgo: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
  },
  description: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  notificationItem: {
    marginBottom: 20,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    width: "100%",
  },
});

export default NotificationItem;
