import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../../COLORS'

const EmptyGallery = () => {
  return (
    <View style={{backgroundColor:COLORS.darkBlue, flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <Text style={{color: COLORS.white, padding: 20, fontSize: 20}}> You don't have images for this section, change to another one or snap a shot </Text>
    </View>
  )
}

export default EmptyGallery