import { CameraType } from 'expo-camera'
import {create} from 'zustand'

export const cameraStore = create((set) => ({
    type: CameraType.back,
    cameraRef: null, 
    photo: null, 
    gallerySections: [],
    gallerySection: '',
    setGallerySection:  (section) => set({gallerySection: section}),
    setGallerySections: (newGallerySections) => set({gallerySections: newGallerySections}),
    setPhoto: (newPhoto) => set({photo: newPhoto}),
    setCameraRef: (camRef) => set(() => ({cameraRef: camRef})),
    setType: (newType) => set({type: newType})
}) )