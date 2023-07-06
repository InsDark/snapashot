import { View } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { COLORS } from '../COLORS'
import { useRouter } from 'expo-router'
import {navStore} from './../helpers/stores/NavStore'
const BottomNav = () => {
  const {currentRoute, setCurrentRoute} = navStore(state => state)
  const router = useRouter()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', backgroundColor: COLORS.darkBlue, paddingBottom: 5 }}>

      <View>
        <AntDesign.Button iconStyle={{ marginRight: 0 }} onPress={() => { setCurrentRoute('Home') 
        router.push('/') }} size={25} style={{ flexDirection: 'column', padding: 0 }} backgroundColor={COLORS.darkBlue} color={currentRoute == 'Home' ? COLORS.red : COLORS.gray} name='home'>Home</AntDesign.Button>
      </View>

      <View>
        <AntDesign.Button
          onPress={() => {
            router.push('/home/calendar')
            setCurrentRoute('Calendar')
          }} size={25} style={{ flexDirection: 'column', padding: 0 }} iconStyle={{ marginRight: 0 }} backgroundColor={COLORS.darkBlue} color={currentRoute == 'Calendar' ? COLORS.red : COLORS.gray} name='calendar'>Calendar</AntDesign.Button>
      </View>

      <View>
        <AntDesign.Button iconStyle={{ marginRight: 0 }} onPress={() => { router.push('/home/camera') }} size={25} style={{ flexDirection: 'column', padding: 0 }} backgroundColor={COLORS.darkBlue} color={currentRoute == 'Camera' ? COLORS.red : COLORS.gray} name='camera'>Camera</AntDesign.Button>
      </View>

      <View>
        <Entypo.Button iconStyle={{ marginRight: 0 }} onPress={() => {
          router.push('home/gallery')
          setCurrentRoute('Gallery')
        }} size={25} style={{ flexDirection: 'column' , padding: 0}} backgroundColor={COLORS.darkBlue} color={currentRoute == 'Gallery' ? COLORS.red : COLORS.gray} name='folder-images'>Gallery</Entypo.Button>
      </View>

    </View>
  )
}

export default BottomNav