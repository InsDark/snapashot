import React from 'react'
import { View , StyleSheet, Text } from 'react-native'
import SectionsPicker from '../gallery/SectionsPicker'
import { COLORS } from '../../COLORS'

const Navbar = () => {
    const styles = StyleSheet.create({
        navbar: {
            backgroundColor: COLORS.darkBlue,
            width: '100%',
            color: 'white',
            justifyContent: 'center',
        },
        text: {
            color: 'white',
            textAlign: 'center',
        }
    })
  return (
    <View style={styles.navbar}>
        <SectionsPicker/>
    </View>
  )
}

export default Navbar