import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotificationScreen = () => {
    const navigation = useNavigation();

    return (
        //Placeholders until I can see UI part 
        <View style={styles.content}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text>Notification Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    //Placeholders until I can see UI part 
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
    },
    closeButtonText: {
        fontSize: 24,
        color: '#000',
    },
});

export default NotificationScreen;
