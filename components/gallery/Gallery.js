import { View } from 'react-native'
import { COLORS } from '../../COLORS'
import SectionsPicker from './SectionsPicker'
import GalleryViewer from './GalleryViewer'

const Gallery = () => {
  return (
    <View style={{flex: 12, backgroundColor: COLORS.lightBlue}}>
        <SectionsPicker/>
        <GalleryViewer/>
    </View>
  )
}

export default Gallery