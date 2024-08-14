import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

// the component takes in the lesson title and a confirmation status (confirm now or edit time)
const LessonAvailabilityItem = ({ title, dates, confirmation }) => {
  // console log for pressing the button, update to link to availability page
  const handlePress = () => {
    console.log("Confirmation button pressed");
  };

  // color for lesson divider line
  const confirmationColor =
  confirmation === "Confirm Now!"
    ? styles.unconfirmed.backgroundColor
    : styles.confirmed.backgroundColor;

  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subdate}>{dates}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>{confirmation}</Text>
          </TouchableOpacity>
        </View>
        {/* line for dividing each lesson item */}
        {/* <View style={styles.lessonLine}></View> */}
        <View style={[styles.lessonLine, { backgroundColor: confirmationColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: Padding.larger,
      marginBottom: Padding.default,
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: Padding.default,
    },
    leftContent: {
      flex: 1,
      justifyContent: "flex-start",
    },
    title: {
      fontFamily: FontFamily.alataRegular,
      fontSize: FontSize.medium,
      lineHeight: 22,
      color: Color.white,
      flex: 1,
      justifyContent: "flex-start",
    },
    subdate: {
      fontFamily: FontFamily.alataRegular,
      marginTop: 8,
      lineHeight: 13,
      fontSize: FontSize.small,
      color: Color.opacityGray,
      textAlign: "left",
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: "#a994b8",
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: FontFamily.alataRegular,
      fontSize: FontSize.medium,
      color: "black",
    },
    lessonLine: {
      height: 1,
      marginTop: 10,
    },
    confirmed: {
      backgroundColor: Color.lightSkyBlue,
    },
    unconfirmed: {
      backgroundColor: Color.lightPurple,
    },
  });
  

export default LessonAvailabilityItem;
