import React from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../COLORS'
import { Link } from 'expo-router'
import Navbar from '../../components/Navbar'
import Calendar from '../../components/Calendar'
import CalendarEvents from '../../components/calendar/CalendarEvents'
import BottomNav from '../../components/BottomNav'
import Quote from '../../components/Quote'
const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: COLORS.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.lightGreen,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    color: COLORS.darkBlue,
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 10
  }
})
const Home = () => {
  return (
    <View style={styles.screen}>
      <Navbar />
      <View style={{flex: 12, width: Dimensions.get('screen').width}}>
        <CalendarEvents/>
        <Quote/>
        <BottomNav/>
      </View>
    </View>
  )
}

export default Home