import {create} from 'zustand'

const InitialStateEvent = {
    eventTitle: '',
    eventDescription: '',
    eventDate: '',
    eventStartTime: '',
    eventEndTime: '',
}

export const EventStore = create(set => ({
    ...InitialStateEvent,
    setEventEndTime: (endTime) => set({eventEndTime: endTime}),
    setEventStartTime: (startTime) => set({eventStartTime: startTime}),
    setEventTitle: (title) => set({eventTitle: title}),
    setEventDescription: (description) => set({eventDescription: description}),
    setEventDate: (date) => set({eventDate: date}), 
    reset: () => set(InitialStateEvent)
}))