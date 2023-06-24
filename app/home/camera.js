import React from 'react'
import Camera  from './../../components/camera/Camera'
import { cameraStore } from '../../components/camera/CameraStore'
import { useRouter } from 'expo-router'
const CameraPage = () => {
  const { gallerySections } = cameraStore(state => state)
  const router = useRouter()
  if(gallerySections.length == 0) {
    router.replace('/home/gallery')
  }
  return (
        <Camera></Camera>
  )
}

export default CameraPage