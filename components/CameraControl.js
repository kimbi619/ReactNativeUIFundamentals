import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const CameraControl = () => {
  return (
    <View>
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
    </View>
  );
};

export default CameraControl;
