import {db} from './../../firebase'
import { addDoc, collection} from 'firebase/firestore'
import {getItemAsync} from 'expo-secure-store'
import dayjs from 'dayjs'
export const addEvent =  async(title, description, date) => {
    try{
        const formatedDay = dayjs(date).format('YYYY-MM-DD')
        const auth = await getItemAsync('auth')
        const {userEmail} = JSON.parse(auth)
         await Promise.allSettled([
            addDoc(collection(db, 'events'), {
                title, description, date : formatedDay, owner : userEmail
            }),
            addDoc(collection(db, 'markedDates'), {
                owner: userEmail,
                date: formatedDay
            })
        ])
    } catch(e){
        alert(e)
    }
}