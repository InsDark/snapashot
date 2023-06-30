import React, { useEffect } from 'react'
import Camera  from './../../components/camera/Camera'
import { cameraStore } from '../../components/camera/CameraStore'
import { useRouter } from 'expo-router'
import { getGallerySections } from '../../helpers/camera/getGallerySections'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
const CameraPage = () => {
  const { fetchedSections, setFetchedSections, setGallerySections } = cameraStore(state => state)
  const router = useRouter()
  useEffect(() => {
    if(fetchedSections) return 
    const main = async() => {
      const gallerySectionData = await getGallerySections()
      if(!gallerySectionData.length) {
        return router.push('home/gallery')
      }
      setGallerySections(gallerySectionData)
      setFetchedSections(true)
    } 
    main()
  }, [])

  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.darkBlue, gap: 10}}>
      <Camera></Camera>
        
    </SafeAreaView>
  )
}

export default CameraPage