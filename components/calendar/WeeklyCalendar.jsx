import React from 'react'
import { CalendarProvider, WeekCalendar } from 'react-native-calendars'
import { COLORS } from '../../COLORS'
import dayjs from 'dayjs'
import { CalendarStore } from '../../stores/CalendarStore'
import { Text } from 'react-native'

const WeeklyCalendar = () => {
    const { markedDays, currentDate : Current, setCurrentDate } = CalendarStore(state => state)
    const currentDate = dayjs()
    return (
        <CalendarProvider
            date={currentDate.format('YYYY-MM-DD')}
            showTodayButton={false}
        >

            <Text style={{ color: COLORS.white, backgroundColor: COLORS.darkBlue, paddingTop: 10, textAlign: 'center', fontSize: 18 }}>
                {Current.get('date')}  {Current.format('MMMM')} {Current.get('year')}
            </Text>
            <WeekCalendar theme={{ calendarBackground: COLORS.darkBlue, dayTextColor: COLORS.gray, selectedDayTextColor: COLORS.white, todayBackgroundColor: COLORS.lightBlue, selectedDayBackgroundColor: COLORS.gray }}
                onDayPress={(day) => {
                    setCurrentDate(dayjs(day.dateString))

                }} markedDates={markedDays} />
        </CalendarProvider>
    )
}

export default WeeklyCalendar