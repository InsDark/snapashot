import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { COLORS } from '../../COLORS'
import EventsContainer from './EventsContainer'
import Button from '../Button'
import {ModalStore} from './../../helpers/stores/ModalStore'
import EventMaker from './EventMaker'
import { toggleModal } from '../../helpers/calendar/showModal'

const styles = StyleSheet.create({
    text: {
        color: COLORS.lightGreen,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

const CalendarEvents = () => {
    const {setModalVisible, modalVisible} = ModalStore(state => state)
    dayjs.extend(customParseFormat)
    const [events, setEvents] = useState([])
    useEffect((() => {
        try {

            const getUserEvents = async () => {
                const today = dayjs().format('YYYY-MM-DD')

                const q = query(collection(db, 'matoshurtadodiegoaquiles@gmail.com'), where('date', '==', today))
                const todayEvents = await getDocs(q)

                if (!todayEvents) return
                setEvents(todayEvents.docs)


            }
            getUserEvents()
        }
        catch (e) {
            console.log(err)
        }
    }), [])
    return (
        <View style={{ flex: 5, backgroundColor: COLORS.darkBlue, width: '95%', padding: 10 }}>
            <EventMaker/>
            <Text style={styles.text}>Today's Events</Text>
            {events.length > 0 ? <EventsContainer events={events} /> :
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10}}>
                    <Text style={{ ...styles.text, color: COLORS.white }}>No events available</Text>
                    <Button handler={()=> toggleModal(setModalVisible, modalVisible)} buttonStyle={{backgroundColor: COLORS.lightGreen, padding: 8, borderRadius: 5}} textStyle={{color: COLORS.darkBlue, fontSize: 16, fontWeight: 'bold'}} title={'Add Event'}/>
                </View>}
        </View>
    )
}

export default CalendarEvents