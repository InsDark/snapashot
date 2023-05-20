import React from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from './Logo'
import Button from './Button'
import { COLORS } from '../COLORS'
import {deleteItemAsync} from 'expo-secure-store'
import {useRouter} from 'expo-router'
const styles = StyleSheet.create({
    navbar: {
        backgroundColor: COLORS.lightBlue,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between'

    }
})
const Navbar = () => {
    const router = useRouter()
    const logOut = async() => {
        const res = await deleteItemAsync('auth')
        console.log(res)
        router.replace('/')
        return
    }
    return (
        <View style={styles.navbar}>
            <Logo style={{ width: 50, height: 50 }} />
            <Button buttonStyle={{backgroundColor: COLORS.darkBlue, padding: 10,}} textStyle={{color: COLORS.white, fontWeight: 'bold',  fontSize: 20}} title={'Log Out'} handler={logOut}/>
        </View>
    )
}

export default Navbar