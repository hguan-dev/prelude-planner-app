import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import NotificationItem from "../components/NotificationItem";
import { FontFamily, Color } from "../GlobalStyles";

// Create an array to hold notification data
const notifications = [
  { id: '1', desc: '<description>' },
  { id: '2', desc: '<description>' },
  { id: '3', desc: '<description>' },
  { id: '4', desc: '<description>' },
  { id: '5', desc: '<description>' },
  { id: '6', desc: '<descriptionthatisverylongdescriptionthatisveryl...>' },
  { id: '7', desc: '<descriptionthatisverylongdescriptionthatisveryl...>' }
];

const NotificationScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.notificationScreen}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Notifications</Text>
        <View style = {styles.IconContainer}>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/images/add.png")}
          />
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Image
              style={styles.crossIcon}
              contentFit="cover"
              source={require("../assets/images/cross.png")}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.listContainer}>
        <FlatList
          style={styles.list}
          data={notifications} // Pass the notifications array as data
          renderItem={({ item }) => (
            <NotificationItem desc={item.desc} /> // Render each notification item
          )}
          keyExtractor={item => item.id} // Unique key for each item
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: "15%",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
  },
  IconContainer: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
  },
  addIcon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  crossIcon: {
    marginTop: 4,
    width: 18,
    height: 18,
  },
  listContainer: {
    // borderColor: "rgba(255, 255, 255, 1)",
    // borderWidth: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    width: "90%",
    height: "80%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  notificationScreen: {
    backgroundColor: "#211134",
    height: "100%",
    width: "100%",
  },
});

export default NotificationScreen;