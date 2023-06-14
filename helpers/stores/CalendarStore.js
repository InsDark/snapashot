import {create} from 'zustand'
export const CalendarStore = create(set => ({
    calendarEvents: {},
    markedDays: {},
    selectedDay: '',
    setSelectedDay: (day) => set({selectedDay: day}),
    setCalendarEvents : (events) => set({calendarEvents: events}),
    setMarkedDays: (marked) => set({markedDays: marked}) 
    
}))