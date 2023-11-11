import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../COLORS'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  TabView } from '@rneui/themed'
import CalendarEvents from '../../components/calendar/CalendarEvents'
import Quote from '../../components/Quote'
import { getMarkedDates } from '../../helpers/calendar/getMarkedDates'
import { CalendarStore } from '../../stores/CalendarStore'
import { getGallerySections } from '../../helpers/gallery/getGallerySections'
import Separator from '../../components/Separator'
import { StatusBar } from 'expo-status-bar'
import BottomNav from '../../components/BottomNav'
import { navStore } from '../../stores/NavStore'
import Gallery from '../../components/gallery/Gallery'

const Home = () => {
  const { setMarkedDays } = CalendarStore(state => state)
  const { index, setIndex } = navStore(state => state)
  useEffect(() => {
    const main = async () => {
      await getMarkedDates(setMarkedDays)
      await getGallerySections()
    }
    main()
  }, [])
  return (
    <>
      <TabView value={index} onChange={(e) => setIndex(e)} animationType='spring'>
        <TabView.Item style={{ width: '100%', flex: 1 }}>
          <SafeAreaView style={styles.screen}>
            <Quote />
            <Separator />
            <CalendarEvents style={{ width: '100%', flex: 5 }} />
          </SafeAreaView>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}} >
          <Gallery/>
        </TabView.Item>
      </TabView>
      <BottomNav />
      <StatusBar style='light' />
    </>

  )
}

export default Home


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