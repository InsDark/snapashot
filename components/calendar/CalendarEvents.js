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
    const {calendarEvents, setCalendarEvents, setMarkedDays} = CalendarStore(state => state)
    useEffect((() => {
        try {

            const getUserEvents = async () => {
                const today = dayjs()

                const {day, month, year} = {
                    day : today.get('date'),
                    month : today.get('month'),
                    year : today.get('year')
                }

                const todayTimeStamp = new Date(year, month , day).getTime()
                const auth = await getItemAsync('auth')
                const {userEmail} = JSON.parse(auth)
                const q = query(collection(db, 'events'), where('owner', '==',  userEmail), where('date', '>=', todayTimeStamp))
                const todayEvents = await getDocs(q)
                if (todayEvents.size == 0) return
                const generalEvents = []
                const markedDays = new Set()
                todayEvents.forEach(doc => {
                    generalEvents.push(doc.data())
                    const {date} = doc.data()
                    markedDays.add(date)
                })
                setCalendarEvents(generalEvents)
                setMarkedDays(markedDays)


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
            {calendarEvents.length > 0 ? <EventsContainer events={calendarEvents} /> :
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10}}>
                    <Text style={{ ...styles.text, color: COLORS.white }}>No events available</Text>
                    <Button handler={()=> toggleModal(setModalVisible, modalVisible)} buttonStyle={{backgroundColor: COLORS.lightGreen, padding: 8, borderRadius: 5}} textStyle={{color: COLORS.darkBlue, fontSize: 16, fontWeight: 'bold'}} title={'Add Event'}/>
                </View>}
        </View>
    )
}

export default CalendarEvents