import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import moment from "moment";
import eventsData from "../assets/data/events.json";
import EventItem from "./EventItem";
import RadialGradientCircle from "../assets/images/RadialGradientCircle";
// prob should change to icons later since pngs are a bit blurry
import leftArrow from '../assets/images/arrow-square-left.png'
import rightArrow from '../assets/images/arrow-square-right.png'
const CalendarMonthView = () => {
    const [currentDate, setCurrentDate] = useState(moment());
    // selected date (default current date)
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

    // days for calendar
    const firstDayOfMonth = moment(selectedMonth).startOf("month").day(); // first day changes based on month so use selected month as the curr moment
    const daysInMonth = selectedMonth.daysInMonth(); // num of days changes based on selected month
    const lastDayinPrevMonth = selectedMonth.clone().subtract(1, 'month').endOf('month');
    const daysArray =  Array(daysInMonth).fill().map((day, i) => i + 1); // array of days in current month
    const inactivePrevDaysArray = Array.from({ length: firstDayOfMonth}, (day, i) => lastDayinPrevMonth.date() - i).reverse();
    const inactiveNextDaysArray = Array.from({ length: 42 - (firstDayOfMonth + daysArray.length)}, (day, i) => i + 1)
    
    //clicking a different date on calendar (seperate logic )
    const handlePrevDate = (day) => {
        setSelectedDate(selectedMonth.clone().subtract(1, 'month').date(day))
    }
    
    const handleDate = (day) => {
        setSelectedDate(selectedMonth.clone().date(day));
    }

    const handleNextDate = (day) => {
        setSelectedDate(selectedMonth.clone().add(1, 'month').date(day))
    }

    // events for selected/current date, ADD LATER
    const[events, setEvents] = useState([])

    // filtered events based on selected date (default current date's events)
    useEffect(() => {
        const selectedDateEvents = eventsData.filter((event) => moment(event.date).isSame(selectedDate, 'day'))
        setEvents(selectedDateEvents);
      }, [selectedDate]);
    
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
                {inactivePrevDaysArray.map(day => {
                    const isSelectedDate = selectedDate.date() === day && selectedDate.isSame(selectedMonth.clone().subtract(1, 'month'), 'month');
                    const hasEvents = eventsData.some(event => moment(event.date).isSame(selectedMonth.clone().subtract(1, 'month').date(day), 'day'));
                    return (
                    <TouchableOpacity 
                        key={day} 
                        onPress={() => handlePrevDate(day)} 
                        style={[
                            styles.dateCell,
                            isSelectedDate ? styles.selectedDateCell : null]}
                            >
                        <Text style={styles.inactiveDateText}>{day}</Text>
                        {hasEvents && <View style={styles.eventDot} />}
                    </TouchableOpacity>
                    );
                })}
                {/* render cells for days in the month */}
                {daysArray.map(day => {
                    const isCurrentDate = currentDate.isSame(selectedMonth.clone().date(day), 'day');
                    const isSelectedDate = selectedDate.date() === day && selectedDate.isSame(selectedMonth, 'month');
                    const hasEvents = eventsData.some(event => moment(event.date).isSame(selectedMonth.clone().date(day), 'day'));
                    return (
                    <TouchableOpacity 
                        key={day} 
                        onPress={() => handleDate(day)} 
                        style={[
                            styles.dateCell,
                            isSelectedDate ? styles.selectedDateCell : null,
                            // greyed out color if current date is not selected
                            isCurrentDate && !isSelectedDate ? styles.currentDateCell : null]}
                            >
                        <Text style={styles.dateText}>{day}</Text>
                        {hasEvents && <View style={styles.eventDot} />}
                    </TouchableOpacity>
                    );
                })}
                {/* render cells for days AFTER first day of month */}
                {inactiveNextDaysArray.map(day => {
                    const isSelectedDate = selectedDate.date() === day && selectedDate.isSame(selectedMonth.clone().add(1, 'month'), 'month');
                    const hasEvents = eventsData.some(event => moment(event.date).isSame(selectedMonth.clone().add(1, 'month').date(day), 'day'));

                    return (
                    <TouchableOpacity 
                        key={day} 
                        onPress={() => handleNextDate(day)} 
                        style={[
                            styles.dateCell,
                            isSelectedDate ? styles.selectedDateCell : null]}
                            >
                        <Text style={styles.inactiveDateText}>{day}</Text>
                        {hasEvents && <View style={styles.eventDot} />}

                    </TouchableOpacity>
                    );
                })}
            </View>
            <View style={styles.eventsContainer}>
                <View style={styles.eventList}>
                    <View style={styles.radialBackground}>
                        <RadialGradientCircle
                        stop1={Color.niceBlue}
                        stop2={Color.purplyBlue}
                        />
                    </View>
                    {events.map((event) => (
                        <EventItem
                        key={event.id}
                        // onPress={() => setOpenedEventId(event.id)}
                        event={event}
                        />
                    ))}
                </View>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    calendarContainer: {
        paddingBottom: "25%",
    },
    monthSelectorContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Padding.larger,
        paddingHorizontal: Padding.headerText,
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
        paddingHorizontal: 17,
    },
    dayOfWeekText: {
        width: "14.28%", // 100% divded by 7 / num of days in a week for even width across screen
        textAlign: "center",
        fontFamily: FontFamily.alataRegular,
        color: Color.white,
        fontSize: FontSize.small,
        marginBottom: Padding.larger,
    },
    datesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 17,
        marginBottom: 10,
    },
    dateCell: {
        width: "14.28%",
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 4,
    },
    selectedDateCell: {
        backgroundColor: Color.lightPurple,
        borderRadius: Border.defaultRadius,
    },
    currentDateCell: {
        backgroundColor: Color.grayPurple,
        borderRadius: Border.defaultRadius,  
    },
    dateText: {
        color: Color.white,
        fontFamily: FontFamily.alataRegular,
        fontSize: FontSize.medium,
    },
    inactiveDateText: {
        color: "#8F9BB3",
        fontFamily: FontFamily.alataRegular,
        fontSize: FontSize.medium,
    },
    eventDot: {
        position: "absolute",
        top: 38,
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: Color.lightSkyBlue,
        
    },
    eventList: {
        alignItems: "center",
        borderRadius: Border.defaultRadius,
        overflow: "hidden",
        marginTop: 7.5,
        marginHorizontal: Padding.larger,
    },
    radialBackground: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
});

export default CalendarMonthView;