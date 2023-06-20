import React from 'react'
import Button from '../Button'
import { COLORS } from '../../COLORS'
import {ModalStore} from './../../helpers/stores/ModalStore'
const ButtonSectionMaker = () => {
    const {modalVisible, setModalVisible} = ModalStore(state => state)
    return (
        <Button handler={() => { setModalVisible(!modalVisible) }} title="+" buttonStyle={{ backgroundColor: COLORS.darkBlue, width: 50, height: 50, alignItems: 'center', padding: 10, borderRadius: 99999999}} textStyle={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }} />
    )
}

export default ButtonSectionMaker