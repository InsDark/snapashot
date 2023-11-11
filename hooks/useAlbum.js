import { useEffect } from "react"
import { GalleryStore } from "../stores/GalleryStore"

const useAlbums = () => {
    const {albums} = GalleryStore(state => state)
    useEffect(() => {
        const main = () => {

        }
        main()
    }, [])
}