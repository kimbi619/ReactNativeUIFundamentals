import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import HomePageHeader from './Headers/HomePageHeader';


import { Ionicons, Feather} from 'react-native-vector-icons';
import ChatPageHeader from './Headers/ChatPageHeader';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Chats from './Screens/Chats';
import DefaultHeader from './Headers/DefaultHeader';
import Notification from './Screens/Notification';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function HomeTabs() {

  return (
    <Tab.Navigator
      initialRouteName='Chats'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'settings-outline';
          }else if (route.name === 'Chats') {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
          }else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'ios-notifications-outline';
          }else if (route.name === 'Posts') {
            iconName = focused ? 'ios-logo-ionic' : 'ios-logo-ionic';
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#bbb',
        tabBarStyle: {
          padding: 8,
          height: 65
        },
      })
    }
    >
        <Tab.Screen 
        name="Home" 
        options={{ headerTitle: () => <HomePageHeader />, title: '' }}
        component={HomeScreen} 
      />

      <Tab.Screen name="Notifications" options={{ headerTitle: () => <DefaultHeader title="Notifications" />, title: '' }} component={Notification} />
      <Tab.Screen 
        name="Chats" 
        options={{
          headerTitle: () => <ChatPageHeader />, title: ''
        }} 
        component={Chats}  
      />

      {/* <Tab.Screen name="Posts" options={{ headerTitle: () => <DefaultHeader title="Posts" />, title: '' }} component={Posts} /> */}
      {/* <Tab.Screen name="Settings" options={{ headerShown: false, title: '' }} component={Settings} /> */}
    </Tab.Navigator>
  )
}


export default function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
            headerTitleStyle: { fontFamily: 'NotoBold' },
            gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            >
                <Stack.Screen name="Homes" options={{ headerShown: false }}  component={HomeTabs} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
  })