import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import HomeIcon from "../assets/icons/HomeIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Gap, IconSize } from "../GlobalStyles";

const BottomNav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabbar}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.touchable}>
          <HomeIcon size={IconSize.iconDefault} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("CalendarScreen")} style={styles.touchable}>
          <CalendarIcon size={IconSize.iconDefault} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")} style={styles.touchable}>
          <SearchIcon size={IconSize.iconDefault} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} style={styles.touchable}>
          <ProfileIcon size={IconSize.iconDefault} style={styles.icon} />
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    marginLeft: 6, 
  },
  plusIconContainer: {
    position: 'absolute',
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15, 
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomNav;
