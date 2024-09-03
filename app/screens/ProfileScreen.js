import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { FontFamily, Color, IconSize, Padding, Gap, FontSize } from "../GlobalStyles";
import ProfileHeader from "../components/ProfileHeader";
import BottomNav from "../components/BottomNav";

const ProfileScreen = () => {
    const firstName = "FirstName";
    const lastName = "LastName";

    return (
        <View style={styles.home}>
            <ProfileHeader />
            <View style={styles.profileDesc}>
                <View style={styles.circle}>
                    <Text style={styles.initials}>AA</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.generalFont}>Welcome,</Text>
                    <Text style={styles.nameText}>{firstName}</Text>
                    <Text style={styles.nameText}>{lastName}</Text>
                </View>
            </View>
            <View style = {styles.bottomDesc}>
                <View style= {styles.bottomTextContainer}>
                    <Text style = {styles.generalFont}>Profile:</Text>
                    <Text style = {styles.subtext}>Email: FirstLast@gmail.com</Text>
                    <Text style = {styles.subtext}>Date Joined: Aug. 15, 2024</Text>
                    <Text style = {styles.subtext}>Manage Account</Text>
                </View>
            </View>
            {/* Manage User Button */}
            <View style = {styles.bottomDesc}>
                <View style = {styles.bottomTextContainer}>
                    <Text style = {styles.generalFont}>Settings:</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.manageUserButton}>
                <Text style = {styles.manageUserButtonText}>Manage User</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.manageUserButton}>
            <Text style = {styles.manageUserButtonText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.manageUserButton}>
                <Text style = {styles.manageUserButtonText}>Log Off</Text>
            </TouchableOpacity>
            <View style={styles.bottomNavContainer}>
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: Padding.default,
        backgroundColor: Color.darkPurple,
        marginLeft: "5%",
    },
    bottomDesc: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: Padding.larger,
        backgroundColor: Color.darkPurple,
        marginLeft: "5%",
    },
    textContainer: {
        justifyContent: 'center',
        marginLeft: Padding.larger,
    },
    bottomTextContainer: {
        justifyContent: 'flex-start',
        marginLeft: Padding.default,
    },
    generalFont: {
        fontSize: FontSize.header,
        fontFamily: FontFamily.alataRegular,
        color: Color.white,
    },
    nameText: {
        fontSize: FontSize.huge,
        fontFamily: FontFamily.alataRegular,
        color: Color.white,
    },
    subtext: {
        fontSize: FontSize.subheader,
        fontFamily: FontFamily.alataRegular,
        color: Color.white,
        marginLeft: "5%"
    },
    circle: {
        width: 150,  // Width and height of the circle
        height: 150,
        borderRadius: 75,  // Half of the width/height to make it a circle
        backgroundColor: Color.white,  // White background color
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Gap.medium, 
        marginBottom: Gap.headerIcon, 
    },
    initials: {
        color: Color.black,  // Black text color
        fontSize: FontSize.gigantic,
        fontFamily: FontFamily.alataRegular,
    },
    manageUserButton: {
        marginTop: Gap.large, // Space above the button
        marginHorizontal: Padding.pageHeaderTop,
        backgroundColor: Color.white,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: Padding.larger
    },
    manageUserButtonText: {
        color: Color.darkPurple,
        fontSize: FontSize.large,
        fontFamily: FontFamily.alataRegular,
    },
});

export default ProfileScreen;