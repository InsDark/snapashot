import { View, StyleSheet } from 'react-native'
import { COLORS } from '../COLORS'



const Separator = () => {
    return (
        <View style={{height: 1,  flexDirection: 'row', marginRight: 'auto', marginLeft: 'auto' }}>
            <View style={{ backgroundColor: COLORS.gray, height: 1, width: '30%'}}></View>
            <View style={{ backgroundColor: COLORS.white, height: 1, width: '50%' }}></View>
        </View>

    )
}

export default Separator