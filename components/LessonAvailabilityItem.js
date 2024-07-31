import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

// the component takes in the lesson title and a confirmation status (confirm now or edit time)
const LessonAvailabilityItem = ({ title, confirmation }) => {
  // console log for pressing the button, update to link to availability page
  const handlePress = () => {
    console.log("Confirmation button pressed");
  };

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>{confirmation}</Text>
            </TouchableOpacity>
        </View>
        {/* line for dividing each lesson item */}
        <View style={styles.lessonLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '95%',
      shadowColor: "rgba(0, 0, 0, 0.1)",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 2,
      marginTop: 8,
      marginBottom: Padding.p_base,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Padding.p_5xs,
    },
    title: {
      fontFamily: FontFamily.alataRegular,
      fontSize: FontSize.defaultBoldHeadline_size,
      lineHeight: 22,
      color: Color.labelColorDarkPrimary,
      textAlign: "left",
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: "#B5A3C2",
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: FontFamily.alataRegular,
      fontSize: FontSize.defaultBoldHeadline_size,
      color: "black",
    },
    lessonLine: {
      height: 1,
      marginHorizontal: Padding.p_5xs,
      marginTop: 15,
      borderBottomLeftRadius: Border.br_sm,
      borderBottomRightRadius: Border.br_sm,
      backgroundColor: "white",
    },
  });
  

export default LessonAvailabilityItem;
