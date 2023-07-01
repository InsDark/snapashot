import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
import BottomNav from '../../components/BottomNav'
import Navbar from './../../components/Navbar'
import { StatusBar } from 'react-native'
import Separator from '../../components/Separator'
import WeeklyCalendar from '../../components/calendar/WeeklyCalendar'
import CalendarEvents from '../../components/calendar/CalendarEvents'
const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.darkBlue,
    flex: 1,
    gap: 10,
    alignItems: 'center'
  }
})
const calendar = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Navbar />
      <WeeklyCalendar/>
      <Separator/>
      <CalendarEvents style={{flex: 4, backgroundColor: COLORS.darkBlue, width: '100%', height: '100%'}}/>
      <Separator/>
      <BottomNav />
      <StatusBar barStyle="light" />
    </SafeAreaView>
  )
}

export default calendar