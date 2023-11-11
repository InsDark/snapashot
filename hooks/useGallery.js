import { useEffect} from 'react'
import { GalleryStore } from '../stores/GalleryStore'
import { getGallerySections } from '../helpers/gallery/getGallerySections'

const useGallery = () => {
    const { albumImages, setAlbumImages, albums, setAlbums } = GalleryStore(state => state)

    // const updateAlbumImages = ({ imageUri }) => {
    //     const filterImages = albumImages.filter(image => image.uri !== imageUri)
    //     setAlbumImages(filterImages)
    // }
    useEffect(() => {
        const main = async() => {
            const albumsList = await getGallerySections()
            setAlbums(albumsList)
        }
        main()
    }, [])
   

    return { albums }
}

export default useGallery
