import React, { useState } from 'react'
import { ScrollView, Modal, Image, Pressable } from 'react-native'
import { ImageViewer } from 'react-native-image-zoom-viewer'
import GalleryNabvar from './GalleryNabvar'
const GalleryContainer = ({ images }) => {
    const [visible, setVisible] = useState(false)
    const [indexGallery, setIndexGallery] = useState(0)
    const sortedImages = images.reverse()
    const modalImages = sortedImages.map(image => ({ url: image.uri }))
    return (
        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {sortedImages.map((image, index) => {
                
                return (
                    <Pressable onPress={() => {
                        setVisible(!visible)
                        setIndexGallery(index)
                    }}>
                        <Image key={image.id} style={{ width: 150, height: 150, borderRadius: 10 }} source={{ uri: image.uri }} />
                    </Pressable>

                )
            })}
            <Modal onRequestClose={() => {
                setVisible(!visible)
            }} visible={visible}>
                <GalleryNabvar/>
                <ImageViewer saveToLocalByLongPress={true} style={{ zIndex: -10 }} index={indexGallery} imageUrls={modalImages}></ImageViewer>
            </Modal>
        </ScrollView>
    )
}

export default GalleryContainer