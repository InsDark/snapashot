import React from 'react'
import { decode } from 'base-64';

if (typeof atob === 'undefined') {
  global.atob = decode;
}

import { View, StyleSheet } from 'react-native'
import {  Entypo, Foundation } from '@expo/vector-icons'
import { cameraStore } from './CameraStore'
import { CameraType } from 'expo-camera'
import { COLORS } from '../../COLORS';
import { takePicture } from '../../helpers/camera/takePicture';

const CameraActions = ({Toast}) => {
  const { type, setType, cameraRef, gallerySection, gallerySections } = cameraStore(state => state)
  const toggleCameraType = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }
  return (
    <View style={styles.navbar}>
      <Entypo.Button onPress={async() => {
        const res = await takePicture({camera: cameraRef, gallerySection, gallerySections})
        if(!res) {Toast.show({text1: "The photo was snapped"})}
        
        }} color={COLORS.gray} size={30} iconStyle={{ marginRight: 0 }} style={styles.button} name='controller-record' />
      <Foundation.Button color={COLORS.gray} onPress={toggleCameraType} size={30} iconStyle={{ marginRight: 0 }} style={styles.button} name='loop' />
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