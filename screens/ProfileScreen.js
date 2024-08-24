import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from "react-native";
import { FontFamily, Color, IconSize, Padding, Gap, FontSize} from "../GlobalStyles";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";


const ProfileScreen = () => {

    return (
        <View style = {styles.home}>
            <Header />
            <View style={styles.profileDesc}>
                <View style={styles.circle}>
                    <Text style={styles.initials}>AA</Text>
                </View>
                <Text style={styles.profileText}>Name: &lt;description&gt;</Text>
                <Text style={styles.profileText}>Email: &lt;description&gt;</Text>
                <Text style={styles.profileText}>Year: &lt;description&gt;</Text>
            </View>
            <View style = {styles.bottomNavContainer}>
                <BottomNav />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: Color.darkPurple,
        paddingTop: Padding.headerTop,
    },
    bottomNavContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    profileDesc: {
        padding: Padding.default,
        backgroundColor: Color.darkPurple,
        marginLeft: "5%"
    },
    profileText: {
        fontSize: FontSize.subheader,
        fontFamily: FontFamily.alataRegular,
        color: Color.white,
        marginBottom: Gap.headerIcon 
    },
    circle: {
        width: 100,  // Width and height of the circle
        height: 100,
        borderRadius: 50,  // Half of the width/height to make it a circle
        backgroundColor: Color.white,  // White background color
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Gap.medium, 
        marginBottom: Gap.headerIcon, // Space between the circle and text
    },
    initials: {
        color: Color.black,  // Black text color
        fontSize: FontSize.huge,
        fontFamily: FontFamily.alataRegular,
    },
});

export default ProfileScreen