import {useEffect, useState} from 'react'
import { cameraStore } from '../components/camera/CameraStore'
import { getAlbumAsync, getAssetsAsync } from 'expo-media-library'

const useGallery = () => {
    const { gallerySection, gallerySections } = cameraStore(state => state)
    const [galleryImages, setGalleryImagess] = useState([])
    useEffect(() => {
        const main = async () => {

            const album = await getAlbumAsync(gallerySections[gallerySection])
            if (album == null) {
                setGalleryImagess([])
                return
            }
            const { assets } = await getAssetsAsync({ album: album.id })
            if (!assets.length) {
                return
            }
            setGalleryImagess(assets)
        }
        main()
    }, [gallerySection])
    return [galleryImages]
}

export default useGallery
