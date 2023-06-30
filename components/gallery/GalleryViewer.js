import React, { useEffect, useState } from 'react'
import { View , Text, Image} from 'react-native'
import { cameraStore } from '../camera/CameraStore'
import {getAlbumAsync, getAssetsAsync} from 'expo-media-library'
import EmptyGallery from './EmptyGallery'
import { COLORS } from '../../COLORS'
import GalleryContainer from './GalleryContainer'
const GalleryViewer = () => {
  const {gallerySection, gallerySections} =  cameraStore(state => state)
  const [sectionImages, setImages] = useState([])
  useEffect(( ) => {
    const main = async () => {
      const album  = await getAlbumAsync(gallerySections[gallerySection])
      if(album == null) {
        setImages([])
        return
      }
      const {assets} = await getAssetsAsync({album: album.id})
      if(!assets.length) {
        return 
      }
      setImages(assets)
      
    }
    main()
  }, [gallerySection])
  return (
    <View style={{backgroundColor: COLORS.lightBlue,  flex: 1}}>
      {sectionImages.length > 0 ? <GalleryContainer images={sectionImages} /> : <EmptyGallery/> }
    </View>
  )
}

export default GalleryViewer