import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CalendarProvider, WeekCalendar } from 'react-native-calendars';
import dayjs from 'dayjs';
import { COLORS } from '../COLORS';
import CalendarEvents from './calendar/CalendarEvents'
import { CalendarStore } from '../helpers/stores/CalendarStore';


const Calendar = () => {
    const { markedDays } = CalendarStore(state => state)
    const currentDate = dayjs()
    const [current, setCurrent] = useState(currentDate)
    return (
        <View style={{ flex: 12 }}>

            <CalendarProvider
                date={currentDate.format('YYYY-MM-DD')}
                showTodayButton
                style={{}}
            >

                <Text style={{ color: COLORS.lightGreen, backgroundColor: COLORS.darkBlue, paddingTop: 10, textAlign: 'center', fontSize: 18 }}>
                    {current.get('date')}  {current.format('MMMM')} {current.get('year')}
                </Text>
                <WeekCalendar theme={{ calendarBackground: COLORS.darkBlue, dayTextColor: COLORS.gray, selectedDayTextColor: COLORS.darkBlue }}
                    onDayPress={(day) => {
                        setCurrent(dayjs(day.dateString))

                    }} enableSwipeMonths={true} markedDates={markedDays} />
            </CalendarProvider>
            <CalendarEvents style={{ flex: 4, backgroundColor: COLORS.darkBlue, padding: 10, justifyContent: 'center' }} />
        </View>
    );
}


export default Calendar;