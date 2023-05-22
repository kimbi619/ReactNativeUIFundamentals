import { View, Text, StyleSheet, useWindowDimensions, Pressable } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import React, { useEffect, useRef, useState } from "react";
import * as MediaLibrary from 'expo-media-library'
import { StatusBar } from "expo-status-bar";
import CameraPreview from "./CameraPreview";
import Ionicons from '@expo/vector-icons/Ionicons';

const CameraWrapper = () => {
        const cameraRef = useRef();

        const [flashMode, setFlashMode] = React.useState('on')
        const [cameraPermissions, setCameraPermissions] = useState();
        const [mediaLibraryPermissions, setMediaLibraryPermissions] = useState();
        
        const [previewVisible, setPreviewVisible] = useState(false)
        const [capturedImage, setCapturedImage] = useState(null)
        
        const [photo, setPhoto] = useState();
        const {width} = useWindowDimensions();
        const height = Math.round((width * 16) / 9);

        useEffect(()=>{
                requestCamera()
        },[])

        const requestCamera = async() => {
                try{
                        const permitCamera = await Camera.requestCameraPermissionsAsync();
                        const permitMediaLibrary = await MediaLibrary.requestPermissionsAsync();

                        setCameraPermissions(permitCamera.status === "granted");
                        setMediaLibraryPermissions(permitMediaLibrary.status === "granted");
                }catch(err){
                        console.warn(err)
                }
        }

        if (cameraPermissions === undefined) {
                return<Text>Requesting Permissions...</Text>
        }else if(!cameraPermissions){
                return<Text>Permission Denied!!! You can change this in the settings</Text>
        }

        const handleFlashMode = () => {
                if (flashMode === 'on') {
                        setFlashMode('off')
                } else if (flashMode === 'off') {
                        setFlashMode('on')
                } else {
                        setFlashMode('auto')
                }

        }
        const handleTakePicture = async () => {
                // let options = {
                //         quality:1,
                //         base64:true,
                //         exif:false
                // };
                try{
                        let photo = await cameraRef.current.takePictureAsync();
                        setPreviewVisible(true)
                        setCapturedImage(photo)
                }catch(err){
                        console.warn(err);
                }
        };
        const savePhoto= () =>{
                MediaLibrary.saveToLibraryAsync(capturedImage.uri).then(()=>{
                        setPhoto(undefined)
                })
        }
        const retakePicture = () => {
                setPreviewVisible(false)
                setCapturedImage(null)
        }
        
  return (
        <View style={ styles.container }>
                <StatusBar hidden />
                {
                        previewVisible && capturedImage ? (
                                <CameraPreview photo={capturedImage} savePhoto={savePhoto} retakePicture={retakePicture} />
                        ) : (
                                <>
                                        <View style={ styles.cameraWrapper }>
                                                <Pressable onPress={ handleFlashMode } style={[styles.flashButton, flashMode === "off" ? styles.flashButtonOff: styles.flashButtonOn] }>
                                                        {
                                                                flashMode === 'on'?
                                                                <Ionicons name="flash-sharp" size={24} color="black" />
                                                                :
                                                                <Ionicons name="ios-flash-off-sharp" size={24} color="#ff0" />

                                                        }
                                                </Pressable>
                                                <Camera 
                                                        flashMode={flashMode}
                                                        ratio="16:9"
                                                        style={{ height: height }}
                                                        ref={cameraRef}
                                                >
                                                </Camera>
                                        </View>
                                        <Pressable onPress={ handleTakePicture } style={styles.captureButton}>
                                                <View style={styles.captureButtonInner} />
                                                {/* <Text>shoot</Text> */}
                                        </Pressable>
                                </>
                        )
                }
        </View>
  );
};


const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
  },
  cameraWrapper: {
        borderRadius: 15,
        overflow: 'hidden',
  },
  camera: {
        height: 400,
  },
  captureButton:{
        position: 'absolute',
        borderWidth: 4,
        borderColor: '#fff',
        bottom: '10%',
        left: '50%',
        width: 80,
        height: 80,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
          { translateX: -50 },
        //   { translateY: -25 },
        ]
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
  },
  flashButtonOff: {
        backgroundColor: '#000'
  },
  flashButtonOn: {
        backgroundColor: '#ff0',
  }
});
export default CameraWrapper;
