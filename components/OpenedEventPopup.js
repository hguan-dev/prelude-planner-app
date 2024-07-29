import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";
import RadialGradientCircle from "../assets/images/BackgroundGradient";

const OpenedEventPopup = ({ setPopupVisible, event }) => {
  return (
    <View style={styles.openedEventFullScreenPopup}>
      <View style={styles.circleContainer}>
        <RadialGradientCircle style={[styles.circle]} />
      </View>
      <View style={styles.optionButtons}>
        <View style={styles.meatballIcon}>
          <Image
            style={styles.miniIcon}
            contentFit="cover"
            source={require("../assets/images/OpenedEventPopupImages/meatballs-menu.png")}
          />
        </View>

        <TouchableOpacity onPress={setPopupVisible}>
          <View style={styles.exitIcon}>
            <Image
              style={styles.miniIcon}
              contentFit="cover"
              source={require("../assets/images/OpenedEventPopupImages/frame-4998.png")}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.titleFont}>{event.title}</Text>
      {/* row*/}
      <View style={styles.labelRow}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/images/OpenedEventPopupImages/user.png")}
        />
        <Text style={styles.labelFont}>{event.creator}</Text>
      </View>

      <View style={styles.labelRow}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/images/OpenedEventPopupImages/time.png")}
        />
        <Text style={styles.labelFont}>{event.time}</Text>
      </View>
      <View style={styles.labelRow}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/images/OpenedEventPopupImages/pin-alt.png")}
        />
        <Text style={styles.labelFont}>{event.location}</Text>
      </View>

      <View style={styles.labelRow}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/images/OpenedEventPopupImages/file-dock.png")}
        />
        <Text style={styles.labelFont}>{event.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  openedEventFullScreenPopup: {
    width: "100%",
    height: "100%",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  titleFont: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.alata,
    color: Color.labelColorDarkPrimary,
    marginBottom: Padding.p_sm,
  },
  labelFont: {
    marginLeft: Padding.p_2xs,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.alata,
    color: Color.labelColorDarkPrimary,
  },
  icon: {
    width: 34,
    height: 34,
  },
  labelRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    width: "75%",
  },
  exitIcon: {

  },
  meatballIcon: {
    marginRight: 10,
  },
  miniIcon: {
    width: 20,
    height: 20,
  },
  circleContainer: {
    position: "absolute",
    top: -25, // Adjust this value to position the circle
    left: 0,
    right: 75,
    alignItems: "center",
  },
  circle: {
    width: 300,
    height: 300,
  },
  optionButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "85%",
  },
});

export default OpenedEventPopup;
