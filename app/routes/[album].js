import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { COLORS } from '../../COLORS'
import { useLocalSearchParams } from 'expo-router'
import { getAlbumAsync, getAssetsAsync } from 'expo-media-library'
import AssetItem from '../../components/album/AssetItem'
import AssetMaker from '../../components/album/AssetMaker'
import { SafeAreaView } from 'react-native-safe-area-context'
const album = () => {
  const { album : albumName } = useLocalSearchParams()
  const [assets, setAssets] = useState([])
  useEffect(() => {
    const main = async () => {
      const albumRef = await getAlbumAsync(albumName)
      if(!albumRef) return 
      const { assets } = await getAssetsAsync({ album: albumRef })
      setAssets(assets)
    }
    main()
  }, [albumName])
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkBlue, flex: 1 }}>
      <ScrollView style={{  flex: 1 }} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 15, padding: 20, justifyContent: 'space-around' }} >
        {assets?.length !== 0 ? assets?.map((asset) =>
          <AssetItem asset={asset} />
        ) : <Text>No Assets</Text>}
      </ScrollView>
      <AssetMaker  albumName={albumName} />
      <StatusBar barStyle={'default'} />
    </SafeAreaView>
  )
}

export default album