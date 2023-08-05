import React from 'react'
import { Text, FlatList, View } from 'react-native'
import { COLORS } from '../../COLORS'
import dayjs from 'dayjs'
import ButtonTaskMaker from './ButtonTaskMaker'
import { ModalStore } from '../../stores/ModalStore'
import EventItem from './EventItem'
import EventMaker from './EventMaker'
const EventsContainer = ({ events, currentDate }) => {
  const { setModalVisible, modalVisible } = ModalStore(state => state)
  const eventsFilter =  events.filter(event => event.date == dayjs(currentDate).format('YYYY-MM-DD'))
  return (
    <View style={{ height: '100%', marginTop: 15 }}>
      <Text style={{ color: COLORS.darkBlue, fontSize: 25, fontWeight: 'bold', backgroundColor: COLORS.white, textAlign: 'center', width: '50%', borderBottomRightRadius: 10, borderTopRightRadius: 10, padding: 4 }}>18 July</Text>
      <FlatList
        data={eventsFilter}
        ItemSeparatorComponent={<View style={{ margin: 15, height: 1, backgroundColor: COLORS.gray, width: '70%', display: 'flex', marginRight: '10%', alignSelf: 'flex-end' }} />}
        renderItem={({ item }) => (<EventItem key={item} item={item}/>)}
      >
      </FlatList>
      <ButtonTaskMaker backgroundColor={COLORS.darkBlue} setModalVisible={setModalVisible} modalVisible={modalVisible} />
      <EventMaker />
    </View>
  )
}

export default EventsContainer