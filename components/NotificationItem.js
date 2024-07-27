import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const NotificationItem = () => {
  return (
    <LinearGradient
      style={styles.NotificationItem}
      locations={[0, 1]}
      colors={["#311c51", "#4679d1"]}
    >
      <View style={styles.header}>
        <View style={[styles.header1, styles.headerPosition]}>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <Text style={[styles.subject, styles.subjectPosition]}>Subject</Text>
          <Text style={[styles.senderXmAgo, styles.subjectPosition]}>
            Sender, Xm ago
          </Text>
        </View>
      </View>
      <View style={[styles.titleDescPic, styles.metaDataSpaceBlock]}>
        <View style={styles.titleDesc}>
          <View style={styles.title}>
            <Text
              style={styles.title1}
            >{`<descriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylong>`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.metaData, styles.metaDataSpaceBlock]} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 18,
  },
  subjectPosition: {
    height: 12,
    top: 2,
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
    alignItems: "center",
  },
  metaDataSpaceBlock: {
    marginTop: 8,
    overflow: "hidden",
  },
  headerChild: {
    borderRadius: 4,
    backgroundColor: "#00fa0a",
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
    position: "absolute",
  },
  header: {
    height: 18,
    width: 339,
  },
  title1: {
    width: 292,
    display: "flex",
    color: Color.colorWhite,
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
    alignItems: "center",
  },
  metaData: {
    height: 17,
    width: 292,
  },
  NotificationItem: {
    borderRadius: 16,
    flex: 1,
    width: "100%",
    height: 283,
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "transparent",
    alignItems: "center",
  },
});

export default NotificationItem;
