import DatePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import Button from '../Button'
import { COLORS } from '../../COLORS'
import { View } from 'react-native'
import { useState } from 'react'

const DatePickerTypes = {
    main : "starts at",
    complement: "ends at",
    calendar: 'select a date'

}

const CustomDatePicker = ({ mode, display,  handler, type, state }) => {
    const [showDatePicker, setShowDatePicker] = useState(false)
    return (
        <View>
            <Button handler={() => {
                setShowDatePicker(true)
            }} textStyle={{ color: COLORS.gray, fontSize: 16 }} title={!state ?  DatePickerTypes[type] : (type == 'calendar' ? dayjs(state).format('DD-MM-YY') : dayjs(state).format('hh:mm'))} />
            {showDatePicker && <DatePicker
                testID="dateTimePicker"
                date={new Date()}
                mode={mode}
                value={new Date()}
                display={display}
                is24Hour={false}
                onError={(e) => {
                    e.name == 'TypeError' ? setShowDatePicker(!showDatePicker) : null
                }}
                onChange={(date) => {
                    handler(date.nativeEvent.timestamp)
                    setShowDatePicker(!showDatePicker)
                }}
            />}
        </View>
    )
}


export default CustomDatePicker