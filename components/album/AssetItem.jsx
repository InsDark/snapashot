import React from 'react'
import { Image, Pressable } from 'react-native'
import { GalleryStore } from '../../stores/GalleryStore'

const AssetItem = ({asset, index}) => {
    const {setVisible, visible, setIndexGallery} = GalleryStore()
    return (
        <Pressable onPress={async() => {
            setIndexGallery(index)
            setVisible(!visible)
        }}>
            <Image style={{ width: 150, height: 150, borderRadius: 10 }} source={{ uri: asset.uri }} />
        </Pressable>

    )
}

export default AssetItem