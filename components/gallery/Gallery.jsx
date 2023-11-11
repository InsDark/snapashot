import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../COLORS";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text,  TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import EmptyGallery from "./EmptyGallery.js";
import useGallery from "../../hooks/useGallery";
import  GalleryAlbumMaker from './GalleryAlbumMaker.jsx'
const Gallery = () => {
  const {albums} = useGallery()
  const router = useRouter()
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkBlue,
        gap: 15,
        padding: 10,
        position: "relative",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        
      }}
    >
      {albums?.length !== 0 ? albums.map((albumName) => {
        return (
          <TouchableOpacity onPress={() => {
            router.push( `/routes/${albumName}`)
          }} key={albumName}>
            <AntDesign name={'folder1'} size={100} color={COLORS.red}/>
            <Text style={{color: COLORS.white, textAlign: 'center'}}>{albumName}</Text>
          </TouchableOpacity>
        )
      }) : <EmptyGallery/> }
    
      <GalleryAlbumMaker/>
    </SafeAreaView>
  );
};

export default Gallery;
