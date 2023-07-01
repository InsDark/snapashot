import React from 'react'
import { ScrollView } from 'react-native'
import { COLORS } from '../../COLORS'
import { AntDesign} from '@expo/vector-icons'

const TaskCategories = () => {
    return (
        <ScrollView contentContainerStyle={{gap: 10}} horizontal={true} style={{ gap: 10 }}>
            <AntDesign.Button name="Safety" iconStyle={{ backgroundColor: COLORS.darkBlue }} style={{ backgroundColor: COLORS.darkBlue }}>Study</AntDesign.Button>
            <AntDesign.Button name="HTML" iconStyle={{ backgroundColor: COLORS.darkBlue }}  style={{ backgroundColor: COLORS.darkBlue }}>Study</AntDesign.Button>
            <AntDesign.Button name="HTML" iconStyle={{ backgroundColor: COLORS.darkBlue }}  style={{ backgroundColor: COLORS.darkBlue }}>Study</AntDesign.Button>
        </ScrollView>
    )
}

export default TaskCategories