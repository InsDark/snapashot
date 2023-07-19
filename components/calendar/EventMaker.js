import { Modal, Text, TextInput, View } from 'react-native'
import { ModalStore } from './../../stores/ModalStore'
import { COLORS } from '../../COLORS'
import { EventStore } from './../../stores/EventStore'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'
import Button from '../Button'
import { useRouter } from 'expo-router'
import { addEvent } from '../../helpers/calendar/addEvent'
import { CalendarStore } from '../../stores/CalendarStore'
import TaskCategories from './TaskCategories'
import CustomDatePicker from './CustomDatePicker'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import EventMakerBtn from './EventMakerBtn'
const EventMaker = () => {
    const { modalVisible, setModalVisible } = ModalStore(state => state)
    const date = new Date()
    const { markedDays, setMarkedDays, calendarEvents, setCalendarEvents } = CalendarStore(state => state)
    const { setEventTitle, eventDescription, setEventDescription, setEventDate, setEventEndTime, setEventStartTime, eventTitle, eventDate, eventStartTime, eventEndTime } = EventStore(state => state)
    const router = useRouter()
    return (

        <Modal
            presentationStyle='overFullScreen'
            visible={modalVisible}
            animationType='slide'
            transparent={true}
            onRequestClose={() => {setModalVisible(!modalVisible)}}
        >
            <View style={{ backgroundColor: COLORS.darkBlue, flex: 1 }}>

                <View style={{ width: '100%', flex: 1 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: COLORS.darkBlue, alignItems: 'center' }}>
                        <Feather.Button name="arrow-left" style={{ paddingRight: 0, backgroundColor: COLORS.darkBlue, }} color={COLORS.gray} onPress={() => {
                            setModalVisible(!modalVisible)
                        }} />
                        <Text style={{ color: COLORS.gray, fontWeight: 'bold' }}>NEW TASK</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center' }}>


                        <TextInput onChangeText={(text) => { setEventTitle(text) }} value={eventTitle} style={{ padding: 10, color: COLORS.white, fontSize: 30 }} placeholder='Event Title' placeholderTextColor={COLORS.gray} />

                        <TextInput value={eventDescription} onChangeText={(text) => { setEventDescription(text) }} style={{ fontSize: 18, padding: 10, color: COLORS.white }} placeholder='Event Description' placeholderTextColor={COLORS.gray} />

                        <View>
                            <Text style={{ color: COLORS.red, paddingLeft: 10, fontWeight: 'bold', fontSize: 18 }}>Task Category</Text>
                            <TaskCategories />
                        </View>

                        <View style={{ gap: 10, flexDirection: 'row', padding: 10 }}>
                            <Ionicons name='alarm' color={COLORS.red} size={25} />
                            <CustomDatePicker state={eventStartTime} handler={setEventStartTime} key={'main'} type={'main'} mode={'time'} display={'inline'} />

                            <CustomDatePicker state={eventEndTime} handler={setEventEndTime} key={'complement'} type={'complement'} mode={'time'} display={'inline'} />

                        </View>
                        <View style={{ gap: 10, flexDirection: 'row', padding: 10 }}>
                            <AntDesign name='calendar' size={25} color={COLORS.red} />

                            <CustomDatePicker state={eventDate} handler={setEventDate} key={'calendar'} type='calendar' title={'title'} display={'inline'} mode={'date'} />
                        </View >
                        <EventMakerBtn />



                    </View>
                </View>
            </View>
            <Toast position='top' topOffset={20} />
        </Modal>
    )
}

export default EventMaker