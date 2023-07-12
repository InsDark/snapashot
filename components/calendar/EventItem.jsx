import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { COLORS } from '../../COLORS'
const EventItem = ({ item }) => {
    console.log(item)
    return (
        <View style={{}}>
                <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}>This text is an example onee</Text>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ backgroundColor: COLORS.red, paddingTop: 4, paddingBottom: 4, paddingRight: 8, paddingLeft: 8 }}>HOUSE</Text>
                        <Text style={{ backgroundColor: COLORS.lightGreen, paddingTop: 4, paddingBottom: 4, paddingRight: 8, paddingLeft: 8 }}>ME</Text>
                    </View>
                </View>

        </View>
    )
}

export default EventItem