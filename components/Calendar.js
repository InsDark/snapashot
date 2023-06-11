import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import dayjs from 'dayjs';
import { COLORS } from '../COLORS';
import { CalendarStore } from '../helpers/stores/CalendarStore';
import EmptyDate from './calendar/EmptyDate';

const Calendar = () => {
    const {markedDays} = CalendarStore(state => state)
    const currentDate = dayjs()
    const [items, setItems] = useState({"hi": 'fasdf'})
    const [selected, setSelected] = useState("2023-06-11")
    

    const renderItem = (item) => {
        return (
            <TouchableOpacity >

                <View>
                    <Text>{item.name}</Text>
                </View>

            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Agenda
                style={{
                    backgroundColor: COLORS.darkBlue
                }}
                theme={{
                    backgroundColor: 'red'
                }}
                items={items}
                
                selected={currentDate.format('YYYY-MM-DD')}

                
                renderItem={renderItem}
                renderEmptyDate={() => {
                    return <Text>Hi</Text>
                }}
                renderEmptyData={() => {
                    return <EmptyDate/>
                }}
                
                rowHasChanged={(r1, r2) => {
                    return r1.text !== r2.text;
                }}
                
                
                markedDates={markedDays}                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        width: '100%',
    }
});

export default Calendar;