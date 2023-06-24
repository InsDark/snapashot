import React, { useEffect } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { COLORS } from '../../COLORS'
import Navbar from '../../components/Navbar'
import CalendarEvents from '../../components/calendar/CalendarEvents'
import BottomNav from '../../components/BottomNav'
import Quote from '../../components/Quote'
import { getMarkedDates } from '../../helpers/calendar/getMarkedDates'
import { CalendarStore } from '../../helpers/stores/CalendarStore'
import { getGallerySections } from '../../helpers/camera/getGallerySections'
const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: COLORS.lightBlue,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flex: 1

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
  const {setMarkedDays} = CalendarStore(state => state)
    useEffect(() => {
      const main = async() => {
        await getMarkedDates(setMarkedDays)
        await getGallerySections()
      }
      main()
    }, [])
  return (
    <View style={styles.screen}>
      <Navbar />
      <CalendarEvents style={{ width: '100%', flex: 5, backgroundColor: COLORS.darkBlue}} />
      <Quote />
      <BottomNav />
    </View>
  )
}

export default Home