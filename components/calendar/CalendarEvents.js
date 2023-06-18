import React, { useEffect } from 'react'
import { View } from 'react-native'
import dayjs from 'dayjs'
import { getItemAsync } from 'expo-secure-store'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import EventsContainer from './EventsContainer'
import { CalendarStore } from '../../helpers/stores/CalendarStore'
import EmptyDate from './EmptyDate'
import getDateEvents from '../../helpers/calendar/getDateEvents'

const CalendarEvents = ({ style }) => {
    dayjs.extend(customParseFormat)
    const { calendarEvents, currentDate, setCalendarEvents } = CalendarStore(state => state)
    useEffect((() => {
        try {

                const getUserEvents = async () => {

                const auth = await getItemAsync('auth')
                const { userEmail } = JSON.parse(auth)
                await getDateEvents({ currentDate, userEmail, setCalendarEvents, calendarEvents })
            }
            getUserEvents()
        }
        catch (e) {
            alert(err)
        }
    }), [currentDate])
    return (
        <View style={style}>
            {calendarEvents ? <EventsContainer events={calendarEvents} currentDate={currentDate} /> : <EmptyDate />}
        </View>
    )
}

export default CalendarEvents