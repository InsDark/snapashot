import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import {getItemAsync, deleteItemAsync} from 'expo-secure-store'
import Auth from './auth'
import Home from './home'
import { View, Text } from 'react-native'

const Index = () => {
  const [MainComponent, setMainComponent] = useState()
  useEffect(() => {
    const getAuth = async () => {
      const auth = await getItemAsync('auth')
      if(auth) {
        const dateNow = Date.now()
        if(dateNow > auth.expiration) {
            await deleteItemAsync('auth')
            setMainComponent(<Auth/>)
            return
        }
        setMainComponent(<Home/>)
        return
      }
    }
    getAuth()
  },[])
  return (
    <SafeAreaView >
      {MainComponent}
    </SafeAreaView>
  )
}

export default Index