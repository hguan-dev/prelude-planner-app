import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import EventItem from "../components/EventItem";
import BottomNav from "../components/BottomNav";
import OpenedEventPopup from "../components/OpenedEventPopup";
import FilterIcon from "../assets/icons/FilterIcon";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import BackgroundGradient from "../assets/images/BackgroundGradient";

const HomeScreen = () => {
  // used for the opened event popup
  const [shownEventItem, setShowOpenedEventPopup] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  // probably will be used later
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [groupedByDate, setGroupedByDate] = useState({});

  React.useEffect(() => {
    setLoading(true);

    //placeholder data
    let data = [
      {
        id: 1,
        title: "Prof. X Lesson",
        time: "5:00 pm - 6:00 pm",
        location: "Room 101",
        creator: "Prof. X",
        participants: "Student A",
        description: "This is a lesson with Prof. X",
        confirmation: "Confirmed",
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
        date: new Date("2024-09-24"),
      },
    ];
     //fetch then
    //sort data by date
    data = data.sort((a, b) => a.date - b.date);
    let sorted = {};
    data.forEach((e) => {
      const date = e.date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      if (!sorted[date]) {
        sorted[date] = [];
      }
      sorted[date].push(e);
    });

    setEvents(data);
    setGroupedByDate(sorted);
    setLoading(false);
  }, []);

  const DefaultHomeView = () => {
    return (
      <View style={styles.home}>
        <Header />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.filterIconContainer}>
            <Text style={styles.upcomingEvents}>Upcoming Events</Text>
            <FilterIcon size={28} style={styles.filterIcon} />
          </View>
          <View style={styles.eventList}>
            <View style={styles.radialBackground}>
              <BackgroundGradient stop1="#2a3648" stop2="#372a48"/>
            </View>
            {groupedByDate && Object.entries(groupedByDate).map(([date, objs]) => (
              <React.Fragment key={date}>
              <Text key={date} style={styles.date}>{date}</Text>
              {objs.map((event) => (
                <EventItem
                  key={event.id}
                  onPress={() => {
                    setShowOpenedEventPopup(event);
                    setPopupVisible(true);
                  }}
                  title={event.title}
                  time={event.time}
                  location={event.location}
                  creator={event.creator}
                  participants={event.participants}
                  description={event.description}
                  confirmation={event.confirmation}
                />
              ))}
              </React.Fragment>
            ))}
          </View>
        </ScrollView>
        <View style={styles.bottonNavContainer}>
          <BottomNav />
        </View>
      </View>
    );
  };

  const PopupView = () => {
    return (
      <>
        {shownEventItem && (
          <OpenedEventPopup
            setPopupVisible={() => setPopupVisible(false)}
            event={shownEventItem}
          />
        )}
      </>
    );
  };

  return (
    <>
      {!isPopupVisible ? <DefaultHomeView /> : <PopupView />}
    </>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#211134",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  filterIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Padding.p_5xs,
    marginBottom: Padding.p_base,
    paddingHorizontal: 30,
    width: "100%",
    position: "relative",
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
});

export default HomeScreen;
