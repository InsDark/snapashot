import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import { COLORS } from '../../../COLORS'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    input: {
        padding: 8,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        color: "white",
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1
        }

})

const PasswordInput = ({state, handlerState, title}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View style={styles.input}>
            <Entypo size={20} color={COLORS.red} name='lock' />
            <TextInput style={{ color: COLORS.white, flex: 1 }} secureTextEntry={!showPassword} value={state} onChange={(e) => handlerState(e.nativeEvent.text)} placeholder={title} placeholderTextColor={COLORS.gray}></TextInput>
            {showPassword ? <Entypo color={COLORS.gray} name='eye-with-line' size={20} onPress={() => {
                setShowPassword(!showPassword)
            }}  /> : <Entypo color={COLORS.gray} name='eye' size={20} onPress={() => {
                setShowPassword(!showPassword)
            }} />}
        </View>
    )
}

export default PasswordInput