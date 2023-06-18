import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CalendarProvider, WeekCalendar } from 'react-native-calendars';
import dayjs from 'dayjs';
import { COLORS } from '../COLORS';
import CalendarEvents from './calendar/CalendarEvents'
import { CalendarStore } from '../helpers/stores/CalendarStore';


const Calendar = () => {
    const { markedDays, currentDate : Current, setCurrentDate } = CalendarStore(state => state)
    const currentDate = dayjs()
    return (
        <View style={{ flex: 12 }}>

            <CalendarProvider
                date={currentDate.format('YYYY-MM-DD')}
                showTodayButton
            >

                <Text style={{ color: COLORS.lightGreen, backgroundColor: COLORS.darkBlue, paddingTop: 10, textAlign: 'center', fontSize: 18 }}>
                    {Current.get('date')}  {Current.format('MMMM')} {Current.get('year')}
                </Text>
                <WeekCalendar theme={{ calendarBackground: COLORS.darkBlue, dayTextColor: COLORS.gray, selectedDayTextColor: COLORS.white, todayBackgroundColor: COLORS.lightBlue, selectedDayBackgroundColor: COLORS.gray }}
                    onDayPress={(day) => {
                        setCurrentDate(dayjs(day.dateString))

                    }} enableSwipeMonths={true} markedDates={markedDays} />
            </CalendarProvider>
            <CalendarEvents style={{  flex: 4, backgroundColor: COLORS.darkBlue,  justifyContent: 'center' }} />
        </View>
    );
}


export default Calendar;