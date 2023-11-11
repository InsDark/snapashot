import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../firebase'
import { getItemAsync } from 'expo-secure-store'
export const getGallerySections =  async(  ) => {
    try {
        const {userEmail} = JSON.parse(await getItemAsync('auth'))
        
        const gallerySectionsQuery = query(collection(db,  'sections'), where('owner', '==', 'matoshurtadodiegoaquiles@gmail.com'))
        const gallerySections = await getDocs(gallerySectionsQuery)
        if(!gallerySections.size) return
        
        const gallerySectionData = [] 
        gallerySections.forEach(doc => {
            const {section} = doc.data()
            gallerySectionData.push(section)
        })
        return gallerySectionData
         
    } catch (err) {
        alert(err)
    }
}