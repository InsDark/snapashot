import { useEffect, useState } from 'react'
import { getItemAsync, deleteItemAsync } from 'expo-secure-store'
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen'
import Auth from './auth'
import Home from './home'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
const Index = () => {
  preventAutoHideAsync()
  setTimeout(hideAsync, 2000)
  const [MainComponent, setMainComponent] = useState()
  useEffect(() => {
    const getAuth = async () => {
      const auth = JSON.parse( await getItemAsync('auth'))
      if (!auth) {
        setMainComponent(<Auth />)
        return
      }

      const dateNow = Date.now()

      if (dateNow > auth.expiration) {
        await deleteItemAsync('auth')
        setMainComponent(<Auth />)
        return
      }
      setMainComponent(<Home />)
    }
    getAuth()
  }, [])
  return (
    <View style={{height: '100%' }}>
      {MainComponent}
      <StatusBar style='light'/>
    </View>
  )
}

export default Index