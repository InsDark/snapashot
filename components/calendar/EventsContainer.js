import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import dayjs from 'dayjs'
import { COLORS } from '../../COLORS'
const EventsContainer = ({events}) => {
  
  return (
    <ScrollView>
        {events.map((event, index) => (
          <View style={{backgroundColor:COLORS.lightBlue, padding: 10, marginTop: 10, marginBottom: 10}} key={index}>
            <Text style={{color: COLORS.lightGreen}}>{dayjs(event.date).format('DD/MM/YYYY')}</Text>
            <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>{event.title}</Text>
            <Text style={{color: COLORS.white}}>{event.description}</Text>
          </View>
        ))}
    </ScrollView>
  )
}

export default EventsContainer