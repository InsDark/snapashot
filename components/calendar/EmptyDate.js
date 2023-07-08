import React from 'react'
import { View, Text, Image } from 'react-native'
import { ModalStore } from '../../stores/ModalStore'
import EventMaker from './EventMaker'
import { COLORS } from '../../COLORS'
import Logo from './../../assets/bg_no_taks.svg'
import ButtonTaskMaker from './ButtonTaskMaker'
const EmptyDate = () => {
    const { modalVisible, setModalVisible } = ModalStore(state => state)
    
    return (
        <View style={{ height: '100%', justifyContent: 'center', backgroundColor: COLORS.darkBlue , alignItems: 'center', gap: 10}}>
                <Logo width={200} height={200}/>
                <Text style={{ fontSize: 18, textAlign: 'center', color: COLORS.gray , width: '80%'}}>

                    You don't have any events today, look up for tomorrow or just relax

                </Text>
            <ButtonTaskMaker modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <EventMaker />
        </View>
    )
}

export default EmptyDate