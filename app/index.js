import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import {getItemAsync} from 'expo-secure-store'
import Auth from './auth'
import Home from './home'
import { View } from 'react-native'

const Index = () => {
  const [MainComponent, setMainComponent] = useState(<Auth/>)
  useEffect(() => {
    const getAuth = async () => {
      const auth = await getItemAsync('auth')
      if(auth) {
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