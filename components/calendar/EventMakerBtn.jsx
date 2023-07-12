import { Toast } from "react-native-toast-message/lib/src/Toast"
import { COLORS } from "../../COLORS"
import { EventStore } from "../../stores/EventStore"
import Button from "../Button"
import { addEvent } from "../../helpers/calendar/addEvent"
import { CategoriesStore } from "../../stores/CategoriesStore"

const EventMakerBtn = () => {
    const { eventDate, eventStartTime, eventEndTime, eventTitle, eventDescription, reset } = EventStore(state => state)
    const {selectedCategories} = CategoriesStore(state => state)
    return (
        <Button title={"ADD EVENT"} buttonStyle={{ backgroundColor: COLORS.red, padding: 10, width: '50%', marginRight: 'auto', marginLeft: 'auto', borderRadius: 10 }} textStyle={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }} handler={async () => {
            try {

                if (!eventDate || !eventDescription || !eventEndTime || !eventStartTime) {
                    Toast.show({
                        type: "error",
                        text1: 'All the fields must be filled',
                    })
                    return
                }
                await addEvent({ title: eventTitle, categories: [], date: eventDate, description: eventDescription, endTime: eventEndTime, startTime: eventStartTime, categories: selectedCategories })

                Toast.show({
                    type: 'success',
                    text1: "The event was successfully added"
                })
                reset()
                setMarkedDays({ ...markedDays, eventDate: { 'marked': true } })
                setCalendarEvents({ ...calendarEvents, eventDate: [{ name: eventTitle }] })

            } catch (e) {
                Toast.show({
                    type: "error",
                    text1: 'Something went wrong try again'
                })
            }
        }} />
    )
}

export default EventMakerBtn