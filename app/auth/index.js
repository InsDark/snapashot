import React from 'react'
import { COLORS } from '../../COLORS'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'
import WelcomeBG from './../../assets/welcome.svg'
const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    backgroundColor: COLORS.darkBlue,
  },
  text: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    width: '70%'
  },
  main: {
    color: COLORS.white,
    backgroundColor: COLORS.red,
  },
  complement: {
    color: COLORS.white,
    borderColor: COLORS.red,
    borderWidth: 2,

  }
})

const Auth = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <WelcomeBG width={200} height={200} />
      <Text style={{ fontSize: 20, color: COLORS.gray }}>WELCOME TO</Text>
      <Text style={styles.text}>SNAPASHOT</Text>


      <Link style={{ ...styles.button, ...styles.main }} href={'/auth/register'} > SIGN UP</Link>
      <Link style={{ ...styles.button, ...styles.complement }} href={'/auth/login'}> LOG IN</Link>
    </SafeAreaView>
  )
}

export default Auth