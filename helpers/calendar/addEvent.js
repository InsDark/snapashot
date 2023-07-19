import { db } from './../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { getItemAsync } from 'expo-secure-store'
import dayjs from 'dayjs'
export const addEvent = async ({title, description, date, startTime, endTime, tags}) => {
    try {
        const formatedDay = dayjs(date).format('YYYY-MM-DD')
        const auth = await getItemAsync('auth')
        const { userEmail } = JSON.parse(auth)
        await Promise.allSettled([
            addDoc(collection(db, 'events'), {
                owner: userEmail,
                title,
                description,
                date : dayjs(date).format('YYYY-MM-DD'),
                time: { start: startTime, end: endTime },
                tags
            }),
            addDoc(collection(db, 'markedDates'), {
                owner: userEmail,
                date: formatedDay
            })
        ])
    } catch (e) {
        alert(e)
    }
}