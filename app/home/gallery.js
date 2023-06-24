import { SafeAreaView } from 'react-native-safe-area-context'
import BottomNav from './../../components/BottomNav'
import Navbar from './../../components/Navbar'
import Gallery from '../../components/gallery/Gallery'
const gallery = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <Navbar/>
        <Gallery/>
        <BottomNav/>
    </SafeAreaView>
  )
}

export default gallery