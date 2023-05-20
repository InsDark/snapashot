import React, { useState } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../../COLORS'
import { MaterialIcons, Entypo, Feather } from '@expo/vector-icons'
import Button from '../../Button'
import { createNewUser } from '../../../helpers/auth/createNewUser'
import { useRouter } from 'expo-router'

const styles = StyleSheet.create({
    input: {
        padding: 8,
        backgroundColor: '#38304D',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        color: "white",
        borderRadius: 10
    },
    main: {
        gap: 30
    },
    text: {
        color: COLORS.darkBlue,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    button: {
        backgroundColor: COLORS.lightGreen,
        padding: 10,
        borderRadius: 20
    }
})
const BasicRegister = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [userName, setUserName] = useState('')
    const router = useRouter()
    

    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.input}>
                <Feather size={20} color={COLORS.white} name='user' />
                <TextInput  style={{color: COLORS.white}} onChange={(e) => setUserName(e.nativeEvent.text)}  value={userName} placeholder='User Name' placeholderTextColor={'#817D8A'} ></TextInput>
            </View>

            <View style={styles.input}>
                <MaterialIcons size={20} color={COLORS.white} name='email'/>
                <TextInput style={{color: COLORS.white}} onChange={(e) => setEmail(e.nativeEvent.text)} value={email}  placeholder='Email' placeholderTextColor={'#817D8A'} ></TextInput>
            </View>

            <View style={styles.input}>
                <Entypo  size={20} color={COLORS.white} name='lock' />
                <TextInput  style={{color: COLORS.white}} secureTextEntry={true} value={password} onChange={(e) => setPassword(e.nativeEvent.text)} placeholderTextColor={COLORS.gray}  placeholder="Password"></TextInput>
            </View>

            <View style={styles.input}>
                <Entypo size={20} color={COLORS.white}  name='lock' />
                <TextInput style={{color: COLORS.white}} secureTextEntry={true} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.nativeEvent.text)}  placeholder="Confirm Password" placeholderTextColor={COLORS.gray}></TextInput>
            </View>


            <Button title={'Create Account'} handler={() => {createNewUser(email, password, userName, passwordConfirm, router)}} textStyle={styles.text} buttonStyle={styles.button} />
        </SafeAreaView>
    )
}

export default BasicRegister