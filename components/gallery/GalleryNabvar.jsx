import { View } from 'react-native'
import { COLORS } from '../../COLORS'
import {Entypo} from '@expo/vector-icons'
const GalleryNabvar = () => {
  return (
    <View style={{ position: 'absolute', bottom: 30, right: 20, flexDirection: 'row', alignItems: 'center', gap: 20 }}>
        <Entypo name='trash' onPress={() => {
            
        }} size={30} color={COLORS.white} />
    </View>
  )
}

export default GalleryNabvar