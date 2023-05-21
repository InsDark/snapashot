import React from 'react'
import {View, Text} from 'react-native'
const EventsContainer = ({events}) => {
  return (
    <View>
        {events.forEach(event => (
            <Text>{event.title}</Text>
        ))}
    </View>
  )
}

export default EventsContainer