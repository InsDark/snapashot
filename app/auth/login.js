import { StyleSheet } from 'react-native'
import LoginBG from './../../assets/register_bg.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginComponent from './../../components/auth/login/Login'
import { COLORS } from '../../COLORS'
import { StatusBar } from 'expo-status-bar'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    backgroundColor: COLORS.darkBlue
  }
})
const Login = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <LoginBG width={200} height={200} />
      <LoginComponent Toast={Toast} />
      <StatusBar style='light' />
      <Toast/>
    </SafeAreaView>
  )
}

export default Login