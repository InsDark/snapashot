import { useEffect, useState } from "react"
import { GalleryStore } from "../stores/GalleryStore"

const useImageViewer = () => {
    const {albumImages} = GalleryStore(state => state)
    const {indexGallery} = GalleryStore(state => state)
    const [imagesUris, setImagesUris] = useState([])
    const updateImagesUris = ({imageUri}) => {
        const filterImagesUris = imagesUris.filter(image => image.uri !== imageUri)
        setImagesUris(filterImagesUris)        
    }
    useEffect(() => {
        const main =() => {
            const imagesUrisArr = albumImages.map(image => ({url: image.uri}))
            setImagesUris(imagesUrisArr)
        }
        main()
    }, [albumImages])
    return {indexGallery, imagesUris, updateImagesUris}
}

export default useImageViewer