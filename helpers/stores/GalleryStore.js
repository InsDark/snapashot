import dayjs from 'dayjs'
import {create} from 'zustand'
export const GalleryStore = create(set => ({
    album: '',
    albumImages: [],
    setAlbum: (albumName) => set({album: albumName}),
    setAlbumImages: (images) => set({albumImages: images}) 
    
}))