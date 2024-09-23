import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Padding, Gap, IconSize }  from "../GlobalStyles";

import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import BellIcon from "../assets/icons/BellIcon";
import { GiftedChat } from "react-native-gifted-chat";
import BottomNav from "../components/BottomNav";
import CrossIcon from "../assets/icons/CrossIcon";
import AddIcon from "../assets/icons/AddIcon";

const ChatScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    return (
      <View style={styles.background}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Messages</Text>
            <View style={styles.IconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
                  <BellIcon size={IconSize.iconDefault} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <CrossIcon size={IconSize.iconSmall} />
                </TouchableOpacity>
            </View>
          </View>
        {!user ? <ChatList setUser={setUser}/> : <Chat user={user} setUser={setUser} />}
        <View style={styles.bottonNavContainer}>
          <BottomNav/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Color.darkPurple,
  },
  headerContainer: {
    paddingTop: Padding.pageHeaderTop,
    paddingHorizontal: Padding.headerText,
    marginBottom: Padding.larger,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: FontSize.header,
    fontFamily: FontFamily.alataRegular,
    color: Color.white,
  },
  IconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.headerIcon,
  },
  headerContainer: {
    paddingTop: Padding.pageHeaderTop,
    paddingHorizontal: Padding.headerText,
    marginBottom: Padding.larger,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: FontSize.header,
    fontFamily: FontFamily.alataRegular,
    color: Color.white,
  },
});

export default ChatScreen;