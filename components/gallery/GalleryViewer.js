import { View } from 'react-native'
import EmptyGallery from './EmptyGallery'
import GalleryContainer from './GalleryContainer'
import useGallery from '../../hooks/useGallery'
const GalleryViewer = () => {
  const { albumImages } = useGallery()
  return (
    <View style={{ flex: 1 }}>
      {albumImages.length ? <GalleryContainer/> : <EmptyGallery />}
    </View>
  )
}

export default GalleryViewer