import React from "react";
import Button from "../Button";
import { COLORS } from "../../COLORS";
import { ModalStore } from "./../../stores/ModalStore";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const GalleryAlbumMaker = () => {
  const { modalVisible, setModalVisible } = ModalStore((state) => state);
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
      style={styles.main}
    >
      <AntDesign name={"addfolder"} color={COLORS.white} size={25} />
    </TouchableOpacity>
  );
};

export default GalleryAlbumMaker;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.lightBlue,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 99999999,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
