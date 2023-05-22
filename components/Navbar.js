import React from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from './Logo'
import {FontAwesome} from '@expo/vector-icons'
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
            <FontAwesome.Button  onPress={() => {router.push('/')}} size={30} backgroundColor={COLORS.darkBlue} iconStyle={{marginRight: 0}}  color={COLORS.white} name='user-o'></FontAwesome.Button>
        </View>
    )
}

export default Navbar