import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import dayjs from "dayjs"

const getDateEvents = async ({currentDate,  userEmail, setCalendarEvents, calendarEvents }) => {
    const today = dayjs(currentDate).format('YYYY-MM-DD')
    const eventsForCurrentDate = calendarEvents.filter(event => {event.date == today})
    console.log(eventsForCurrentDate)
    if(eventsForCurrentDate.length > 0) return
    const queryEvents = query(collection(db, 'events'), where('owner', '==', userEmail), where('date', '==', today ))
    const todayEvents = await getDocs(queryEvents)
    if (todayEvents.size) {
        const dateEvents = []
        todayEvents.forEach(doc => {

            const { date, description, title } = doc.data()
            dateEvents.push({ date, description, title })
        })
        console.log(dateEvents)
        setCalendarEvents([...calendarEvents, ...dateEvents])
    }
}

export default getDateEvents