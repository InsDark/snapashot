import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Logo from './Logo'
import { COLORS } from '../COLORS'
const styles = StyleSheet.create({
    navbar: {
        backgroundColor: COLORS.darkBlue,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        gap: 10
    },
    title: {
        color: COLORS.lightGreen,
        fontSize: 25
    }
})
const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Logo style={{ width: 55, height: 55 }} />
            <Text style={styles.title}>SnapAShot</Text>
        </View>
    )
}

export default Navbar