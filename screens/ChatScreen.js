import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ChatScreen = () => {
  return (
    <View style={styles.chatScreenContainer}>
      <Text style={styles.chatScreenHeader}>Chat Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatScreenContainer: {
    flex: 1,
    backgroundColor: Color.white, 
    justifyContent: "center",
    alignItems: "center", 
    padding: Padding.default,
  },
  chatScreenHeader: {
    fontSize: FontSize.h1, 
    fontFamily: FontFamily.alataRegular, 
    color: Color.black, 
  },
});

export default ChatScreen;
