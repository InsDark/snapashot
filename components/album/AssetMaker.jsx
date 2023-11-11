import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { launchCameraAsync } from "expo-image-picker";
import { savePicture } from "./../../helpers/gallery/savePicture";
import { COLORS } from "../../COLORS";
import { StyleSheet, TouchableOpacity } from "react-native";
const AssetMaker = ({albumName}) => {
  return (
    <TouchableOpacity style={styles.main}>
      <MaterialCommunityIcons
        name="file-image-plus"
        color={"white"}
        size={25}
        onPress={async () => {
          let result = await launchCameraAsync({
            cameraType: "back",
            mediaTypes: "Images",
            base64: false,
          });
          savePicture({
            photoUri: result.assets[0].uri,
            albumName
          });
          console.log(result)
        }}
      />
    </TouchableOpacity>
  );
};

export default AssetMaker;

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 99999,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
