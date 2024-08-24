import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import moment from "moment";
import eventsData from "../assets/data/events.json";
import RadialGradientCircle from "../assets/images/RadialGradientCircle";
// import { MaterialIcons } from '@expo/vector-icons';
import leftArrow from '../assets/images/arrow-square-left.png'
import rightArrow from '../assets/images/arrow-square-right.png'
const CalendarMonthView = () => {
    // current date
    const [currentDate, setCurrentDate] = useState(moment());
    // selected date
    const [selectedDate, setSelectedDate] = useState(moment());
    // selected month
    const [selectedMonth, setSelectedMonth] = useState(moment());
    // arrows to switch months
    const handleMonth = (direction) => {
        const newMonth = selectedMonth.clone();
        
        if (direction === 'left') {
            setSelectedMonth(newMonth.subtract(1, 'month'));
        } else if (direction === 'right') {
            setSelectedMonth(newMonth.add(1, 'month'));
        }
    };
    
    // events for selected/current date, ADD LATER
    const[events, setEvents] = useState([])

    // days for calendar
    const daysInMonth = selectedMonth.daysInMonth(); // num of days changes based on selected month
    const daysArray =  Array(daysInMonth).fill().map((day, i) => i + 1);
    const firstDayOfMonth = moment(selectedMonth).startOf("month").day(); // first day changes based on month so use selected month as the curr moment

    //clicking a different date on calendar
    const handleDate = (day) => {
        setSelectedDate(moment(currentDate).date(day));
    }
    return ( 
        <View style={styles.calendarContainer}>
            {/* MONTH AND ARROWS  */}
            <View style={styles.monthSelectorContainer}>
                {/* left arrow */}
                <TouchableOpacity onPress={() => handleMonth('left')}>
                    <Image source={leftArrow} style={styles.monthButton} />
                </TouchableOpacity>
                {/* current month */}
                <Text style={styles.selectedMonth}>{selectedMonth.format('MMMM YYYY') }</Text>
                {/* right arrow */}
                <TouchableOpacity onPress={() => handleMonth('right')}>
                    <Image source={rightArrow} style={styles.monthButton} />
                </TouchableOpacity>
            </View>
            {/* DAYS OF MONTH  */}
            <View style={styles.daysContainer}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <Text key={index} style={styles.dayOfWeekText}>{day}</Text>
                ))}
            </View>
            {/* SPECIFIC DATES FOR EACH MONTH */}
            <View style={styles.datesContainer}>
                {/* render cells for days BEFORE first day of month */}
                {Array(firstDayOfMonth).fill().map((day, i) => (
                    <View key={i} style={styles.emptyDateCell} />
                ))}
                {/* render cells for days in the month */}
                {daysArray.map(day => (
                    <TouchableOpacity 
                        key={day} 
                        onPress={() => handleDate(day)} 
                        style={styles.dateCell}
                    >
                        <Text style={styles.dateText}>{day}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            
        </View>
        
    );
};

const styles = StyleSheet.create({
    calendarContainer: {
        paddingHorizontal: Padding.headerText, // padding for width of calendar
    },
    monthSelectorContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Padding.larger,
    },
    selectedMonth: {
        textAlign: "center",
        fontSize: FontSize.subheader,
        fontFamily: FontFamily.alataRegular,
        color: Color.white,
    },
    daysContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dayOfWeekText: {
        width: "14.28%", 
        textAlign: "center",
        fontFamily: FontFamily.alataRegular,
        color: Color.white,
        fontSize: FontSize.small,
    },
    datesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    emptyDateCell: {
        width: "14.28%",
        height: 40, // Same height as dateCell
    },
    dateCell: {
        width: "14.28%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    selectedDateCell: {
        backgroundColor: Color.lightPurple,
        borderRadius: Border.br5,
    },
    dateText: {
        color: Color.white,
        fontFamily: FontFamily.alataRegular,
        fontSize: FontSize.medium,
    },
});

export default CalendarMonthView;