import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../../COLORS'
import NoImages from './../../assets/no_images.svg'
const EmptyGallery = () => {
  return (
    <View style={{backgroundColor:COLORS.darkBlue, alignItems: 'center', justifyContent: 'center', height: '100%'}} >
      <NoImages width={240} height={200}/>
        <Text style={{color: COLORS.gray, width: '80%', fontSize: 18, textAlign: 'center'}}> You don't any albums to snap, let's create an album first!!! </Text>
    </View>
  )
}

export default EmptyGallery