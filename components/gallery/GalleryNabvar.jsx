import { View } from 'react-native'
import { COLORS } from '../../COLORS'
import { Entypo } from '@expo/vector-icons'
import { removeAssetsFromAlbumAsync } from 'expo-media-library'
import useImageViewer from '../../hooks/useImageViewer'
import useGallery from '../../hooks/useGallery'
import { GalleryStore } from '../../stores/GalleryStore'
const GalleryNabvar = ({ imageRef, Toast }) => {
  const { updateAlbumImages } = useGallery()
  const { updateImagesUris } = useImageViewer()
  const { setIndexGallery, indexGallery, setVisible } = GalleryStore(state => state)
  return (
    <View >
      <Entypo name='trash' onPress={async () => {
        try {

          const res = await removeAssetsFromAlbumAsync(imageRef, imageRef.albumId)
          if (!res) return


          updateImagesUris({ imageUri: imageRef.uri })
          updateAlbumImages({ imageUri: imageRef.uri })

          Toast.show({ text1: 'The image was deleted successfully' })

          if (indexGallery == 0) return setVisible(false)

          setIndexGallery(indexGallery - 1)
        } catch (error) {
          console.log(error)
        }
      }} size={30} color={COLORS.gray} />
    </View>
  )
}

export default GalleryNabvar