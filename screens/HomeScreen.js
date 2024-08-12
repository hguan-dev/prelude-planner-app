import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import LessonAvailabilityItem from "../components/LessonAvailabilityItem";
import EventItem from "../components/EventItem";
import BottomNav from "../components/BottomNav";
import OpenedEventPopup from "../components/OpenedEventPopup";
import FilterIcon from "../assets/icons/FilterIcon";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import BackgroundGradient from "../assets/images/BackgroundGradient";
import FilterModal from "../components/FilterModal";

async function fetchData() {
  // placeholder data
  return Promise.resolve([
    {
      id: 1,
      title: "Prof. X Lesson",
      time: "5:00 pm - 6:00 pm",
      location: "Room 101",
      creator: "Prof. X",
      participants: "Student A",
      description: "This is a lesson with Prof. X",
      confirmation: "Confirmed",
      type: "lesson",
      date: new Date(),
    },
    {
      id: 2,
      title: "Student Recital",
      time: "5:00 pm - 6:00 pm",
      location: "Room 101",
      creator: "Student A",
      participants: "Student A",
      description: "This is a recital with Student A",
      confirmation: "Confirmed",
      type: "recital",
      date: new Date(),
    },
    {
      id: 3,
      title: "Prof. X Lesson",
      time: "5:00 pm - 6:00 pm",
      location: "Room 101",
      creator: "Prof. X",
      participants: "Student A",
      description: "This is a lesson with Prof. X",
      confirmation: "Confirmed",
      type: "lesson",
      date: new Date("2024-09-24"),
    },
    {
      id: 5,
      title: "Masterclass",
      time: "5:00 pm - 6:00 pm",
      location: "Room 101",
      creator: "Visiting Lecturer",
      participants: "Student A",
      description: "This is a masterclass with Visiting Lecturer",
      confirmation: "Unconfirmed",
      type: "masterclass",
      date: new Date("2023-03-23"),
    },
    {
      id: 4,
      title: "Studio Class",
      time: "5:00 pm - 6:20 pm",
      location: "Room 101",
      creator: "Trombone Studio",
      participants: "Student A",
      description: "This is a studio class with Trombone Studio",
      confirmation: "Confirmed",
      type: "studio class",
      date: new Date("2024-09-24"),
    },
    {
      id: 6,
      title: "Studio Class",
      time: "5:00 pm - 6:20 pm",
      location: "Room 101",
      creator: "Trombone Studio",
      participants: "Student A",
      description: "This is a studio class with Trombone Studio",
      confirmation: "Confirmed",
      type: "studio class",
      date: new Date("2024-09-24"),
    },
    {
      id: 7,
      title: "Studio Class",
      time: "5:00 pm - 6:20 pm",
      location: "Room 101",
      creator: "Trombone Studio",
      participants: "Student A",
      description: "This is a studio class with Trombone Studio",
      confirmation: "Confirmed",
      type: "studio class",
      date: new Date("2024-09-24"),
    },
  ]);
}

// group events by date
function groupByDate(events) {
  const sorted = [...events].sort((a, b) => a.date - b.date);
  const getEventDate = (event) => {
    return event.date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const groupedByDate = sorted.reduce((dates, event) => {
    const date = getEventDate(event);
    (dates[date] = dates[date] || []).push(event);
    return dates;
  }, {});
  return groupedByDate;
}

// filter events by type
function filter(events, filters) {
  if (filters.length === 0) {
    return events;
  }
  return events.filter((event) => filters.includes(event.type));
}

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}

const DefaultHomeView = ({
  events,
  setOpenedEventId,
  filters,
  setFilters,
  filterVisible,
  setFilterVisible,
}) => {
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
        </ScrollView>
      </View>
      <View style={styles.bottonNavContainer}>
        <BottomNav />
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const [openedEventId, setOpenedEventId] = useState(null);

  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function getEvents() {
      try {
        // mock api call
        const data = await fetchData();
        setEvents(data);
      } catch {
        console.log("failed to get events");
      }
    }
    getEvents();
  }, []);

  const filteredEvents = filter(events, filters);
  const filteredAndGroupedEvents = groupByDate(filteredEvents);

  return (
    <>
      {!openedEventId ? (
        <DefaultHomeView
          events={filteredAndGroupedEvents}
          setOpenedEventId={setOpenedEventId}
          filters={filters}
          setFilters={setFilters}
          filterVisible={filterVisible}
          setFilterVisible={setFilterVisible}
        />
      ) : (
        <OpenedEventPopup
          event={filteredEvents.find((event) => event.id === openedEventId)}
          onClose={() => setOpenedEventId(null)}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: Color.darkPurple,
    paddingTop: Padding.headerTop,
  },
  content: {
    paddingBottom: "25%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Padding.default,
    marginBottom: Padding.larger,
    paddingHorizontal: Padding.headerText,
  },
  filterIcon: {
    alignItems: "center",
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
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    paddingTop: 7.5,
    marginTop: 7.5,
    marginBottom: 30,
  },
  date: {
    fontSize: FontSize.large,
    fontFamily: FontFamily.alataRegular,
    color: Color.white,
    textAlign: "center",
    marginVertical: Padding.default,
    width: "100%",
  },
  noEventsText: {
    fontSize: FontSize.large,
    fontFamily: FontFamily.alataRegular,
    color: Color.white,
    textAlign: "center",
    marginVertical: Padding.default,
    width: "100%",
  },
  radialBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  bottonNavContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  visibleScrollView: {
    flex: 1,
    overflow: "visible",
  },
});

export default HomeScreen;
