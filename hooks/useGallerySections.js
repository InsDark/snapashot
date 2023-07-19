import { useRouter } from 'expo-router'
import { cameraStore } from '../components/camera/CameraStore'
import { getGallerySections } from '../helpers/camera/getGallerySections'
import { useEffect } from 'react'

const useGallerySections = () => {
    const { fetchedSections, setFetchedSections, setGallerySections, gallerySections } = cameraStore(state => state)
    const router = useRouter()
    useEffect(() => {
        if (fetchedSections) return
        const main = async () => {
            const gallerySectionData = await getGallerySections()
            if (!gallerySectionData.length) {
                return router.push('home/gallery')
            }
            setGallerySections(gallerySectionData)
            setFetchedSections(true)
        }
        main()
    }, [])
    return {gallerySections}
}

export default useGallerySections