import React from 'react'
import { View, Text } from 'react-native'
import Button from './../Button'
import { ModalStore } from '../../helpers/stores/ModalStore'
import EventMaker from './EventMaker'
import { COLORS } from '../../COLORS'
import ButtonTaskMaker from './ButtonTaskMaker'
const EmptyDate = () => {
    const { modalVisible, setModalVisible } = ModalStore(state => state)
    return (
        <View style={{   height: '100%', justifyContent: 'center', backgroundColor: COLORS.darkBlue}}>
            <View style={{gap: 10}} >

                <Text style={{ fontSize: 20, textAlign: 'center', color: COLORS.white}}>
                    🎉🎉🎉 Congrats!!! 🎉🎉🎉

                </Text>
                <Text style={{ fontSize: 20, textAlign: 'center', color: COLORS.white}}>

                    You don't have any events today, look up for tomorrow or just relax

                </Text>
            </View>
            <ButtonTaskMaker modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            <EventMaker />
        </View>
    )
}

export default EmptyDate