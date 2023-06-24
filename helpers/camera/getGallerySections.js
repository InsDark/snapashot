import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../firebase'
import { getItemAsync } from 'expo-secure-store'
export const getGallerySections =  async(  ) => {
    try {

        const {userEmail} = JSON.parse(await getItemAsync('auth'))
        const gallerySectionsQuery = query(collection(db,  'sections'), where('owner', '==', userEmail))
        const gallerySections = await getDocs(gallerySectionsQuery)
        if(!gallerySections.size) return
        
        gallerySections.forEach(doc => {
            console.log(doc)
        })
         
    } catch (err) {
        alert(err)
    }
}