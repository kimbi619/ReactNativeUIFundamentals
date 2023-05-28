import { ImageBackground, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const ImagePreview = ({img}) => {
    const {width} = useWindowDimensions();
        const height = Math.round((width * 16) / 9);
        console.log(img)
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: img }}
        style={{
        height: '100%',
        width: '100%'
        }}
      />
    <Pressable onPress={()=>{img=null}} style={styles.card}>
        <Text>Cancel</Text>
    </Pressable>
    </View>
  )
}

export default ImagePreview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
},
card: {
    width: '100%',
    height: 'auto',
    minHeight: 100,
    backgroundColor: '#1598DB',
    borderRadius: 8,
    padding: 15,
  },
})