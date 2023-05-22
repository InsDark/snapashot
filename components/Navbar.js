import React from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from './Logo'
import Button from './Button'
import { COLORS } from '../COLORS'
import {deleteItemAsync} from 'expo-secure-store'
import {useRouter} from 'expo-router'
const styles = StyleSheet.create({
    navbar: {
        backgroundColor: COLORS.darkBlue,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
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
            <Logo style={{ width: 60, height: 60 }} />
            <Button buttonStyle={{ borderRadius: 10, backgroundColor: COLORS.lightGreen, padding: 10,}} textStyle={{color: COLORS.darkBlue, fontWeight: 'bold',  fontSize: 20}} title={'Log Out'} handler={logOut}/>
        </View>
    )
}

export default Navbar