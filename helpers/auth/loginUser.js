import { setItemAsync } from "expo-secure-store"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './../../firebase'
export const loginUser = async ({ email, password }) => {
  try {
    if (!email.trim() || !password.trim()) {
      return { type: 'error', message: 'Please fill all the fields' }
    }
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const expiration = user.stsTokenManager.expirationTime
    const userEmail = user.email
    const userCred = JSON.stringify({ expiration, userEmail })
    await setItemAsync('auth', userCred)

    return {type: 'success'}

  } catch (err) {
    return { type: 'error', message: "No user was found check your credentials" }
  }
}