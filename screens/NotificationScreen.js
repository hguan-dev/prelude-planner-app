import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, FlatList } from "react-native";
import NotificationItem from "../components/NotificationItem";
import { FontFamily, Color, Padding, Border } from "../GlobalStyles";

// Create an array to hold notification data
const notifications = [
  { id: '1', title: '<description>' },
  { id: '2', title: '<description>' },
  { id: '3', title: '<description>' },
  { id: '4', title: '<description>' },
  { id: '5', title: '<description>' },
  { id: '6', title: '<descriptionthatisverylongdescriptionthatisveryl...>' },
  { id: '7', title: '<descriptionthatisverylongdescriptionthatisveryl...>' }
];

const NotificationScreen = () => {
  return (
    <View style={[styles.notificationScreen, styles.listShadowBox]}>
      <View style={styles.leftAccessory}>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        style={[styles.list, styles.listShadowBox]}
        data={notifications} // Pass the notifications array as data
        renderItem={({ item }) => (
          <NotificationItem title={item.title} /> // Render each notification item
        )}
        keyExtractor={item => item.id} // Unique key for each item
      />
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
  listContent: {
    paddingBottom: 20, // this does nothing
  },
  list: {
    marginLeft: -195,
    top: 150,
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
    left: 332,
    width: 26,
    height: 26,
    position: "absolute",
  },
  crossIcon: {
    top: 87,
    left: 370,
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