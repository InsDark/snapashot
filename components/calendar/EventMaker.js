import { Modal, Text, TextInput, View } from 'react-native'
import { ModalStore } from './../../helpers/stores/ModalStore'
import { COLORS } from '../../COLORS'
import { EventStore } from './../../helpers/stores/EventStore'
import DatePicker from '@react-native-community/datetimepicker'
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons'
import { useState } from 'react'
import Button from '../Button'
import {useRouter} from 'expo-router'
import { addEvent } from '../../helpers/calendar/addEvent'
const EventMaker = () => {
    const { modalVisible, setModalVisible } = ModalStore(state => state)
    const date = new Date()
    const { eventTitle, setEventDate, eventDate, setEventTitle, eventDescription, setEventDescription } = EventStore(state => state)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const router = useRouter()
    return (

        <Modal
            presentationStyle='overFullScreen'
            visible={modalVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={{ backgroundColor: COLORS.lightBlue, flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ backgroundColor: COLORS.darkBlue, padding: 10, width: '70%', gap: 20 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: COLORS.lightBlue, alignItems: 'center' }}>
                        <Feather.Button name="arrow-left" style={{paddingRight: 0, backgroundColor: COLORS.lightBlue,}} color={COLORS.lightGreen} onPress={() => {
                            router.push('/')
                            setModalVisible(!modalVisible)
                        }} />
                        <Text style={{color: COLORS.lightGreen, fontWeight: 'bold'}}>Create Task</Text>
                    </View>
                    <View style={{ gap: 10 }}>

                        <MaterialIcons.Button style={{ backgroundColor: COLORS.lightBlue }} color={COLORS.lightGreen} name='label'>
                            Event Title
                        </MaterialIcons.Button>

                        <TextInput onChangeText={(text) => { setEventTitle(text) }} value={eventTitle} style={{ padding: 10, backgroundColor: COLORS.lightBlue, color: COLORS.white }} placeholder='Event Title' placeholderTextColor={COLORS.gray} />

                    </View>

                    <View style={{ gap: 10 }}>
                        <MaterialIcons.Button style={{ backgroundColor: COLORS.lightBlue }} color={COLORS.lightGreen} name='description'>
                            Event Details
                        </MaterialIcons.Button>

                        <TextInput value={eventDescription} onChangeText={(text) => { setEventDescription(text) }} style={{ padding: 10, backgroundColor: COLORS.lightBlue, color: COLORS.white }} placeholder='Event Description' placeholderTextColor={COLORS.gray} />
                    </View>

                    <View style={{ gap: 10 }}>
                        <AntDesign.Button style={{ backgroundColor: COLORS.lightBlue }} onPress={() => { setShowDatePicker(!showDatePicker) }} color={COLORS.lightGreen} name='calendar'>
                            Event Date
                        </AntDesign.Button>
                        <Button handler={() => { setShowDatePicker(!showDatePicker) }} title={new Date(eventDate).toDateString() || 'Select Date'} buttonStyle={{ padding: 10, backgroundColor: COLORS.lightBlue, color: COLORS.white }} textStyle={{ color: COLORS.white }} />
                        {showDatePicker && <DatePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            display='spinner'
                            is24Hour={true}
                            onChange={(date) => {
                                const currentDate = date.nativeEvent.timestamp
                                setEventDate(currentDate)
                                setShowDatePicker(!showDatePicker)
                            }}
                        />}
                    <Button title={'Add Event'}  buttonStyle={{backgroundColor: COLORS.lightGreen, color: COLORS.darkBlue, padding: 10}} textStyle={{textAlign: 'center', fontWeight: 'bold'}} handler={() => {addEvent(eventTitle, eventDescription, eventDate, setModalVisible, modalVisible)}}/>
                    </View>



                </View>
            </View>
        </Modal>
    )
}

export default EventMaker