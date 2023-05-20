import React from 'react'
import { View , StyleSheet, Text } from 'react-native'

const Navbar = () => {
    const styles = StyleSheet.create({
        navbar: {
            flex: 1,
            backgroundColor: 'black',
            width: '100%',
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            color: 'white',
            textAlign: 'center',
        }
    })
  return (
    <View style={styles.navbar}>
        <Text  style={styles.text} >Test Mode</Text>
    </View>
  )
}

export default Navbar