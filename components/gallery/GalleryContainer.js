import React from 'react'
import { ScrollView,  Image, Pressable } from 'react-native'
import ImagesViewer from './ImagesViewer'
import { GalleryStore } from '../../stores/GalleryStore'
import { removeAssetsFromAlbumAsync } from 'expo-media-library'
const GalleryContainer = () => {
    const {visible, setVisible, albumImages, setIndexGallery} = GalleryStore(state => state)
    return (
        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {albumImages.map((image, index) => {
                return (
                    <Pressable key={image.id} onPress={async() => {
                        const res = await removeAssetsFromAlbumAsync(image, image.albumId )
                        console.log(res)
                        // setVisible(!visible)
                        // setIndexGallery(index)
                    }}>
                        <Image style={{ width: 150, height: 150, borderRadius: 10 }} source={{ uri: image.uri }} />
                    </Pressable>

                )
            })}
            <ImagesViewer/>
        </ScrollView>
    )
}

export default GalleryContainer