import React from 'react'
import {  View } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { COLORS } from '../COLORS'
import { useRouter } from 'expo-router'

const BottomNav = () => {
  const router = useRouter()
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '100%', backgroundColor: COLORS.lightGreen }}>

      <View>
        <AntDesign.Button iconStyle={{marginRight: 0}} onPress={() => {router.push('/')}}   size={25} style={{ flexDirection: 'column'}}  backgroundColor={COLORS.lightGreen} color={COLORS.darkBlue} name='home'>Home</AntDesign.Button>
      </View>

      <View>
        <AntDesign.Button  onPress={() => {router.push('/home/calendar')}}  size={25} style={{ flexDirection: 'column' }} iconStyle={{marginRight: 0}} backgroundColor={COLORS.lightGreen} color={COLORS.darkBlue} name='calendar'>Calendar</AntDesign.Button>
      </View>

      <View>
        <AntDesign.Button iconStyle={{marginRight: 0}} onPress={() => {router.push('/home/camera')}}  size={25} style={{ flexDirection: 'column' }} backgroundColor={COLORS.lightGreen} color={COLORS.darkBlue} name='camera'>Camera</AntDesign.Button>
      </View>

      <View>
        <Entypo.Button iconStyle={{marginRight: 0}} onPress={() => {router.push('home/gallery')}} size={25} style={{ flexDirection: 'column' }} backgroundColor={COLORS.lightGreen} color={COLORS.darkBlue} name='folder-images'>Gallery</Entypo.Button>
      </View>

    </View>
  )
}

export default BottomNav