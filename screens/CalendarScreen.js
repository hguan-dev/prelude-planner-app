import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Pressable,
  } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

import Header from "../components/Header";
import CalendarMonthView from "../components/CalendarMonthView";
import BottomNav from "../components/BottomNav";


const CalendarScreen = () => {
    const navigation = useNavigation();
    const [calendarView, setCalendarView] = useState("month")

    return (
        <View style={styles.calendarScreenContainer}>
            <Header />
            <View style={styles.filterIconContainer}>
                <Text style={styles.calendarHeader}>Schedule</Text>
                {/* temp placeholder for the calendar filter */}
                <Text style={styles.calendarHeader}>Filter</Text>
            </View>  
            <View>
                 <CalendarMonthView />
            </View>
            <View style={styles.bottonNavContainer}>
                <BottomNav 
                    onPlusPress={() => setNewEventScreenVisible(true)}
                />
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    calendarScreenContainer: {
        flex: 1,
        backgroundColor: Color.darkPurple,
        paddingTop: Padding.headerTop,
    }, 
    filterIconContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: Padding.default,
        marginBottom: Padding.larger,
        paddingHorizontal: Padding.headerText,
    },
    calendarHeader: {
        fontSize: FontSize.subheader,
        fontFamily: FontFamily.alataRegular,
        color: Color.white,
    },
    bottonNavContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
});

export default CalendarScreen;