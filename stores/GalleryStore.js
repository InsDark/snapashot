import {create} from 'zustand'
export const GalleryStore = create(set => ({
    albums: [],
    currentAlbum: '',
    albumImages: [],
    imagesUris: [],
    visible: false,
    indexGallery: 0,
    setAlbums: (albums) => set({albums}),
    setAlbumImages: (images) => set({albumImages: images}),
    setImagesUris: (newUris) => set({imagesUris: newUris}),
    setVisible: (isVisible) => set({visible: isVisible}),
    setIndexGallery: (newIndex) => set({indexGallery: newIndex}),
    setCurrentAlbum: (currentAlbum) => set({currentAlbum})
 }))