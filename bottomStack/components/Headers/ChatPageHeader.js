import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const ChatPageHeader = ({ createGroup }) => {
    const navigation = useNavigation()

    const createGroupIn = () => {
        navigation.navigate('Home')
    }
    
  return (
    <View style={styles.wrapper}>
        <View style={ styles.profile }>
            <TouchableOpacity onPress={createGroup} style= { styles.button }>
            {/* <Ionicons name="ios-person-add-outline" size={20} color="black" /> */}
            <Text>K</Text>
            </TouchableOpacity>
            <Text style={ styles.title }>Discuss</Text>
        </View>
        <View style={ styles.right }>
            <TouchableOpacity onPress={createGroupIn} style= { [styles.button, styles.group] }>
                <FontAwesome name="group" size={20} color="black" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ChatPageHeader

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: '800'
    },
    button: {
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        width: 40,
        height: 40,
        borderRadius: 40/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    group: {
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
    }
})