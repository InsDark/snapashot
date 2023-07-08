import React from 'react'
import { Modal, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../COLORS'
import Button from '../Button'
import { ModalStore } from '../../stores/ModalStore'
const SectionMaker = () => {
    const {modalVisible, setModalVisible} = ModalStore(state => state)
    return (
        <Modal
            presentationStyle='overFullScreen'
            visible={modalVisible}
            animationType='slide'
            transparent={true}

        >
            <View style={{ backgroundColor: COLORS.lightBlue, flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <View style={{backgroundColor: COLORS.darkBlue, padding: 20, gap: 10}}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGreen , padding: 10}}>
                        <AntDesign.Button onPress={() => {setModalVisible(!modalVisible)}} iconStyle={{marginRight: 0, backgroundColor: COLORS.lightGreen, color: COLORS.darkBlue}} style={{backgroundColor: COLORS.lightGreen, padding: 0}} name='arrowleft' />
                        <Text>Section Maker</Text>

                    </View>
                    <TextInput placeholderTextColor={COLORS.gray} style={{ backgroundColor: COLORS.lightBlue, color: COLORS.white, padding: 10 }} placeholder='Section Name ...'></TextInput>
                    <Button title={"Add Section"} buttonStyle={{ backgroundColor: COLORS.lightGreen, padding: 10 }} textStyle={{ color: COLORS.darkBlue, textAlign: 'center', fontWeight: 'bold' }} />
                </View>
            </View>
        </Modal>
    )
}

export default SectionMaker