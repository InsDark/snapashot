import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import { getItemAsync, deleteItemAsync } from 'expo-secure-store'
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen'
import Auth from './auth'
import Home from './home'

const Index = () => {
  preventAutoHideAsync()
  setTimeout(hideAsync, 2000)
  const [MainComponent, setMainComponent] = useState()
  useEffect(() => {
    const getAuth = async () => {
      const auth = await getItemAsync('auth')
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
      return
    }
    getAuth()
  }, [])
  return (
    <SafeAreaView style={{ height: '100%' }}>
      {MainComponent}
    </SafeAreaView>
  )
}

export default Index