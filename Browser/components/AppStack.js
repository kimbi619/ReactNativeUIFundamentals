import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBrowser from './browser/AppBrowser'

export default function AppStack() {
  return (
    <View>
        <AppBrowser />
    </View>
  )
}

const styles = StyleSheet.create({})