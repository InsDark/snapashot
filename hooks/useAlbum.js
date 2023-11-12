import { useEffect } from "react"
import { GalleryStore } from "../stores/GalleryStore"

export const useAlbum = () => {
    const {albums} = GalleryStore(state => state)
    useEffect(() => {
        const main = () => {

        }
        main()
    }, [])
}