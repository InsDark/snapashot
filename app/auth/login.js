import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './../../firebase'
import { COLORS } from '../../COLORS'
import {setItemAsync} from 'expo-secure-store'
import Button from '../../components/Button'
import { useRouter } from 'expo-router'
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    backgroundColor: COLORS.darkBlue
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    padding: 10,
    width: '20%',
    borderRadius: 15
  },
  textInput: {
    paddingLeft: 10,
    padding: 5,
    width: '60%',
    color: COLORS.white,
    fontSize: 16,
    backgroundColor: COLORS.lightBlue
  }
})
const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginUser = async () => {
    try {

      const {user} = await signInWithEmailAndPassword(auth, email, password)
       const expiration = user.stsTokenManager.expirationTime
       const userEmail = user.email
       const userCred = JSON.stringify({expiration, userEmail})
      if(!user) {
        return alert("The credentials are incorrect")
      }
      setItemAsync('auth', userCred)
      router.push('/')
      return

        
    } catch (err) {
      alert(err)
    }
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Logo style={{ width: 150, height: 150 }} uri={'https://clipground.com/images/long-shutter-clipart-3.jpg'}></Logo>

      <TextInput placeholder='Email' placeholderTextColor={COLORS.gray} style={styles.textInput} onChange={e => setEmail(e.nativeEvent.text)} value={email}></TextInput>

      <TextInput placeholder='Password' secureTextEntry={true} placeholderTextColor={COLORS.gray} onChange={e => setPassword(e.nativeEvent.text)} value={password} style={styles.textInput}></TextInput>

      <Button textStyle={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }} handler={loginUser} buttonStyle={styles.button} title={'LOGIN'}></Button>

    </SafeAreaView>
  )
}

export default Login