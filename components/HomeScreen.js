import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const clickHandler = () => {

  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {navigation.push('Camera')} } style={styles.card}>
        <Text style={styles.title}>Scan results</Text>
        <Text style={styles.card_description}>Name of the file</Text>
      </Pressable>
      <Pressable
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
            <AntDesign name="plus" size={24} color="#1598DB" />
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    card: {
      width: '100%',
      height: 'auto',
      minHeight: 100,
      backgroundColor: '#1598DB',
      borderRadius: 8,
      padding: 15,
    },
    title: {
      color: '#fff',
      textTransform: 'uppercase',
      fontFamily: 'Roboto-Regular',
    }, 
    card_description: {
      color: '#fff',
      fontFamily: 'Roboto-Light',
    },
    touchableOpacityStyle: {
      position: 'absolute',
      width: 70,
      height: 70,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
      backgroundColor: '#fff',

      shadowColor: "#0009",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.95,
      shadowRadius: 5,
      elevation: 2,
    },
})
export default HomeScreen;
