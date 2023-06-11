import {create} from 'zustand'
export const CalendarStore = create(set => ({
    calendarEvents: [],
    markedDays: [],
    setCalendarEvents : (events) => set({calendarEvents: events}),
    setMarkedDays: (marked) => set({markedDays: marked}) 
    
}))