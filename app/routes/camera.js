import React, { useEffect } from 'react'
import Camera  from '../../components/camera/Camera'
import { cameraStore } from '../../components/camera/CameraStore'
import { useRouter } from 'expo-router'
import { getGallerySections } from '../../helpers/camera/getGallerySections'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
import useGallerySections from '../../hooks/useGallerySections'
const CameraPage = () => {
  useGallerySections()

  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.darkBlue, gap: 10}}>
      <Camera></Camera>
        
    </SafeAreaView>
  )
}

export default CameraPage