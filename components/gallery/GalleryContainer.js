import React, { useState } from 'react'
import { ScrollView, Modal, Image, Pressable, Text } from 'react-native'
import { ImageViewer } from 'react-native-image-zoom-viewer'
import Button from '../Button'
import { COLORS } from '../../COLORS'
const GalleryContainer = ({ images }) => {
    const modalImages = images.map(image => ({ url: image.uri }))
    const [visible, setVisible] = useState(false)
    const [indexGallery, setIndexGallery] = useState(0)
    return (
        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {images.map((image, index) => {
                return (
                    <Pressable onPress={() => {
                        setVisible(!visible)
                        setIndexGallery(index)
                    }}>
                        <Image key={index} style={{ width: 100, height: 100 }} source={{ uri: image.uri }} />
                    </Pressable>

                )
            })}
            <Modal visible={visible}>
                <Button title={'<'} buttonStyle={{ position: 'absolute', bottom: 20, right: 20 }} handler={() => setVisible(!visible)} textStyle={{ color: COLORS.white, backgroundColor: COLORS.darkBlue, padding: 10, fontSize: 21, fontWeight: 'bold', borderRadius: 9999999, height: 50, width: 50, justifyContent: 'center', textAlign: 'center' }} />
                <ImageViewer style={{ zIndex: -10 }} index={indexGallery} imageUrls={modalImages}><Text>Hola</Text></ImageViewer>
            </Modal>
        </ScrollView>
    )
}

export default GalleryContainer