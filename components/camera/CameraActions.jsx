import React from 'react'
import { decode } from 'base-64';

if(typeof atob === 'undefined') {
  global.atob = decode;
}

import {View, StyleSheet} from 'react-native'
import {saveToLibraryAsync} from 'expo-media-library'
import {FontAwesome, Entypo, Foundation} from '@expo/vector-icons'
import { cameraStore } from './CameraStore'
import {ref, uploadBytes, uploadString} from 'firebase/storage'
import { CameraType } from 'expo-camera'
import { storage } from '../../firebase'

const CameraActions = () => {
  const {type, setType, cameraRef, setPhoto, photo} = cameraStore(state => state)
  const toggleCameraType = () => {
    setType( type === CameraType.back ? CameraType.front : CameraType.back);
  }
  const takePicture = async () => {
    try {

      let options = {
        quality: 1,
        base64: true, 
        exif: false
      }
      const newPhoto = await cameraRef.current.takePictureAsync(options)

      const getBlobFromUri = async (uri) => {
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", uri, true);
          xhr.send(null);
        });
      
        return blob;
      };
      const response = await fetch(newPhoto.uri) 
      const blobImg = response.blob()

      const blobImage = await getBlobFromUri(newPhoto.uri)
      const userPictures = ref(storage, 'images/image')

      await uploadBytes(userPictures, blobImg)
      await saveToLibraryAsync(newPhoto.uri)
    }
    catch(err) {
      console.log(err)
      alert(err)
    }
  }
  return (
    <View style={styles.navbar}>
        <FontAwesome.Button size={30} iconStyle={{marginRight: 0}}  name='arrow-left' style={styles.button}></FontAwesome.Button>
        <Entypo.Button onPress={takePicture} size={30} iconStyle={{marginRight: 0}} style={styles.button}  name='controller-record'/>
        <Foundation.Button onPress={toggleCameraType} size={30} iconStyle={{marginRight: 0}} style={styles.button}  name='loop' />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black'
  },
    navbar: {
      backgroundColor: 'black',
      width: '100%',
        flex: 2,
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default CameraActions