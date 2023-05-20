import React, { useEffect } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { COLORS } from '../COLORS'
const styles = StyleSheet.create({
    screen: {

    }, 
    text: {
        fontSize: 20,
        color: COLORS.white,
        fontWeight: 'bold'
    }
})

const Calendar = () => {
    
    return (
        <View>
            <Text style={{...styles.text, color: COLORS.lightGreen}}>Calendar</Text>
            <Text style={styles.text}>{new Date().getDate()}</Text>
            <Text style={styles.text}>10</Text>
        </View>
    )
}

export default Calendar