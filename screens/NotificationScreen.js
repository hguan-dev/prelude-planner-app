import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import NotificationItem from "../components/NotificationItem";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const NotificationScreen = () => {
  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.notificationList}>
          <Text style={styles.date}>Notifications</Text>
          <NotificationItem />
          {/* Add more NotificationItem components as needed */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#211134",
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  content: {
    paddingHorizontal: Padding.p_5xs,
    alignItems: 'center',
  },
  notificationList: {
    width: '100%',
    alignItems: 'center',
  },
  date: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
    textAlign: 'center',
    marginVertical: Padding.p_5xs,
  },
});

export default NotificationScreen;
