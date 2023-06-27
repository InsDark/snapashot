import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import {getItemAsync, deleteItemAsync} from 'expo-secure-store'
import SplashScreen from 'expo-splash-screen'
import Auth from './auth'
import Home from './home'

const Index = () => {
  SplashScreen.preventAutoHideAsync()
  setTimeout(SplashScreen.hideAsync, 2000)
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
      setMainComponent(<Auth/>)
    }
    getAuth()
  },[])
  return (
    <SafeAreaView style={{ height: '100%'}}>
      {MainComponent}
    </SafeAreaView>
  )
}

export default Index