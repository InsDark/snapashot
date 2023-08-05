import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../../components/Navbar'
import Separator from '../../components/Separator'
import SectionsPicker from '../../components/gallery/SectionsPicker'
import GalleryViewer from '../../components/gallery/GalleryViewer'
import { COLORS } from '../../COLORS'
import { StatusBar } from 'expo-status-bar'
import {usePermissions} from 'expo-media-library'
const gallery = () => {
  usePermissions()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBlue, gap: 10 }}>
      <Navbar />
      <SectionsPicker />
      <Separator />
      <GalleryViewer />
      <StatusBar style='light' />
    </SafeAreaView>
  )
}

export default gallery