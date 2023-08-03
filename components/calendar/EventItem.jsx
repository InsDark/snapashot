import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { COLORS } from '../../COLORS'
import dayjs from 'dayjs'
const EventItem = ({ item }) => {
    return (
        <View style={{ gap: 10, padding: 5, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Text style={{ color: COLORS.gray, fontSize: 16, fontWeight: 'bold' }}>{dayjs(item.time.start).format('hh:MM')} - {dayjs(item.time.end).format('hh:mm a')} { }</Text>

            <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    { (item.tags) && item.tags.map(tag => {
                        return <Text style={{ color: COLORS.white, backgroundColor: getRandomColor(), paddingTop: 4, paddingBottom: 4, paddingRight: 8, paddingLeft: 8 }}>{tag.Title}</Text>
                    })}
                </View>
            </View>

        </View>
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