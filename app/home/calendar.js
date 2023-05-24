import React from 'react'
import {  StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
import BottomNav from '../../components/BottomNav'
import Navbar from './../../components/Navbar'
import Calendar from '../../components/Calendar'
import CalendarEvents from '../../components/calendar/CalendarEvents'
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
      <Navbar />
      <View style={{flex: 11, alignItems: 'center'}}>
        <Calendar />
        <CalendarEvents />
      </View>
      <BottomNav />
    </SafeAreaView>
  )
}

export default calendar