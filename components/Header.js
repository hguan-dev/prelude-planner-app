import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BellIcon from "../assets/icons/BellIcon";
import ChatIcon from "../assets/icons/ChatIcon";
import { FontSize, FontFamily } from "../GlobalStyles";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Prelude Planner</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationScreen")}
        >
          <BellIcon size={28} />
        </TouchableOpacity>
        <ChatIcon size={28} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    height: 74,
  },
  title: {
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.alataRegular,
    color: "#FFFFFF",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

export default Header;
