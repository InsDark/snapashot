import { useEffect } from 'react'
import { getItemAsync, deleteItemAsync } from 'expo-secure-store'
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen'
import { useRouter } from 'expo-router'
const Index = () => {
  preventAutoHideAsync()
  const router = useRouter()
  setTimeout(hideAsync, 2000)
  useEffect(() => {
    const getAuth = async () => {
      const auth = JSON.parse( await getItemAsync('auth'))
      if (!auth) {
        router.replace('/auth')
        return
      }

      const dateNow = Date.now()

      if (dateNow > auth.expiration) {
        await deleteItemAsync('auth')
        router.replace('/auth')
        return
      }

      router.replace('/routes/home')
      return
    }
    getAuth()
  }, [])

}

export default Index