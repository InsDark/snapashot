import React, { useState } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../../COLORS'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import Button from '../../Button'
import { createNewUser } from '../../../helpers/auth/createNewUser'
import { useRouter } from 'expo-router'
import { Text } from 'react-native'
import PasswordInput from './PasswordInput'

const styles = StyleSheet.create({
    input: {
        padding: 8,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        color: "white",
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1
    },
    main: {
        gap: 30,
        width: '70%'
    },
    text: {
        color: COLORS.white,
        alignSelf: 'center',
        fontSize: 16
    },
    button: {
        backgroundColor: COLORS.red,
        padding: 10,
        borderRadius: 20
    }
})
const BasicRegister = ({Toast}) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [userName, setUserName] = useState('')
    const router = useRouter()


    return (
        <SafeAreaView style={styles.main} >
            <Text style={{ color: COLORS.white, fontSize: 22, fontWeight: 'bold' }} >Sign Up</Text>

            <View style={styles.input}>
                <Feather size={20} color={COLORS.red} name='user' />
                <TextInput style={{
                    color: COLORS.white, flex: 1
                }} onChange={(e) => setUserName(e.nativeEvent.text)} value={userName} placeholder='User Name' placeholderTextColor={'#817D8A'} ></TextInput>
            </View>

            <View style={styles.input}>
                <MaterialIcons size={20} color={COLORS.red} name='email' />
                <TextInput style={{ color: COLORS.white, flex: 1 }} onChange={(e) => setEmail(e.nativeEvent.text)} value={email} placeholder='Email' placeholderTextColor={'#817D8A'} ></TextInput>
            </View>



            <PasswordInput state={password}  handlerState={setPassword} title={'Password'} />

            <PasswordInput state={passwordConfirm} handlerState={setPasswordConfirm} title={"Confirm password"} />

            <Button title={'Create Account'} handler={async() => { 
                const res = await createNewUser(email, password, userName, passwordConfirm)
                if(!res) return 
                if(res.type === 'success') {
                    router.replace('/')
                }
                Toast.show({
                    type: res.type,
                    text1: res.message
                })
                
                }} textStyle={styles.text} buttonStyle={styles.button} />
            
            <Text style={{color: COLORS.gray, textAlign: 'center'}}>Have an account? <Text onPress={() => {
                router.push('/auth/login')
            }} style={{fontWeight: 'bold', color: COLORS.white}}>Log In</Text></Text>
        </SafeAreaView>
    )
}

export default BasicRegister