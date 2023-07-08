import dayjs from 'dayjs'
import {create} from 'zustand'
export const CalendarStore = create(set => ({
    calendarEvents: [],
    markedDays: {},
    currentDate: dayjs(),
    setCurrentDate: (date) => set({currentDate: date}),
    setCalendarEvents : (events) => set({calendarEvents: events}),
    setMarkedDays: (marked) => set({markedDays: marked}) 
    
}))