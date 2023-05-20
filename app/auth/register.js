
import React from 'react'
import BasicRegister from './../../components/auth/register/basicRegister'
import { Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.darkBlue,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
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
      <Image style={styles.image}  source={{uri: 'https://clipground.com/images/long-shutter-clipart-3.jpg'}}></Image>
        <Text style={{color: COLORS.white, fontSize: 22}} >Sign In To Continue</Text>
        <BasicRegister/>
    </SafeAreaView>
  )
}

export default Register