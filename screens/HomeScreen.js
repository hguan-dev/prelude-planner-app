import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import EventItem from "../components/EventItem";
import BottomNav from "../components/BottomNav";
import OpenedEventPopup from "../components/OpenedEventPopup";
import FilterIcon from "../assets/icons/FilterIcon";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import NewBackgroundGradient from "../assets/images/NewBackgroundGradient";

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

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const [openedEventId, setOpenedEventId] = useState(null);

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

  const DefaultHomeView = () => {
    return (
      <View style={styles.home}>
        <Header />
        <View style={styles.filterIconContainer}>
          <Text style={styles.upcomingEvents}>Upcoming Events</Text>
          <FilterIcon size={28} style={styles.filterIcon} />
        </View>
        <View style={styles.visibleScrollView}>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.eventList}>
              <View style={styles.radialBackground}>
                <NewBackgroundGradient stop1="#2a3648" stop2="#372a48" />
              </View>
              {events &&
                Object.entries(groupByDate(events)).map(([date, events]) => (
                  <React.Fragment key={date}>
                    <Text key={date} style={styles.date}>
                      {date}
                    </Text>
                    {events.map((event) => (
                      <EventItem
                        key={event.id}
                        onPress={() => setOpenedEventId(event.id)}
                        event={event}
                      />
                    ))}
                  </React.Fragment>
                ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottonNavContainer}>
          <BottomNav />
        </View>
      </View>
    );
  };

  const OpenedEventPopupView = () => {
    return (
      <OpenedEventPopup
        onClose={() => setOpenedEventId(null)}
        event={events.find((event) => event.id === openedEventId)}
      />
    );
  };

  return <>{!openedEventId ? <DefaultHomeView /> : <OpenedEventPopupView />}</>;
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#211134",
    paddingTop: 40,
  },
  content: {
    paddingBottom: "25%",
  },
  filterIconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Padding.p_5xs,
    marginBottom: Padding.p_base,
    paddingHorizontal: 30,
    width: "100%",
  },
  filterIcon: {
    alignItems: "center",
  },
  upcomingEvents: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
  },
  eventList: {
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 7.5,
    marginHorizontal: Padding.p_base,
  },
  date: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alataRegular,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    marginVertical: Padding.p_5xs,
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
