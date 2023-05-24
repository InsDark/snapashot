import React from 'react'
import {  Dimensions, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
import BottomNav from '../../components/BottomNav'
import Navbar from './../../components/Navbar'
import Calendar from '../../components/Calendar'
const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.lightBlue,
        flex: 1,
        height: '100%',
        gap: 10
    }
})
const calendar = () => {
  return (
    <SafeAreaView style={styles.main}>
        <Navbar/>
        <Calendar/>
        <BottomNav/>
    </SafeAreaView>
  )
}

export default calendar