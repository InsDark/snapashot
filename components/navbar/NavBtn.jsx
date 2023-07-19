import React from 'react'
import { COLORS } from '../../COLORS'
import { navStore } from '../../stores/NavStore'
import { useRouter } from 'expo-router'

const NavBtn = ({ iconName, targetRoute, vectorIconType }) => {
    const { currentRoute, setCurrentRoute, visible, setVisible } = navStore(state => state)
    const router = useRouter()
    return (
        <vectorIconType.Button onPress={() => {
            setVisible(!visible)
            setCurrentRoute(targetRoute)
            router.push(`/routes/${targetRoute.toLowerCase()}`)
        }} size={25} color={currentRoute == targetRoute ? COLORS.red : COLORS.gray} backgroundColor={COLORS.darkBlue} name={iconName}>
            {targetRoute}
        </vectorIconType.Button>
    )
}

export default NavBtn