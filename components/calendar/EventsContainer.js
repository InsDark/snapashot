import React from 'react'
import { Text, FlatList, View } from 'react-native'
import { COLORS } from '../../COLORS'
import dayjs from 'dayjs'
const EventsContainer = ({ events, currentDate }) => {
  const eventsFilter = events.filter(event => event.date == dayjs(currentDate).format('YYYY-MM-DD'))
  return (

    <FlatList style={{ backgroundColor: COLORS.lightBlue, width: '100%' }}
      data={eventsFilter}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: COLORS.darkBlue, width: '80%', marginVertical: 10, marginRight: 'auto', marginLeft: 'auto' }}>
          <View style={{backgroundColor: COLORS.gray, width: 10, height: 10, borderRadius: 10, marginRight: 10}}></View>
          <View>
            <Text style={{ color: COLORS.lightGreen, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{color: COLORS.white}}>
              {item.description}
            </Text>
          </View>

        </View>
      )}
    >
    </FlatList>
  )
}

export default EventsContainer