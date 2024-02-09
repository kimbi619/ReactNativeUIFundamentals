import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function HomePageHeader({ showMainMenu }) {

    return (
    <View style={ styles.container }>
      <View style={ styles.center }>
        <Text style={ styles.title }>Rising Tide</Text>
      </View>
      <Pressable onPress={ showMainMenu }>
          <Ionicons name="grid-outline" size={24} color="black" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
    },
    title: {
        fontFamily: 'NotoBold',
        fontSize: 17,
        marginLeft: -20
    }
})