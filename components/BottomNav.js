import { View } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import NavBtn from './navbar/NavBtn'
const BottomNav = () => {
  return (
    <View style={{ flexDirection: 'column', gap: 10}}>

      <NavBtn iconName={'home'} targetRoute={'Home'} vectorIconType={AntDesign} />

      <NavBtn iconName={'calendar'} targetRoute={'Calendar'} vectorIconType={AntDesign} />

      <NavBtn iconName={'camera'} targetRoute={'Camera'} vectorIconType={AntDesign} />

      <NavBtn iconName={'folder-images'} targetRoute={'Gallery'} vectorIconType={Entypo} />

    </View>
  )
}

export default BottomNav