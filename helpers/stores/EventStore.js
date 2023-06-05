import {create} from 'zustand'
export const EventStore = create(set => ({
    eventTitle: '',
    eventDescription: '',
    eventDate: '',
    setEventTitle: (title) => set({eventTitle: title}),
    setEventDescription: (description) => set({eventDescription: description}),
    setEventDate: (date) => set({eventDate: date}), 
    
}))