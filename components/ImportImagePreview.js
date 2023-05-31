import { StyleSheet, Text, View, StatusBar, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const ImportImagePreview = ({ route, navigation }) => {
    const { imageFile } = route.params;
    
    const closePreview = () => {
        navigation.navigate('Home')
    }

    const sendImage = () => {
        /*
        * SEND IMAGE TO SERVER
        */
    }

  return (
    <View style={styles.container}>
        <StatusBar hidden />
        <Pressable
              activeOpacity={0.7}
              onPress={ closePreview }
              style={styles.floatingButton}>
                <AntDesign name="close" size={22} color="#fff" />
          </Pressable>
        <View style={styles.imageWrapper}>
            <ImageBackground
                source={{uri: imageFile?.uri }}
                style={{
                height: '100%',
                width: '100%'
                }}
            />
        </View>
        <Pressable
              activeOpacity={0.7}
              onPress={ sendImage }
              style={styles.sendButton}>
                <Text style={styles.sendText}>Send</Text><Ionicons name="ios-send-outline" size={20} color="#fff" />
          </Pressable>
    </View>
  )
}

export default ImportImagePreview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    imageWrapper: {
        height: '65%',
        marginTop: 20,
    },
    floatingButton: {
        position: 'absolute',
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
        top: 10,
        backgroundColor: '#fff1',
      },

    sendButton: {
        width: 125,
        height: 35,
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#17B169',
        flexDirection: 'row',
        marginTop: '20%',
      },
      sendText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 400,
        marginRight: 10,
      }
})