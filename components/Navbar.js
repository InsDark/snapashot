import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Octicons} from '@expo/vector-icons'
import { COLORS } from '../COLORS'
const styles = StyleSheet.create({
    navbar: {
        backgroundColor: COLORS.darkBlue,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        paddingRight: 20,
        paddingLeft: 20
    },
    title: {
        color: COLORS.white,
        fontSize: 20,
    }
})
const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Octicons name='three-bars' color={COLORS.white} size={20} />
            <Text style={styles.title}>SNAPASHOT</Text>
        </View>
    )
}

export default Navbar