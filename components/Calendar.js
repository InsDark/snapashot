import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../COLORS'
import dayjs from 'dayjs'
import { FlatList } from 'react-native-gesture-handler'
const styles = StyleSheet.create({
    screen: {
        flex: 5,
        padding: 10,
        gap: 10
    },
    text: {
        fontSize: 20,
        color: COLORS.white,
        fontWeight: 'bold'
    },
    dayItem: {
         width: `${90/7}%`, 
         margin: 3, 
         textAlign: 'center', 
         color: COLORS.white, 
         padding: 10 
    }
})


const Calendar = () => {
    const date = dayjs()
    const month = date.format('MMMM')
    const daysOfTheMonth = date.daysInMonth()
    const currentDay = date.date()
    const days = []
    for (let day = 1; day <= daysOfTheMonth; day++) {
        days.push(day)
    }
    return (
        <View style={styles.screen}>

            <Text style={{ ...styles.text, color: COLORS.lightGreen, backgroundColor: COLORS.darkBlue, padding: 5, textAlign: 'center' }}>{month}</Text>

            <FlatList
                renderItem={({ item }) => <Text style={currentDay == item ? {...styles.dayItem, backgroundColor: COLORS.lightGreen, color: COLORS.darkBlue } : {...styles.dayItem, backgroundColor: COLORS.darkBlue}}>{item}</Text>}
                data={days}
                style={{  width: '100%' }}
                numColumns={7}>

            </FlatList>

        </View>
    )
}

export default Calendar