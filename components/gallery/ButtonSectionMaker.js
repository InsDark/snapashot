import React from 'react'
import Button from '../Button'
import { COLORS } from '../../COLORS'
import {ModalStore} from './../../stores/ModalStore'
const ButtonSectionMaker = () => {
    const {modalVisible, setModalVisible} = ModalStore(state => state)
    return (
        <Button handler={() => { setModalVisible(!modalVisible) }} title="+" buttonStyle={{ backgroundColor: COLORS.lightBlue, width: 50, height: 50, alignItems: 'center', padding: 10, borderRadius: 99999999}} textStyle={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }} />
    )
}

export default ButtonSectionMaker