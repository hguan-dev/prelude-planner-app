import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";
import { BlurView } from "expo-blur";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Image
        style={styles.background}
        contentFit="cover"
        source={require("../assets/images/onboardbackground.png")}
      />
      <Text style={styles.title}>{`Welcome to Prelude Planner`}</Text>
      <View style={styles.floatingWindow}>
        <BlurView intensity={50} style={styles.floatingWindowBlur} />

        <View style={styles.cardContent}>
          <Text style={styles.miniTitle}>
            Instrumental Studio Organization System
          </Text>
          <Text style={styles.slogan}>
            {`You got the music, \nwe got the logistics.`}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <View style={styles.loginButton}>
              <Text style={styles.loginText}>Log In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    top: "-100%",
    left: "-175%",
    width: "300%",
    height: "500%",
    position: "absolute",
  },
  title: {
    marginTop: "20%",
    marginLeft: "10%",
    fontSize: 37,
    textAlign: "left",
    width: 299,
    color: Color.white,
    fontFamily: FontFamily.alataRegular,
  },
  floatingWindow: {
    padding: 30,
    borderRadius: 30,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: 1,
    top: "100%",
    width: "70%",
    marginHorizontal: "auto",
    // flexDirection: "row",
    // justifyContent: "center",
    overflow: "hidden",
  },
  floatingWindowBlur: {
    ...StyleSheet.absoluteFillObject,
  },
  miniTitle: {
    fontSize: 20,
    lineHeight: 25,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.alataRegular,
  },
  slogan: {
    fontSize: 12,
    color: Color.white,
    marginTop: 10,
    textAlign: "center",
    fontFamily: FontFamily.alataRegular,
  },
  loginText: {
    fontSize: 15,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.alataRegular,
  },
  loginButton: {
    borderRadius: 35,
    backgroundColor: "rgba(151, 169, 246, 0.5)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    paddingLeft: 50,
    paddingTop: 13,
    paddingRight: 50,
    paddingBottom: 13,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    // justifyContent: "center",
    // alignItems: "center",
    // the justification is bogged on ipad. probably because
    // the parent element is not 100% sized
    // marginBottom: 100
  },
});

export default OnboardingScreen;
