import React from 'react'
import { COLORS } from '../../COLORS'
import {Link} from 'expo-router'
import { SafeAreaView  } from 'react-native-safe-area-context'
import {StyleSheet, Text} from 'react-native'
const styles = StyleSheet.create({
    screen: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        backgroundColor: COLORS.darkBlue ,

    }, 
    text: {
      color: COLORS.white,
      fontSize: 25,
      fontWeight: 'bold'
    },
    button: {
      color: COLORS.darkBlue,
      backgroundColor: COLORS.lightGreen,
      borderRadius: 10,
      padding: 10,
      fontSize: 20,
      fontWeight: 'bold'
    }
})

const Auth = () => {
    return (
        <SafeAreaView style={styles.screen}>
          <Logo style={{height: 150, width:150}} uri={'https://clipground.com/images/long-shutter-clipart-3.jpg'}></Logo>
            <Text style={{fontSize: 20, color: COLORS.gray }}>WELCOME TO</Text>
            <Text style={styles.text}>SNAPASHOT</Text>
            <Link style={styles.button} href={'/auth/register'} > REGISTER</Link>
            <Link style={styles.button} href={'/auth/login'}> LOGIN</Link>
        </SafeAreaView>
      )
}

export default Auth