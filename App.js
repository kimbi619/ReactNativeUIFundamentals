import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library'
import { FontAwesome } from '@expo/vector-icons';

export default function App() {

  const cameraRef = useRef();
  const [cameraPermissions, setCameraPermissions] = useState();
  const [mediaLibraryPermissions, setMediaLibraryPermissions] = useState();
  const [photo, setPhoto] = useState();
  useEffect(()=>{
    (async()=>{
      const permitCamera = await Camera.requestCameraPermissionsAsync();
      const permitMediaLibrary = await MediaLibrary.requestPermissionsAsync();

      setCameraPermissions(permitCamera.status === "granted");
      setMediaLibraryPermissions(permitMediaLibrary.status === "granted");
    })();
  },[])


  if (cameraPermissions === undefined) {
      return<Text>Requesting Permissions...</Text>
  }else if(!cameraPermissions){
    return<Text>Permission Denied!!! You can change this in the settings</Text>
  }


  let takePic= async ()=>{
    let options = {
      quality:1,
      base64:true,
      exif:false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if(photo){
    let sharePic=( )=>{
      shareAsync(photo.uri).then(()=>{
        setPhoto(undefined)
      })
    }
    let savePhoto=( )=>{
      MediaLibrary.saveToLibraryAsync(photo.uri).then(()=>{
        setPhoto(undefined)
      })
    }

    return(
      <SafeAreaView style={styles.container} >
        <Image style={styles.preview} source={{uri: "data:image/jpg;base64,"+photo.base64}}/>
        <View>
          <TouchableOpacity>
           <FontAwesome name='share-alt' size={30} color={"white"} />
          </TouchableOpacity>

          {mediaLibraryPermissions ?
            <TouchableOpacity onPress={savePhoto}>
              <FontAwesome name='save' size={30} color={"white"} />
            </TouchableOpacity>
            : undefined
          }
          <TouchableOpacity onPress={()=>setPhoto(undefined)}>
            <FontAwesome name='trash' size={30} color={"white"}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }


  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={takePic}>
          <FontAwesome name='camera' size={32} color="white"/>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    alignSelf:'center'
  },
  preview:{
    flex:1,
    alignSelf:'stretch'
  }
});
