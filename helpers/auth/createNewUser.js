import { setItemAsync } from 'expo-secure-store'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export const createNewUser = async (email, password, userName, passwordConfirm) => {
    try {
        if (!email || !password || !userName || !passwordConfirm) {
            return { type: 'error', message: "Please fill all the fields" }
        }

        if (password.trim().length === 0 || passwordConfirm.trim().length === 0 || email.trim().length === 0 || userName.trim().length === 0) {

            return { type: 'error', message: "All the fields should have at least one charachter" }
        }

        if (password !== passwordConfirm) {
            return {
                type: 'error',
                message: 'Passwords doesnt match'
            }
        }

        const userCredentials = await createUserWithEmailAndPassword(auth, email.trim(), password)


        const expiration = userCredentials.user.stsTokenManager.expirationTime

        const [authRes, keyRes]= await Promise.allSettled([
            await setDoc(doc(db, 'users', email), {

                userName
            }),
            await setItemAsync('auth', JSON.stringify({ expiration, email, userName }))

        ])
        if(authRes.status == 'fulfilled' && keyRes.status == 'fulfilled'){
            return {type:'success'}
        }

    }
    catch (err) {
        console.log(err)
        return { type: 'error', message: err.message.slice(10, -1) }
    }
}