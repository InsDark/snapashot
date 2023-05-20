import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { db } from '../../firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'
import dayjs from 'dayjs'
import { COLORS } from '../../COLORS'

const styles =  StyleSheet.create({
    text: {
        color: COLORS.lightGreen,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

const CalendarEvents = () => {
    const [events, setEvents] = useState([])
    useEffect((() => {
        try{
            
            const getUserEvents = async() => {
                const q = query(collection(db, 'matoshurtadodiegoaquiles@gmail.com'), where('date', '==', '1'))
                const todayEvents = await getDocs(q)
                const allEvents =  todayEvents.map(doc => doc.data())
                console.log(allEvents)
                setEvents(allEvents)
               
            }
            getUserEvents()
        }
        catch(e) {
            console.log(err)
        }
    }), [])
  return (
    <View style={{flex: 5}}>
        <Text style={styles.text}>Today's Events</Text>
        {events.length > 0 ? events.forEach(event => (<Text>{event.name}</Text>)) : <Text>You dont have to worry about today's events'</Text>}
    </View>
  )
}

export default CalendarEvents