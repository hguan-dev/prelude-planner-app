import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Color, FontFamily, FontSize, Padding, Gap, IconSize }  from "../GlobalStyles";

const ChatList = ({ setUser }) => {
    const navigation = useNavigation();
    const chatUsers = [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
        { id: '3', name: 'Charlie' },
        { id: '4', name: 'Diana' },
        { id: '5', name: 'Eve' },
      ];
    
    const openChat = (name) => {
        navigation.navigate('Chat', { userName: name });
    };

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={() => setUser(item.name)}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={chatUsers}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.darkPurple,
      paddingTop: 20,
    },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    name: {
      fontSize: FontSize.medium,
      fontFamily: FontFamily.alataRegular,
      color: Color.white,
    },
  });

export default ChatList;
