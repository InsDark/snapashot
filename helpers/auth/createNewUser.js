import {setItemAsync} from 'expo-secure-store'
import { doc, setDoc} from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { Redirect } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export const createNewUser = async (email, password, userName, passwordConfirm, router) => {
    try {
        
        if (typeof passwordConfirm !== 'string' && typeof password === 'string') {
            alert('Password must be a string')
            return
        }

        if (password.length === 0 || passwordConfirm.length === 0 || email.length === 0 || userName.trim().length === 0) {
            alert('Password and email must be at least have one character')
            return
        }

        if (password !== passwordConfirm) {
            alert('Passwords dont match try again')
            return
        }
        const userCredentials = await createUserWithEmailAndPassword(auth, email.trim(), password)

        const expiration = userCredentials.user.stsTokenManager.expirationTime

        if (!userCredentials) {
            alert('Something went wrong try again')
            return
        }


        await setDoc(doc(db, 'users', email),  {
            userName
        })
        
        await setItemAsync('auth', JSON.stringify({expiration, email, userName}))

        
        router.replace('/')

    }
    catch (err) {
        alert(err)
    }
}