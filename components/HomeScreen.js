import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import ImagePreview from "./ImagePreview";
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { Constants } from "expo-constants";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  useEffect( ()=>{
    (async ()=>{
      if(Platform.OS !== 'web'){
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status !== 'granted'){
          alert('Permission Denied')
        }
      }
    })
  }, []);

  const clickHandler = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[9,16],
      quality:1
    });
    if(!result.canceled){
      setImage(result.assets[0].uri)
      const imageUri = result.assets[0].uri
      
    }
  }
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
  
  return (
    <View style={styles.container}>
      {image!==null ?<ImagePreview img={image}/>:
        <>
          <Pressable onPress={() => {navigation.push('Camera')} } style={styles.card}>
            <Text style={styles.title}>Scan results</Text>
            <Text style={styles.card_description}>Name of the file</Text>
          </Pressable>
          {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
          <Pressable
              activeOpacity={0.7}
              onPress={clickHandler}
              style={styles.touchableOpacityStyle}>
                <AntDesign name="plus" size={24} color="#1598DB" />
            </Pressable>
        </>

      }
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
    image:{
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    }
})
export default HomeScreen;
