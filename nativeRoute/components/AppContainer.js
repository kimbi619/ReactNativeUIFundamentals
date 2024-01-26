import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './auth/Login'
import Signup from './auth/Signup'

export default function AppContainer() {
    const [login_credentials, setLogin_credentials] = useState(null)
    const Stack = createStackNavigator()

  return (
    <Stack.Navigator style={styles.container} initialRouteName='Login'>
        <Stack.Screen name="Login"  component={Login} />
        <Stack.Screen name="Signup" options={ { headerShown: false} } component={Signup} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    }
})