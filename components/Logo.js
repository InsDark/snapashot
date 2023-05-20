import React from 'react'
import {Image} from 'react-native'
const Logo = ({style, uri}) => {
  return (
    <Image style={style}  source={{uri: 'https://clipground.com/images/long-shutter-clipart-3.jpg'}}></Image>

  )
}

export default Logo