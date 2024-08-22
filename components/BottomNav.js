import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import HomeIcon from "../assets/icons/HomeIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import { Color, Border, Padding, Gap, IconSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const BottomNav = ({ onPlusPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabbar}>
      <View style={styles.iconContainer}>
        <HomeIcon size={IconSize.iconDefault} style={styles.icon} />
        <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
          <CalendarIcon size={IconSize.iconDefault} style={styles.icon} />
        </TouchableOpacity>
        <SearchIcon size={IconSize.iconDefault} style={styles.icon} />
        <ProfileIcon size={IconSize.iconDefault} style={styles.icon} />
      </View>
      <View style={styles.plusIconContainer}>
        <View style={styles.plusIcon}>
          <PlusIcon size={IconSize.navPlusIcon} onPress={onPlusPress}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: Border.hugeRadius,
    borderTopRightRadius: Border.hugeRadius,
    backgroundColor: Color.darkPurple,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Color.mediumPurple,
    borderWidth: Border.defaultWidth,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    margin: Gap.navIcon,
  },
  plusIcon: {
    marginLeft: 6, // hard coded cuz svg off center
  },
  plusIconContainer: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 45,
  },
});

export default BottomNav;
