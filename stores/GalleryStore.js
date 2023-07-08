import {create} from 'zustand'
export const GalleryStore = create(set => ({
    albumImages: [],
    imagesUris: [],
    setAlbumImages: (images) => set({albumImages: images}),
    setImagesUris: (newUris) => set({imagesUris: newUris}),
    visible: false,
    setVisible: (isVisible) => set({visible: isVisible}),
    indexGallery: 0,
    setIndexGallery: (newIndex) => set({indexGallery: newIndex})
 }))