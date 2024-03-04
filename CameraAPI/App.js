import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { Camera, CameraType } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [ type, setType ] = useState(CameraType.back)
  const [flashMode, setFlashMode] = useState('off')
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const {width} = useWindowDimensions()
  const height = Math.round((width *16) / 9);
  const cameraRef = useRef()

  const toggleCameraType = () => {
    setType(current => 
      (current === CameraType.back) 
      ? 
      CameraType.front 
      :
      CameraType.back
    )
  }

  const capturePhoto = async() => {
    try{
      let photo = await cameraRef.current.takePictureAsync();
      setPreviewVisible(true)
      setCapturedImage(photo)

      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      await MediaLibrary.createAlbumAsync('ExpoProject', asset, false)
    }
    catch(err){
      console.warn(err);
    }

  }

  const handleFlashMode = () => {
    if(flashMode === 'on') {
      setFlashMode('off')
    }
    else if (flashMode === 'off') {
      setFlashMode('on')
    }
    else {
      setFlashMode('auto')
    }
  }
  
  const recordMedia = async() => {
    try{
      setIsRecording(true)
      await Camera.requestMicrophonePermissionsAsync();
      let recording = await cameraRef.current.recordAsync();

      const asset = await MediaLibrary.createAssetAsync(recording.uri);
      await MediaLibrary.createAlbumAsync('ExpoProject', asset, false)
    }
    catch(err){
      console.warn(err);
    }
  }
  const stopRecording = () => {
    cameraRef.current.stopRecording();
    setIsRecording(false)
  }


  if(!permission) {
    return <View />
  }

  if(!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>You need permission to access the camera</Text>
        <Button onPress={requestPermission} title='grant permission' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={ handleFlashMode } style={[styles.flashButton, flashMode === "off" ? styles.flashButtonOff: styles.flashButtonOn] }>
        {
          flashMode === 'on'?
          <Ionicons name="flash-sharp" size={24} color="black" />
          :
          <Ionicons name="ios-flash-off-sharp" size={24} color="#ff0" />

        }
      </Pressable>
      <Camera
        type={type}
        ratio='16:9'
        flashMode={flashMode}
        style={{ height: height }}
        ref={cameraRef}
        autoFocus={true}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={ toggleCameraType }>
            <Text style={styles.text}>Flip camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ capturePhoto }>
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
          {
            isRecording
            ?
          <TouchableOpacity style={styles.button} onPress={ stopRecording }>
            <Text style={styles.text}>strop recording</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.button} onPress={ recordMedia }>
            <Text style={styles.text}>record</Text>
          </TouchableOpacity>
          }
        </View>
        <Pressable onPress={ capturePhoto } style={styles.captureBtn}>
          <View style={styles.captureButtonInner} />
        </Pressable>
      </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  captureBtn: {
    position: 'absolute',
    left: '50%',
    width: 80,
    bottom: '10%',
    borderWidth: 4,
    borderColor: '#fff',
    height: 80,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      { translateX: -50 }
    ]
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 64,
    marginBottom: 40,
    padding: 10,
    borderRadius: 30,
    top: '150%'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  captureButtonInner:{
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  flashButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 200,
    top: '1%',
    right: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  flashButtonOff: {
    backgroundColor: '#000'
  },
  flashButtonOn: {
    backgroundColor: '#C1C3C5',
  },

})