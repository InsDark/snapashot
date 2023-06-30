import React, { useEffect } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { COLORS } from '../../COLORS'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../../components/Navbar'
import CalendarEvents from '../../components/calendar/CalendarEvents'
import BottomNav from '../../components/BottomNav'
import Quote from '../../components/Quote'
import { getMarkedDates } from '../../helpers/calendar/getMarkedDates'
import { CalendarStore } from '../../helpers/stores/CalendarStore'
import { getGallerySections } from '../../helpers/camera/getGallerySections'
import Separator from '../../components/Separator'
const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    backgroundColor: COLORS.darkBlue,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flex: 1,

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
  const { setMarkedDays } = CalendarStore(state => state)
  useEffect(() => {
    const main = async () => {
      await getMarkedDates(setMarkedDays)
      await getGallerySections()
    }
    main()
  }, [])
  return (
    <SafeAreaView style={styles.screen}>
      <Navbar />
      <Quote />
      <Separator/>
      <CalendarEvents style={{ width: '100%', flex: 5}} />
      <Separator/>
      <BottomNav />
    </SafeAreaView>
  )
}

export default Home