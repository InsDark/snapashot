import React from 'react'
import {Image} from 'react-native'
import {Asset} from 'expo-asset'
const Logo = ({style}) => {
  const [logoAssetUri, setLogoAssetUri] = React.useState('./')
  Asset.loadAsync( require('./../icons/logo.jpg')).then(asset => {
    setLogoAssetUri(asset[0].localUri)
  })

  return (
    <Image style={style} source={{uri:logoAssetUri}}></Image>

  )
}

export default Logo