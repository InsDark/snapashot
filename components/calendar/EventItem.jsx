import React from 'react'
import { Text, Animated } from 'react-native'
import { View } from 'react-native'
import { COLORS } from '../../COLORS'
import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { getItemAsync } from 'expo-secure-store'
import dayjs from 'dayjs'
import { Swipeable } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons'
import { db } from './../../firebase'
import { CalendarStore } from '../../stores/CalendarStore'
const EventItem = ({ item }) => {
    const {calendarEvents, setCalendarEvents, markedDays, setMarkedDays} = CalendarStore(state => state)
    const swipeRight = (progress, dragX) => {
        return (
            <Animated.View style={{ backgroundColor: 'red', justifyContent: 'center', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                <Entypo.Button onPress={async () => {
                    const { userEmail } = JSON.parse(await getItemAsync('auth'))
                    const q = query(collection(db, 'events'), where("owner", '==', userEmail), where('title', '==', item.title), where('description', '==', item.description))

                    const snap = await getDocs(q)
                    snap.forEach(async (docSnap) => {

                        await deleteDoc(doc(db, 'events', docSnap.id))
                            const newEvents = calendarEvents.filter((event) => event.title !== item.title)
                            setCalendarEvents(newEvents)
                            if(newEvents.length == 0) {
                                setMarkedDays(delete markedDays[item.date])
                            }
                            const dates = []
                            const markedDates = await getDocs(query(collection(db, 'markedDates'), where('date', '==', item.date)))
                            markedDates.forEach(markedD => dates.push(markedD.id))
                            deleteDoc(doc(db, 'markedDates', dates[0] ))
                        


                    })
                }} style={{ width: 70, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', margin: 0 }} iconStyle={{ marginRight: 0 }} size={25} name='trash' />
            </Animated.View>
        )
    }

    return (
        <Swipeable renderRightActions={swipeRight}>

            <View style={{ gap: 10, padding: 5, width: '80%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: COLORS.darkBlue }}>
                <Text style={{ color: COLORS.gray, fontSize: 16, fontWeight: 'bold' }}>{dayjs(item.time.start).format('hh:MM')} - {dayjs(item.time.end).format('hh:mm a')} { }</Text>

                <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        {(item.tags) && item.tags.map(tag => {
                            return <Text style={{ color: COLORS.white, backgroundColor: getRandomColor(), paddingTop: 4, paddingBottom: 4, paddingRight: 8, paddingLeft: 8 }}>{tag.Title}</Text>
                        })}
                    </View>
                </View>

            </View>
        </Swipeable>
    )
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export default EventItem