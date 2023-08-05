import { View } from 'react-native'
import { COLORS } from '../../COLORS'
import { Entypo } from '@expo/vector-icons'
import { removeAssetsFromAlbumAsync } from 'expo-media-library'
import {deleteAsync} from 'expo-file-system'
import useImageViewer from '../../hooks/useImageViewer'
import useGallery from '../../hooks/useGallery'
const GalleryNabvar = ({ imageRef, Toast }) => {
  const { updateAlbumImages } = useGallery()
  const { updateImagesUris } = useImageViewer()
  return (
    <View >
      <Entypo name='trash' onPress={async () => {
        try {
          console.log(imageRef)
          
          const res = await deleteAsync(imageRef.uri)
          console.log(res)
          await removeAssetsFromAlbumAsync([imageRef], imageRef.albumId)
          
          updateImagesUris({imageUri: imageRef.uri})
          updateAlbumImages({imageUri: imageRef.uri})
          Toast.show({ text1: 'The image was deleted successfully' })
        } catch (error) {
          console.log(error)
        }
      }} size={30} color={COLORS.gray} />
    </View>
  )
}

export default GalleryNabvar