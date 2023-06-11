import React from 'react'
import { View, Text } from 'react-native'
import Button from './../Button'
import { ModalStore } from '../../helpers/stores/ModalStore'
import EventMaker from './EventMaker'
const EmptyDate = () => {
    const {modalVisible, setModalVisible} = ModalStore(state => state)
    return (
        <View style={{}}>
            <Text>
                You don't have somethig for yourself

            </Text>
            <Button title={'Add Task'} handler={() => {
                setModalVisible(!modalVisible)
            }}/>
            <EventMaker/>
        </View>
    )
}

export default EmptyDate