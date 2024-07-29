import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color } from "../GlobalStyles";

const OnboardingScreen = () => {
  return (
    <LinearGradient
      style={styles.onboardingScreen}
      locations={[0, 1]}
      colors={["#767CB2", "#5C609B"]}
    >
      <Image
        style={styles.onboardbackground}
        contentFit="cover"
        source={require("../assets/images/onboardbackground.png")}
      />
      <View style={[styles.card, styles.cardFlexBox]}>
        <View>
          <Text
            style={[styles.instrumentalStudioOrganizati, styles.youGotTheTypo]}
          >
            Instrumental Studio Organization System
          </Text>
          <Text
            style={[styles.youGotThe, styles.youGotTheTypo]}
          >{`You got the music, 
          we got the logistics.`}</Text>
        </View>
        <View style={[styles.button, styles.cardFlexBox]}>
          <Text style={styles.logIn}>Log In</Text>
        </View>
      </View>
      <Text style={styles.title}>{`Welcome to Prelude Planner`}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    
  },
  youGotTheTypo: {
    textShadowRadius: 54.06,
    textShadowOffset: {
      width: 0,
      height: 9.009259223937988,
    },
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    width: 252,
    textAlign: "center",
    fontFamily: FontFamily.alataRegular,
    letterSpacing: 0,
  },
  onboardbackground: {
    top: -70,
    left: -753,
    width: 1429,
    height: 1086,
    position: "absolute",
  },
  instrumentalStudioOrganizati: {
    fontSize: 20,
    lineHeight: 25,
    color: Color.labelColorDarkPrimary,
  },
  youGotThe: {
    fontSize: 12,
    lineHeight: 16,
    color: Color.labelColorDarkSecondary,
    marginTop: 5.4,
  },
  logIn: {
    fontSize: 15,
    lineHeight: 20,
    width: 115,
    height: 20,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
  },
  button: {
    borderRadius: 34,
    backgroundColor: "rgba(151, 169, 246, 0.5)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1.1,
    width: 198,
    flexDirection: "row",
    paddingLeft: 18,
    paddingTop: 13,
    paddingRight: 19,
    paddingBottom: 12,
    marginTop: 27,
  },
  card: {
    top: 454,
    borderRadius: 27,
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: 0.9,
    padding: 27,
    left: 42,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
  },
  title: {
    top: 77,
    fontSize: 36,
    textAlign: "left",
    width: 299,
    height: 100,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    left: 42,
    position: "absolute",
  },
  onboardingScreen: {
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 3.603703737258911,
    },
    shadowRadius: 9.01,
    elevation: 9.01,
    shadowOpacity: 1,
    borderRadius: 45,
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default OnboardingScreen;
