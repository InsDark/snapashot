import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../../COLORS'
import NoImages from './../../assets/EmptyAlbums.svg'
const EmptyAlbum = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <NoImages width={300} height={200}/>
        <Text style={{color: COLORS.gray, width: '80%', fontSize: 20, textAlign: 'center'}}> You don't have images in this album, change to another one or snap a shot </Text>
    </View>
  )
}

export default EmptyAlbum