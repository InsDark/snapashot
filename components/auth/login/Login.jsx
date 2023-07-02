import React, { useState } from 'react'
import PasswordInput from '../register/PasswordInput'
import Button from '../../Button'
import { COLORS } from '../../../COLORS'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { loginUser } from '../../../helpers/auth/loginUser'
import { SafeAreaView, Text, TextInput } from 'react-native'
import { View } from 'react-native'

const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.red,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
  },
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

const Login = ({Toast}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  return (
    <SafeAreaView style={{ width: '70%', gap: 30 }}>
      <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }}>LOG IN</Text>

      <View style={styles.input}>
        <MaterialIcons size={20} color={COLORS.red} name='email' />
        <TextInput style={{ color: COLORS.white, flex: 1 }} onChange={(e) => setEmail(e.nativeEvent.text)} value={email} placeholder='Email' placeholderTextColor={'#817D8A'} ></TextInput>
      </View>

      <PasswordInput handlerState={setPassword} state={password} title={'Password'} />

      <Button textStyle={{ color: COLORS.white, alignSelf: 'center', fontSize: 16 }} handler={async () => {
        const res = await loginUser({ email, password })
        if(res.type == 'success' ) {
          router.replace('/')
        }
        Toast.show({
          type: res.type,
          text1: res.message
        })
        
      }} buttonStyle={styles.button} title={'Log in'}></Button>

      <Text style={{ color: COLORS.gray, textAlign: 'center' }}>Don't have an account? <Text onPress={() => {
        router.push('/auth/register')
      }} style={{ fontWeight: 'bold', color: COLORS.white }}>Sign Up</Text></Text>
    </SafeAreaView>
  )
}

export default Login