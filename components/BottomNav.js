import React, { useState } from 'react'
import { View } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { COLORS } from '../COLORS'
import { useRouter } from 'expo-router'

const BottomNav = () => {
  const [currentRoute, setCurrentRoute] = useState('Home')
  const router = useRouter()
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '100%', backgroundColor: COLORS.lightGreen }}>

      <View>
        <AntDesign.Button iconStyle={{ marginRight: 0 }} onPress={() => { router.push('/') }} size={25} style={{ flexDirection: 'column' }} backgroundColor={currentRoute == 'Home' ? COLORS.darkBlue : COLORS.lightGreen} color={currentRoute == 'Home' ? COLORS.white : COLORS.darkBlue} name='home'>Home</AntDesign.Button>
      </View>

      <View>
        <AntDesign.Button
          onPress={() => {
            router.push('/home/calendar')
            setCurrentRoute('Calendar')
          }} size={25} style={{ flexDirection: 'column' }} iconStyle={{ marginRight: 0 }} backgroundColor={currentRoute == 'Calendar' ? COLORS.darkBlue : COLORS.lightGreen} color={currentRoute == 'Calendar' ? COLORS.white : COLORS.darkBlue} name='calendar'>Calendar</AntDesign.Button>
      </View>

      <View>
        <AntDesign.Button iconStyle={{ marginRight: 0 }} onPress={() => { router.push('/home/camera') }} size={25} style={{ flexDirection: 'column' }} backgroundColor={currentRoute == 'Camera' ? COLORS.darkBlue : COLORS.lightGreen} color={currentRoute == 'Camera' ? COLORS.white : COLORS.darkBlue} name='camera'>Camera</AntDesign.Button>
      </View>

      <View>
        <Entypo.Button iconStyle={{ marginRight: 0 }} onPress={() => {
          router.push('home/gallery')
          setCurrentRoute('Gallery')
        }} size={25} style={{ flexDirection: 'column' }} backgroundColor={currentRoute == 'Gallery' ? COLORS.darkBlue : COLORS.lightGreen} color={currentRoute == 'Gallery' ? COLORS.white : COLORS.darkBlue} name='folder-images'>Gallery</Entypo.Button>
      </View>

    </View>
  )
}

export default BottomNav