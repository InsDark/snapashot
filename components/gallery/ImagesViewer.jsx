import React, { useState } from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'
import GalleryNabvar from './GalleryNabvar'
import useImageViewer from '../../hooks/useImageViewer'
import useGallery from '../../hooks/useGallery'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { Modal } from 'react-native'
import { GalleryStore } from '../../stores/GalleryStore'

const ImagesViewer = () => {
    const { setVisible, visible, indexGallery } = GalleryStore(state => state)
    const { imagesUris } = useImageViewer()
    return (
        <Modal onRequestClose={() => {
            setVisible(!visible)
        }} visible={visible}>
            <ImageViewer style={{ flex: 1 }} footerContainerStyle={{ position: 'absolute', bottom: 40, right: 40 }} renderFooter={(index) => {
                return <GalleryNabvar imageRef={imagesUris[index]} Toast={Toast} />
            }} index={indexGallery} imageUrls={imagesUris}/>
            <Toast />
        </Modal>
    )
}

export default ImagesViewer