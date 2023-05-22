import { View, Text } from "react-native";
import React from "react";

import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library'

const Gallery = () => {
        const [photo, setPhoto] = useState();
        
        if(photo){
                let sharePic=( )=>{
                shareAsync(photo.uri).then(()=>{
                        setPhoto(undefined)
                })
                }
        }

        const savePhoto= () =>{
                MediaLibrary.saveToLibraryAsync(photo.uri).then(()=>{
                        setPhoto(undefined)
                })
        }

  return (
    <View>
      <Text>Gallery</Text>
    </View>
  );
};

export default Gallery;
