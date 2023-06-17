import { View, TouchableOpacity, Text } from 'react-native'

const EventItem = ({item}) => {
    return (
        <TouchableOpacity >

            <View>
                <Text>{item.name}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default EventItem