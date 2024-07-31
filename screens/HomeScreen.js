import * as React from "react";
import { StyleSheet, View, Text, ScrollView, ImageBackground } from "react-native";
import Header from "../components/Header";
import LessonAvailabilityItem from "../components/LessonAvailabilityItem";
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
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Lesson Availabilities</Text>
        </View>
        {/* LESSON AVAILABILITES SECTION */}
        <View style={styles.lessonList}>
          <Text style={styles.date}>Sep. 24 - Sep. 25</Text>
          <LessonAvailabilityItem 
            title="MM Lesson"
            confirmation="Confirm Now!" 
          />
          <LessonAvailabilityItem 
            title="RH Lesson"
            confirmation="Edit Time" 
          />
        </View>
        {/* EVENTS SECTION */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Upcoming Events</Text>
          <FilterIcon style={styles.filterIcon} />
        </View>
        <View style={styles.eventList}>
          <View style={styles.circleContainer}>
            <RadialGradientCircle style={[styles.circle]} />
          </View>
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Padding.p_5xs,
    width: "100%",
    position: 'relative'
    
  },
  filterIcon: {
    marginHorizontal: 14,
    width: 31,
    height: 31,
    alignItems: "center",
    right: 13,
  },
  headerTitle: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
    marginHorizontal: 14,
  },
  lessonList: {
    width: "96%",
    alignItems: "center",
    backgroundColor: "rgba(150, 25, 150, 0.3)",
    borderRadius: 20,
    paddingTop: 7.5,
    marginTop: 7.5,
    marginBottom: 30,
  },
  eventList: {
    width: "96%",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    paddingTop: 7.5,
    marginTop: 7.5,
    marginBottom: 30,
  },
  date: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    marginVertical: Padding.p_5xs,
    width: "100%",
  },
  circleContainer: {
    position: "absolute",
    top: -25, // Adjust this value to position the circle
    left: 0,
    right: 25,
    alignItems: "center",
  },
  circle: {
    width: 300, 
    height: 300,
  },
});

export default HomeScreen;
