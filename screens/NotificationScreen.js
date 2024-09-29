import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import NotificationItem from "../components/NotificationItem";
import NewNotifPopUp from "../components/NewNotifPopUp";
import AddIcon from "../assets/icons/AddIcon";
import CrossIcon from "../assets/icons/CrossIcon";
import {
  FontFamily,
  Color,
  IconSize,
  Padding,
  Gap,
  FontSize,
} from "../GlobalStyles";

// Create an array to hold notification data
const notifications = [
  {
    id: "1",
    subject: "Subject",
    sender: "Sender",
    time: "Xm",
    desc: "<description>",
  },
  {
    id: "2",
    subject: "Subject",
    sender: "Sender",
    time: "Xm",
    desc: "<description>",
  },
  {
    id: "3",
    subject: "Subject",
    sender: "Sender",
    time: "Xm",
    desc: "<description>",
  },
  {
    id: "4",
    subject: "Subject",
    sender: "Sender",
    time: "Xm",
    desc: "<description>",
  },
  {
    id: "5",
    subject: "Subject",
    sender: "Sender",
    time: "Xm",
    desc: "<description>",
  },
  {
    id: "6",
    subject: "Subject",
    sender: "Sender",
    time: "Xm",
    desc: "<descriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylong>",
  },
  {
    id: "7",
    subject: "Subject",
    sender: "Sender",
    time: "Xm",
    desc: "<descriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylongdescriptionthatisverylong>",
  },
];

const NotificationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.notificationScreen}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Notifications</Text>
        <View style={styles.IconContainer}>
          <TouchableOpacity onPress={openModal}>
            <AddIcon size={IconSize.iconDefault} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <CrossIcon size={IconSize.iconSmall} />
          </TouchableOpacity>
          <NewNotifPopUp modalVisible={modalVisible} closeModal={closeModal} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.list}
          data={notifications} // Pass the notifications array as data
          renderItem={({ item }) => (
            <NotificationItem
              subject={item.subject}
              sender={item.sender}
              time={item.time}
              desc={item.desc}
            /> // Render each notification item
          )}
          keyExtractor={(item) => item.id} // Unique key for each item
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Padding.pageHeaderTop,
    paddingHorizontal: Padding.headerText,
    marginBottom: Padding.larger,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: FontSize.header,
    fontFamily: FontFamily.alataRegular,
    color: Color.white,
  },
  IconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.headerIcon,
  },
  listContainer: {
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
    backgroundColor: Color.darkPurple,
    height: "100%",
    width: "100%",
  },
});

export default NotificationScreen;
