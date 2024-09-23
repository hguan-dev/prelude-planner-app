import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Padding, Gap, IconSize }  from "../GlobalStyles";

import BellIcon from "../assets/icons/BellIcon";
import { GiftedChat } from "react-native-gifted-chat";
import BottomNav from "../components/BottomNav";
import CrossIcon from "../assets/icons/CrossIcon";

const Chat = ( { user, setUser }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])

      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        )
      }, [])
    
      return (
        <View style={styles.background}>
          <View style={styles.nameContainer}>
          <View style={styles.IconContainer}>
                <TouchableOpacity onPress={() => setUser(null)}>
                <CrossIcon size={IconSize.iconSmall} />
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>{user}</Text>
          </View>
          <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
              _id: 1,
          }}
          />
        </View>
      )
};

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
    IconContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: Gap.headerIcon,
    },
    nameContainer: {
        display: "flex",
        paddingVertical: Padding.larger,
        backgroundColor: Color.opacityGray,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    name: {
        fontSize: FontSize.header,
        fontFamily: FontFamily.alataRegular,
        color: Color.black,
    },
    IconContainer: {
        position: "absolute",
        left: Padding.navIcon,
    },
});

export default Chat;