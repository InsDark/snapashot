import React from 'react'
import { View, Text } from 'react-native'
import Button from './../Button'
import { ModalStore } from '../../helpers/stores/ModalStore'
import EventMaker from './EventMaker'
import { COLORS } from '../../COLORS'
const EmptyDate = () => {
    const { modalVisible, setModalVisible } = ModalStore(state => state)
    return (
        <View style={{   height: '100%', justifyContent: 'center', backgroundColor: COLORS.lightBlue}}>
            <View style={{gap: 10}} >

                <Text style={{ fontSize: 20, textAlign: 'center', color: COLORS.white}}>
                    🎉🎉🎉 Congrats!!! 🎉🎉🎉

                </Text>
                <Text style={{ fontSize: 20, textAlign: 'center', color: COLORS.white}}>

                    You don't have any events todays, look up for tomorrow or just relax

                </Text>
            </View>
            <Button handler={() => { setModalVisible(!modalVisible) }} title="+" buttonStyle={{ position: 'absolute', backgroundColor: COLORS.darkBlue, width: 50, height: 50, alignItems: 'center', padding: 10, borderRadius: 99999999, right: 15, bottom: 15 }} textStyle={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }} />
            <EventMaker />
        </View>
    )
}

export default EmptyDate