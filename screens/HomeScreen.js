import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Header from "../components/Header";
import EventItem from "../components/EventItem";
import BottomNav from "../components/BottomNav";
import OpenedEventPopup from "../components/OpenedEventPopup";
import FilterIcon from "../assets/icons/FilterIcon";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import RadialGradientCircle from "../assets/images/RadialGradientCircle";
import FilterModal from "../components/FilterModal";
import LessonAvailabilityItem from "../components/LessonAvailabilityItem";
// I put the events in this file, use them from there
import eventsData from "../assets/data/events.json";
import NewEventPopup from "../components/NewEventPopup";

// group events by date
function groupByDate(events) {
  const sorted = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const getEventDate = (event) => {
    return new Date(event.date).toLocaleDateString(undefined, {
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
  setNewEventScreenVisible,
}) => {
  return (
    <Pressable onPress={() => setFilterVisible(false)} style={styles.outside}>
      <View style={styles.home}>
        <Header />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.filterIconContainer}>
            <Text style={styles.upcomingEvents}>Lesson Availabilities</Text>
          </View>
          {/* LESSON AVAILABILITES SECTION */}
          <View style={styles.lessonList}>
            <View style={styles.radialBackground}>
              <RadialGradientCircle
                stop1={Color.niceBlue}
                stop2={Color.purplyBlue}
              />
            </View>
            <LessonAvailabilityItem
              title="MM Lesson"
              dates="9/24/24 - 9/25/24"
              confirmation="Confirm Now!"
            />
            <LessonAvailabilityItem
              title="RH Lesson"
              dates="9/26/24 - 9/29/24"
              confirmation="Edit Time"
            />
            <LessonAvailabilityItem
              dates="10/01/24 - 10/03/24"
              title="RH Lesson"
              confirmation="Edit Time"
            />
          </View>
          <View style={styles.filterIconContainer}>
            <Text style={styles.upcomingEvents}>Upcoming Events</Text>
            <TouchableOpacity onPress={() => setFilterVisible(true)}>
              <FilterIcon size={28} style={styles.filterIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.visibleScrollView}>
            <FilterModal
              visible={filterVisible}
              position={{ top: 0, right: 12 }}
              activeFilters={filters}
              onChange={setFilters}
            />
            <View style={styles.eventList}>
              <View style={styles.radialBackground}>
                <RadialGradientCircle
                  stop1={Color.niceBlue}
                  stop2={Color.purplyBlue}
                />
              </View>
              {!isEmpty(events) ? (
                Object.entries(events).map(([date, events]) => (
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
                ))
              ) : (
                <Text style={styles.noEventsText}>No events at this time.</Text>
              )}
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottonNavContainer}>
          <BottomNav onPlusPress={() => setNewEventScreenVisible(true)} />
        </View>
      </View>
    </Pressable>
  );
};

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const [openedEventId, setOpenedEventId] = useState(null);

  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState([]);

  const [newEventScreenVisible, setNewEventScreenVisible] = useState(false);

  useEffect(() => {
    // Use the imported JSON data instead of fetching it
    setEvents(eventsData);
  }, []);

  const filteredEvents = filter(events, filters);
  const filteredAndGroupedEvents = groupByDate(filteredEvents);

  return (
    <>
      {openedEventId ? (
        <OpenedEventPopup
          event={filteredEvents.find((event) => event.id === openedEventId)}
          onClose={() => setOpenedEventId(null)}
        />
      ) : newEventScreenVisible ? (
        <NewEventPopup onClose={() => setNewEventScreenVisible(false)} />
      ) : (
        <DefaultHomeView
          events={filteredAndGroupedEvents}
          setOpenedEventId={setOpenedEventId}
          filters={filters}
          setFilters={setFilters}
          filterVisible={filterVisible}
          setFilterVisible={setFilterVisible}
          setNewEventScreenVisible={setNewEventScreenVisible}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  outside: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  home: {
    flex: 1,
    backgroundColor: Color.darkPurple,
    paddingTop: Padding.headerTop,
  },
  content: {
    paddingBottom: "25%",
  },
  filterIconContainer: {
    display: "flex",
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
  upcomingEvents: {
    fontSize: FontSize.subheader,
    fontFamily: FontFamily.alataRegular,
    color: Color.white,
  },
  lessonList: {
    alignItems: "center",
    borderRadius: Border.defaultRadius,
    overflow: "hidden",
    marginTop: 7.5,
    marginBottom: 25, //spacing between lessons and events
    marginHorizontal: Padding.larger,
    backgroundColor: "rgba(150, 25, 150, 0.4)",
  },
  eventList: {
    alignItems: "center",
    borderRadius: Border.defaultRadius,
    overflow: "hidden",
    marginTop: 7.5,
    marginHorizontal: Padding.larger,
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
