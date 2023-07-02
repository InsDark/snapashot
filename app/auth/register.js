
import React from 'react'
import BasicRegister from './../../components/auth/register/basicRegister'
import {  StyleSheet } from 'react-native'
import RegisterBG from './../../assets/login_bg.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
import { StatusBar } from 'expo-status-bar'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.darkBlue,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    image: {
      width: 150, 
      height: 150,
      zIndex: 3
    }
})
const Register = () => {
  return (
    <SafeAreaView style={styles.main}>
        <RegisterBG width={240} height={240}/>
        <BasicRegister Toast={Toast}/>
        <StatusBar style='light'/>
        <Toast/>
    </SafeAreaView>
  )
}

export default Register