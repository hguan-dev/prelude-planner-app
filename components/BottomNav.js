import * as React from "react";
import { StyleSheet, View } from "react-native";
import HomeIcon from "../assets/icons/HomeIcon"; 
import CalendarIcon from "../assets/icons/CalendarIcon";
import SearchIcon from "../assets/icons/SearchIcon"; 
import ProfileIcon from "../assets/icons/ProfileIcon";
import PlusIcon from "../assets/icons/PlusIcon";

import { Color, Border, Padding } from "../GlobalStyles";

const BottomNav = () => {
  return (
    <View style={styles.tabbar}>
      <View style={styles.iconContainer}>
        <HomeIcon size={28} style={styles.icon} />
        <CalendarIcon size={28} style={styles.icon} />
        <View style={styles.plusIcon}>
          <PlusIcon size={115} />
        </View>
        <SearchIcon size={28} style={styles.icon} />
        <ProfileIcon size={28} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    shadowColor: "rgba(41, 39, 130, 0.1)",
    shadowOffset: { width: 0, height: -5 },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#27153D",
    borderWidth: 1.5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    marginHorizontal: 20
  },
  plusIcon: {
    position: "absolute",
    bottom: 10,
    marginHorizontal: 100,
    zIndex: 1
  }
});

export default BottomNav;
