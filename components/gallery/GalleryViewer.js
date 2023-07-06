import { View } from 'react-native'
import EmptyGallery from './EmptyGallery'
import GalleryContainer from './GalleryContainer'
import useGallery from '../../hooks/useGallery'
const GalleryViewer = () => {
  const [galleryImages] = useGallery()
  return (
    <View style={{flex: 1}}>
      {galleryImages.length ? <GalleryContainer images={galleryImages} /> : <EmptyGallery/> }
    </View>
  )
}

export default GalleryViewer