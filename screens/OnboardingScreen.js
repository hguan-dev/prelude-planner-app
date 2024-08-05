import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { BlurView } from 'expo-blur';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Image
                style={styles.background}
                contentFit="cover"
                source={require("../assets/images/onboardbackground.png")}
            />
            <View style={styles.floatingWindow}>
                <BlurView intensity={50} style={styles.floatingWindowBlur} />

                <View style={[styles.cardContent, styles.cardFlexBox]}>
                <Text
                    style={[styles.instrumentalStudioOrganizati, styles.youGotTheTypo]}
                >
                    Instrumental Studio Organization System
                </Text>
                <Text
                    style={[styles.youGotThe, styles.youGotTheTypo]}
                    >{`You got the music, \nwe got the logistics.`}
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <View style={[styles.button, styles.cardFlexBox]}>
                        <Text style={styles.logIn}>Log In</Text>
                    </View>
                </TouchableOpacity>

                </View>
            </View>
            
            <Text style={styles.title}>{`Welcome to Prelude Planner`}</Text>
        </View>
  );
};

const styles = StyleSheet.create({
    background: {
        top: "-50%",
        left: "-175%",
        width: "300%",
        height: "300%",
        position: "absolute",
      },
    floatingWindow: {
        borderRadius: 30,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        top: "100%",
        height: "50%",
        width: "70%",
        left: "15%",
        justifyContent: "center",
        overflow: "hidden",
    },
    floatingWindowBlur: {
        ...StyleSheet.absoluteFillObject,
      },
    cardFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    youGotTheTypo: {
        textShadowRadius: 0,
        textShadowOffset: {
        width: 0,
        height: 0.5,
        },
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        width: 252,
        textAlign: "center",
        fontFamily: FontFamily.alataRegular,
        letterSpacing: 0,
    },
    instrumentalStudioOrganizati: {
        fontSize: FontSize.large,
        lineHeight: 25,
        color: Color.white,
    },
    youGotThe: {
        fontSize: FontSize.small,
        lineHeight: 16,
        color: Color.opacityGray,
        marginTop: 5.4,
    },
    logIn: {
        fontSize: FontSize.small,
        lineHeight: 20,
        width: 115,
        height: 20,
        textAlign: "center",
        letterSpacing: 0,
        color: Color.white,
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

    cardContent: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        top: 77,
        fontSize: FontSize.huge,
        textAlign: "left",
        width: 299,
        height: 150,
        color: Color.white,
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
