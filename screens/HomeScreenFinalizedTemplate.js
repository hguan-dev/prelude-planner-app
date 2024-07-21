import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import EventItem from "../components/EventItem";
import DynamicComponent from "../components/DynamicComponent";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomeScreenFinalizedTemplate = () => {
  return (
    <View style={styles.homeScreenFinalizedTemplate}>
      <Header />
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.framePosition]}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
        <View style={[styles.frame2, styles.listsFlexBox]}>
          <View style={[styles.list, styles.listLayout]}>
            <View style={[styles.lists, styles.listsFlexBox]}>
              <Text style={styles.labelTypo}>September 24, 2024</Text>
              <EventItem
                label="Prof. X Lesson"
                label1="Student A"
                label2="5:00 pm - 6:00 pm"
                label3="Confirmed"
              />
              <EventItem
                label="Prof. Y Lesson"
                label1="Student B"
                label2="6:00 pm - 7:00 pm"
                label3="Unconfirmed"
                propWidth={358}
                propAlignSelf="unset"
              />
              <EventItem
                label="Student Recital"
                label1="Student A"
                label2="5:00 pm - 6:00 pm"
                label3="Confirmed"
                propWidth="unset"
                propAlignSelf="stretch"
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                September 25, 2024
              </Text>
              <EventItem
                label="Prof. X Lesson"
                label1="Student A"
                label2="5:00 pm - 6:00 pm"
                label3="Confirmed"
                propWidth="unset"
                propAlignSelf="stretch"
              />
              <EventItem
                label="Masterclass"
                label1="Visiting Lecturer"
                label2="5:00 pm - 6:00 pm"
                label3="Unconfirmed"
                propWidth="unset"
                propAlignSelf="stretch"
              />
              <EventItem
                label="Studio Class"
                label1="Trombone Studio"
                label2="5:00pm - 6:20 pm"
                label3="Confirmed"
                propWidth="unset"
                propAlignSelf="stretch"
              />
            </View>
          </View>
          <DynamicComponent />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    overflow: "hidden",
  },
  listsFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  listLayout: {
    height: 790,
    width: 390,
  },
  labelTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 205,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
  },
  image1Icon: {
    width: 31,
    height: 31,
  },
  frame1: {
    top: 0,
    width: 361,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    left: 0,
  },
  label1: {
    marginTop: 16,
  },
  lists: {
    marginLeft: -179,
    top: 13,
    left: "50%",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 358,
    height: 807,
    paddingHorizontal: 0,
    paddingVertical: 20,
  },
  list: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 40,
    },
    height: 790,
  },
  frame2: {
    top: 36,
    height: 790,
    width: 390,
    left: 0,
    overflow: "hidden",
  },
  frame: {
    height: 731,
    marginTop: -36,
    width: 390,
    overflow: "hidden",
  },
  homeScreenFinalizedTemplate: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 80,
    elevation: 80,
    borderRadius: Border.br_31xl,
    backgroundColor: "#211134",
    flex: 1,
    width: "100%",
    height: 844,
    paddingTop: 33,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 40,
    },
  },
});

export default HomeScreenFinalizedTemplate;
