import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './components/HomeScreen';
import CameraWrapper from './components/CameraWrapper';
import ImagePreview from './components/ImagePreview';
export default function App() {
  const Stack = createStackNavigator();

  return (
        <NavigationContainer>
          <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#17B169" style="light" />
              <Stack.Navigator>
                <Stack.Screen name="Home" component={ HomeScreen } />
                <Stack.Screen name="Camera" component={ CameraWrapper } options={{ headerShown: false }} />
                <Stack.Screen name="ImagePreview" component={ImagePreview} options={{headerShown: false}}/>
              </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  camera: {
    // height: 300,
    flex: 1,
  },
  buttonContainer:{
    alignSelf:'center'
  },
  preview:{
    flex:1,
    alignSelf:'stretch'
  }
});
