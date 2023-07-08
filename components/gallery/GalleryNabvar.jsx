import { View } from 'react-native'
import { COLORS } from '../../COLORS'
import { Entypo } from '@expo/vector-icons'
import { deleteAssetsAsync } from 'expo-media-library'
import useImageViewer from '../../hooks/useImageViewer'
import useGallery from '../../hooks/useGallery'
const GalleryNabvar = ({ imageRef, Toast }) => {
  const { updateAlbumImages } = useGallery()
  const { updateImagesUris } = useImageViewer()
  return (
    <View >
      <Entypo name='trash' onPress={async () => {
        await deleteAssetsAsync(imageRef)
        updateImagesUris({imageUri: imageRef.uri})
        updateAlbumImages({imageUri: imageRef.uri})
        Toast.show({ text1: 'The image was deleted successfully' })
      }} size={30} color={COLORS.gray} />
    </View>
  )
}

export default GalleryNabvar