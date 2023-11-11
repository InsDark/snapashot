import React from 'react'
import { Image, Pressable } from 'react-native'

const AssetItem = ({asset}) => {
    return (
        <Pressable key={asset.id} onPress={async() => {
            
            // setVisible(!visible)
            // setIndexGallery(index)
        }}>
            <Image style={{ width: 150, height: 150, borderRadius: 10 }} source={{ uri: asset.uri }} />
        </Pressable>

    )
}

export default AssetItem