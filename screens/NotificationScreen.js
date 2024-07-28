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
      <Text style={styles.title}>Notifications</Text>
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
      <FlatList
        style={[styles.list, styles.listShadowBox]}
        data={notifications} // Pass the notifications array as data
        renderItem={({ item }) => (
          <NotificationItem title={item.title} /> // Render each notification item
        )}
        keyExtractor={item => item.id} // Unique key for each item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    top: 83,
    left: 42,
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 30,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 204,
    height: 36,
    position: "absolute",
  },
  addIcon: {
    top: 84,
    left: 295,
    width: 26,
    height: 26,
    position: "absolute",
  },
  crossIcon: {
    top: 89,
    left: 330,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  list: {
    marginLeft: -180,
    top: 150,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 360,
    height: 790,
    position: "absolute",
  },
  listShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  notificationScreen: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 80,
    elevation: 80,
    backgroundColor: "#211134",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default NotificationScreen;