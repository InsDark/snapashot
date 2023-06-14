import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../firebase'
import {getItemAsync} from 'expo-secure-store'
export const getMarkedDates = async(setMarkedDays) => {
    try {

        const {userEmail} = JSON.parse(await getItemAsync('auth'))
        const markedDatesQuery = query(collection(db,  'markedDates'), where('owner', '==', userEmail))
        const markedDates = await getDocs(markedDatesQuery)
        const markedDatesContainer = {}
        if(markedDates.size == 0) return
        markedDates.forEach(doc => {
            const {date} = doc.data()
            markedDatesContainer[date] = {'marked': true}
        } )
        setMarkedDays(markedDatesContainer)
    } catch (err) {
        alert(err)
    }
}