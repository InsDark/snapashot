import React from 'react'
import {  StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
import BottomNav from '../../components/BottomNav'
import Navbar from './../../components/Navbar'
import Calendar from '../../components/Calendar'
import { StatusBar } from 'react-native'
const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.lightBlue,
    flex: 1,
    height: '100%',
    gap: 10,
    alignItems: 'center'
  }
})
const calendar = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Navbar />
        <Calendar />
      <BottomNav />
      <StatusBar barStyle="light" />
    </SafeAreaView>
  )
}

export default calendar