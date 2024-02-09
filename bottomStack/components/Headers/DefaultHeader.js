import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 

export default function DefaultHeader({ title, profile=true }) {
    const createGroup = () => {
    }
  return (
    <View style={styles.wrapper}>
        <View style={ styles.profile }>
            <TouchableOpacity onPress={createGroup} style= {[ styles.button, { display: !profile ? 'none' : 'flex' } ]}>
            {/* <Ionicons name="ios-person-add-outline" size={20} color="black" /> */}
            <Text>K</Text>
            </TouchableOpacity>
            <Text style={ styles.title }>{title}</Text>
        </View>
    </View>
  )
}


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
        fontFamily: 'NotoBold',
    },
    button: {
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        marginRight: 20,
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