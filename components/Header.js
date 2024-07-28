import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import BellIcon from "../assets/icons/BellIcon";
import ChatIcon from "../assets/icons/ChatIcon";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Prelude Planner</Text>
      <View style={styles.iconsContainer}>
        <BellIcon size={28} style={styles.icon} />
        <ChatIcon size={28} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Padding.p_5xs,
    height: 74, 
  },
  title: {
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.alataRegular,
    color: '#FFFFFF',
    marginHorizontal: 14,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 100,
  },
  icon: {
    marginHorizontal: 20,
  },
});

export default Header;
