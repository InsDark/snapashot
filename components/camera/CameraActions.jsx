import React from 'react'
import { decode } from 'base-64';

if (typeof atob === 'undefined') {
  global.atob = decode;
}

import { View, StyleSheet } from 'react-native'
import { saveToLibraryAsync } from 'expo-media-library'
import uuid from 'react-native-uuid'
import { FontAwesome, Entypo, Foundation } from '@expo/vector-icons'
import { cameraStore } from './CameraStore'
import { ref, uploadBytes } from 'firebase/storage'
import { CameraType } from 'expo-camera'
import { storage } from '../../firebase'
import { getItemAsync } from 'expo-secure-store';
import { getBlobFromUri } from '../../helpers/camera/getBlobFromUri';

const CameraActions = () => {
  const { type, setType, cameraRef, gallerySection } = cameraStore(state => state)
  const toggleCameraType = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }
  const takePicture = async () => {
    try {

      let options = {
        quality: 1,
        base64: true,
        exif: false
      }
      const newPhoto = await cameraRef.current.takePictureAsync(options)
      const { userEmail } = JSON.parse(await getItemAsync('auth'))

      const getFileBlob = function (url, cb) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.addEventListener('load', function () {
          cb(xhr.response);
        });
        xhr.send();
      };
      
      const imgName = uuid.v4()
      const userPictures = ref(storage, `${userEmail}/${gallerySection}/${imgName}`)
      getFileBlob(newPhoto.uri, blob => {
        uploadBytes(userPictures, blob)
      })


    }
    catch (err) {
      alert(err)
    }
  }
  return (
    <View style={styles.navbar}>
      <FontAwesome.Button size={30} iconStyle={{ marginRight: 0 }} name='arrow-left' style={styles.button}></FontAwesome.Button>
      <Entypo.Button onPress={takePicture} size={30} iconStyle={{ marginRight: 0 }} style={styles.button} name='controller-record' />
      <Foundation.Button onPress={toggleCameraType} size={30} iconStyle={{ marginRight: 0 }} style={styles.button} name='loop' />
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