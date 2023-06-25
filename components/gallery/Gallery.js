import { View } from 'react-native'
import { COLORS } from '../../COLORS'
import SectionsPicker from './SectionsPicker'
import GalleryViewer from './GalleryViewer'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { cameraStore } from '../camera/CameraStore'
import {getGallerySections} from './../../helpers/camera/getGallerySections'
const Gallery = () => {
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
    <View style={{flex: 12, backgroundColor: COLORS.lightBlue}}>
        <SectionsPicker/>
        <GalleryViewer/>
    </View>
  )
}

export default Gallery