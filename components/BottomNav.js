import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import HomeIcon from "../assets/icons/HomeIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { Color, Border, Gap, IconSize } from "../GlobalStyles";
import ChatIcon from "../assets/icons/ChatIcon";

const BottomNav = () => {
  const navigation = useNavigation();

  const currentRouteName = useNavigationState(state => state.routes[state.index].name);

  const isProfileScreen = currentRouteName === "ProfileScreen";
  const isHomeScreen = currentRouteName === "HomeScreen";
  const isCalendarScreen = currentRouteName === "CalendarScreen";
  const isChatScreen = currentRouteName === "ChatScreen";

  return (
    <View style={styles.tabbar}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={[
          styles.touchable, 
          styles.circleButton, 
          isHomeScreen && styles.pressedTouchable
        ]}>
          <HomeIcon size={IconSize.iconDefault} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("CalendarScreen")} style={[
          styles.touchable, 
          styles.circleButton, 
          isCalendarScreen && styles.pressedTouchable
        ]}>
          <CalendarIcon size={IconSize.iconDefault} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")} style={[
            styles.touchable, 
            styles.circleButton, 
            isChatScreen && styles.pressedTouchable
        ]}>
          <ChatIcon size={IconSize.iconDefault} />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress = {() => navigation.navigate("ProfileScreen")}
          style = {[
            styles.touchable, 
            styles.circleButton, 
            isProfileScreen && styles.pressedTouchable
        ]}
        >
          <ProfileIcon size = {IconSize.iconDefault} style = {styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: Border.hugeRadius,
    borderTopRightRadius: Border.hugeRadius,
    backgroundColor: Color.darkPurple,
    borderColor: Color.mediumPurple,
    borderWidth: Border.defaultWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    marginLeft: 6, 
  },
  plusIconContainer: {
    position: "absolute",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15, 
  },
  circleButton: { 
    width: 50,
    height: 50, 
    borderRadius: 25,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedTouchable: {
    backgroundColor: Color.lightPurple, // Use your desired lighter purple color
  },
});

export default BottomNav;
