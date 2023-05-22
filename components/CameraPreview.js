import { View, Text, StyleSheet, StatusBar, ImageBackground, useWindowDimensions, Pressable } from "react-native";
import React from "react";





const CameraPreview = ({ photo, retakePicture, savePhoto }) => {

        const {width} = useWindowDimensions();
        const height = Math.round((width * 16) / 9);

        const openCamera = () => {

        }
  return (
    <View style={ styles.container} >
        <StatusBar hidden={false} backgroundColor="#000"  barStyle={"light-content"} />
        <ImageBackground
                source={{uri: photo && photo.uri}}
                style={{
                height: height,
                width: '100%'
                }}
        />
        <View style={styles.photoOptions}>
                <Pressable style={styles.photoOption} onPress={openCamera}>
                        <Text style={styles.photoOptionText}>Camera</Text>
                </Pressable>
                <Pressable style={styles.photoOption} onPress={ retakePicture }>
                        <Text style={styles.photoOptionText}>Re-Take</Text>
                </Pressable>
                <Pressable style={styles.photoOption} onPress={ savePhoto }>
                        <Text style={styles.photoOptionText}>Save</Text>
                </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: '#000',
                justifyContent: 'center',
        },
        photoOptions: {
                flexDirection: 'row',
                // backgroundColor: 'blue',
                width: '100%',
                marginTop: 15,
       
                justifyContent: 'space-around',
        },
        photoOption: {
                paddingHorizontal: 18,
                paddingVertical: 8,
                backgroundColor: '#fff',
                borderRadius: 30,
        },
        photoOptionText: {
                // color: '#fff',
                fontSize: 17,
        }

})

export default CameraPreview;
