import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
import BottomNav from '../../components/BottomNav'
import Navbar from './../../components/Navbar'
import Calendar from '../../components/Calendar'
import { StatusBar } from 'react-native'
import Separator from '../../components/Separator'
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
      <Calendar />
      <Separator/>
      <BottomNav />
      <StatusBar barStyle="light" />
    </SafeAreaView>
  )
}

export default calendar