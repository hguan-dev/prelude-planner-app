import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import EventItem from "../components/EventItem";
import BottomNav from "../components/BottomNav";
import FilterIcon from "../assets/icons/FilterIcon";
import { Color, FontFamily, FontSize, Padding, Image } from "../GlobalStyles";
import RadialGradientCircle from "../assets/images/BackgroundGradient";

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.filterIconContainer}>
          <Text style={styles.upcomingEvents}>Upcoming Events</Text>
          <FilterIcon style={styles.filterIcon} />
        </View>
        <View style={styles.eventList}>
          <Text style={styles.date}>September 24, 2024</Text>
          <EventItem
            type="lessons"
            title="Prof. X Lesson"
            details="Student A"
            time="5:00 pm - 6:00 pm"
            confirmation="Confirmed"
          />
          <EventItem
            type="lessons"
            title="Prof. Y Lesson"
            details="Student B"
            time="6:00 pm - 7:00 pm"
            confirmation="Unconfirmed"
          />
          <EventItem
            type="recitals"
            title="Student Recital"
            details="Student A"
            time="5:00 pm - 6:00 pm"
            confirmation="Confirmed"
          />
          <Text style={styles.date}>September 25, 2024</Text>
          <EventItem
            type="lessons"
            title="Prof. X Lesson"
            details="Student A"
            time="5:00 pm - 6:00 pm"
            confirmation="Confirmed"
          />
          <EventItem
            type="masterclasses"
            title="Masterclass"
            details="Visiting Lecturer"
            time="5:00 pm - 6:00 pm"
            confirmation="Unconfirmed"
          />
          <EventItem
            type="studio class"
            title="Studio Class"
            details="Trombone Studio"
            time="5:00 pm - 6:20 pm"
            confirmation="Confirmed"
          />
        </View>
        <RadialGradientCircle />
      </ScrollView>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#211134",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  content: {
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
  },
  filterIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Padding.p_5xs,
    width: "100%",
  },
  filterIcon: {
    width: 31,
    height: 31,
  },
  upcomingEvents: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
  },
  eventList: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
  },
  date: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    marginVertical: Padding.p_5xs,
    width: "100%",
  },
});

export default HomeScreen;
