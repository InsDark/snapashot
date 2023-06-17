import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import dayjs from 'dayjs'
import {getItemAsync} from 'expo-secure-store'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { COLORS } from '../../COLORS'
import EventsContainer from './EventsContainer'
import Button from '../Button'
import {ModalStore} from './../../helpers/stores/ModalStore'
import EventMaker from './EventMaker'
import { toggleModal } from '../../helpers/calendar/showModal'
import { CalendarStore } from '../../helpers/stores/CalendarStore'
import { getMarkedDates } from '../../helpers/calendar/getMarkedDates'

const styles = StyleSheet.create({
    text: {
        color: COLORS.lightGreen,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

const CalendarEvents = ({style}) => {
    const {setModalVisible, modalVisible} = ModalStore(state => state)
    dayjs.extend(customParseFormat)
    const {calendarEvents, setCalendarEvents, setMarkedDays} = CalendarStore(state => state)
    useEffect((() => {
        try {

            const getUserEvents = async () => {
                const today = dayjs().format('YYYY-MM-DD')

                const auth = await getItemAsync('auth')
                const {userEmail} = JSON.parse(auth)
                
                await getMarkedDates(setMarkedDays)

                const queryEvents = query(collection(db, 'events'), where('owner', '==',  userEmail), where('date', '==', today))
                const todayEvents = await getDocs(queryEvents)
                if (todayEvents.size ) {  
                    const generalEvents = {}
                    todayEvents.forEach(doc => {
                        const {date} = doc.data()
                        generalEvents[date] = []
                    })
                    todayEvents.forEach(doc => {
                        const {date, title} = doc.data()
                        generalEvents[date].push({name: title})
                    })
                    setCalendarEvents(generalEvents)
                }
            }
            getUserEvents()
        }
        catch (e) {
            alert(err)
        }
    }), [])
    return (
        <View style={style}>
            <Text style={styles.text}>Today's Events</Text>
            {calendarEvents.length > 0 ? <EventsContainer events={calendarEvents} /> :
                <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10}}>
                    <Text style={{ ...styles.text, color: COLORS.white }}>No events available</Text>
                    <Button handler={()=> toggleModal(setModalVisible, modalVisible)} buttonStyle={{backgroundColor: COLORS.lightGreen, padding: 8, borderRadius: 5}} textStyle={{color: COLORS.darkBlue, fontSize: 16, fontWeight: 'bold'}} title={'Add Event'}/>
                    <EventMaker/>
                </View>}
        </View>
    )
}

export default CalendarEvents