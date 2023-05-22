import React from 'react'
import { Text, View } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { COLORS } from '../COLORS'
import { useRouter } from 'expo-router'
const moveTo = (e) => {

}
const BottomNav = () => {
  const router = useRouter()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 2, width: '100%', backgroundColor: COLORS.lightGreen }}>

      <View>
        <AntDesign.Button  onPress={() => {router.push('/')}}   size={25} style={{ flexDirection: 'column' }} backgroundColor={COLORS.lightGreen} color={COLORS.darkBlue} name='home'>Home</AntDesign.Button>
      </View>

      <View>
        <AntDesign.Button  onPress={() => {router.push('/home/calendar')}}  size={25} style={{ flexDirection: 'column' }} backgroundColor={COLORS.lightGreen} color={COLORS.darkBlue} name='calendar'>Calendar</AntDesign.Button>
      </View>

      <View>
        <AntDesign.Button onPress={() => {router.push('/home/camera')}}  size={25} style={{ flexDirection: 'column' }} backgroundColor={COLORS.lightGreen} color={COLORS.darkBlue} name='camera'>Camera</AntDesign.Button>
      </View>

      <View>
        <FontAwesome.Button onPress={() => {router.push('home/gallery')}} size={25} style={{ flexDirection: 'column' }} backgroundColor={COLORS.lightGreen} color={COLORS.darkBlue} name='user-o'>Account</FontAwesome.Button>
      </View>

    </View>
  )
}

export default BottomNav