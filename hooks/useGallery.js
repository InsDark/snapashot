import { useEffect} from 'react'
import { cameraStore } from '../components/camera/CameraStore'
import { getAlbumAsync,  getAssetsAsync } from 'expo-media-library'
import { GalleryStore } from '../stores/GalleryStore'

const useGallery = () => {
    const { gallerySection, gallerySections } = cameraStore(state => state)
    const { albumImages, setAlbumImages } = GalleryStore(state => state)

    const updateAlbumImages = ({ imageUri }) => {
        const filterImages = albumImages.filter(image => image.uri !== imageUri)
        setAlbumImages(filterImages)
    }

    useEffect(() => {
        const main = async () => {
            try {

                if (!gallerySection && gallerySection !== 0) return setAlbumImages([])
                const album = await getAlbumAsync(gallerySections[gallerySection])
                if (album == null) return setAlbumImages([])

                const { assets } = await getAssetsAsync({ album: album.id })

                if (!assets.length) return

                const sortedImages = assets.reverse()


                setAlbumImages(sortedImages)
            } catch (e) {
                console.log(e)
            }

        }
        main()
    }, [gallerySection])

    return { albumImages, updateAlbumImages }
}

export default useGallery
