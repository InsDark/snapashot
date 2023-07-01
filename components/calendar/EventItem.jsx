import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { COLORS } from '../../COLORS'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
const EventItem = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, width: '80%', marginVertical: 10, marginRight: 'auto', marginLeft: 'auto' }}>
            <BouncyCheckbox
                size={25}
                fillColor="#251F95"
                unfillColor="#222354"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked) => { console.log(isChecked) }}
            />
            <View>
                <Text style={{ color: COLORS.lightGreen, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ color: COLORS.white }}>
                    {item.description}
                </Text>
            </View>

        </View>
    )
}

export default EventItem