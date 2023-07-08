import React from 'react'
import { Text, FlatList, View } from 'react-native'
import { COLORS } from '../../COLORS'
import dayjs from 'dayjs'
import Separator from './../Separator'
import ButtonTaskMaker from './ButtonTaskMaker'
import { ModalStore } from '../../stores/ModalStore'
import EventItem from './EventItem'
const EventsContainer = ({ events, currentDate }) => {
  const { setModalVisible, modalVisible } = ModalStore(state => state)
  const eventsFilter = events.filter(event => event.date == dayjs(currentDate).format('YYYY-MM-DD'))
  return (
    <View style={{ height: '100%' }}>
      <Text style={{ color: COLORS.white, fontSize: 22, fontWeight: 'bold', backgroundColor: COLORS.darkBlue, textAlign: 'center' }}>EVENTS</Text>
      <FlatList style={{ backgroundColor: COLORS.darkBlue, width: '100%' }}
        data={eventsFilter}
        ItemSeparatorComponent={<View style={{ height: 1, backgroundColor: COLORS.gray, width: '70%', display: 'flex', marginRight: '10%', alignSelf: 'flex-end' }} />}
        renderItem={({ item }) => (<EventItem item={item}/>)}
      >
      </FlatList>
      <ButtonTaskMaker backgroundColor={COLORS.darkBlue} setModalVisible={setModalVisible} modalVisible={modalVisible} />
    </View>
  )
}

export default EventsContainer