import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BellIcon from "../assets/icons/BellIcon";
import ChatIcon from "../assets/icons/ChatIcon";
import { FontSize, FontFamily, Color, Padding, Border, Gap, IconSize } from "../GlobalStyles";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Prelude Planner</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
          <BellIcon size={IconSize.iconDefault} />
        </TouchableOpacity>
        <ChatIcon size={IconSize.iconDefault} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.headerText,
    height: 74,
  },
  title: {
    fontSize: FontSize.header,
    fontFamily: FontFamily.alataRegular,
    color: Color.white,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.headerIcon,
  },
});

export default Header;
