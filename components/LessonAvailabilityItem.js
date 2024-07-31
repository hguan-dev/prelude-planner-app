import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LessonAvailabilityItem = ({ title, confirmation }) => {
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
        <View style={styles.lessonLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '95%',
      padding: Padding.p_5xs,
      shadowColor: "rgba(0, 0, 0, 0.1)",
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
      marginBottom: Padding.p_base,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Padding.p_5xs,
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
      paddingVertical: 10,
      borderRadius: 20,
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: FontFamily.alataRegular,
      fontSize: FontSize.defaultRegularSubheadline_size,
      color: "black",
    },
    lessonLine: {
      height: 1,
      marginHorizontal: Padding.p_5xs,
      marginTop: 10,
      borderBottomLeftRadius: Border.br_sm,
      borderBottomRightRadius: Border.br_sm,
      backgroundColor: "white",
    },
  });
  

export default LessonAvailabilityItem;
