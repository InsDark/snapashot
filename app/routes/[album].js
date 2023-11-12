import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { COLORS } from '../../COLORS'
import { useLocalSearchParams } from 'expo-router'
import { getAlbumAsync, getAssetsAsync } from 'expo-media-library'
import AssetItem from '../../components/album/AssetItem'
import AssetMaker from '../../components/album/AssetMaker'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyAlbum from '../../components/album/EmpyAlbum'
import ImagesViewer from '../../components/gallery/ImagesViewer'
import { GalleryStore } from '../../stores/GalleryStore'
const album = () => {
  const { album: albumName } = useLocalSearchParams()
  const {albumImages : assets, setAlbumImages : setAssets, setCurrentAlbum} = GalleryStore(state => state)
  useEffect(() => {
    const main = async () => {
      const albumRef = await getAlbumAsync(albumName)
      if (!albumRef) return
      const { assets } = await getAssetsAsync({ album: albumRef })
      setAssets(assets)
      setCurrentAlbum(albumName)
    }
    main()
  }, [albumName])

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.darkBlue, flex: 1, height: '100%' }}>
      {assets?.length !== 0 ? 
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20, flexDirection: 'row', flex: 1, gap: 40, flexWrap: 'wrap' }} >
          {assets?.map((asset, index) => <AssetItem asset={asset} index={index} key={asset.uri} /> )}
        </ScrollView> : <EmptyAlbum/>}
          
      <AssetMaker albumName={albumName} updateAssets={(newAsset) => {
        setAssets([newAsset, ...assets])
      }} />
      <ImagesViewer/>
      <StatusBar barStyle={'default'} />
    </SafeAreaView>
  )
}

export default album