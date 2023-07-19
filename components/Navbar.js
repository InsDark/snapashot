import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import { COLORS } from '../COLORS'
import { Modal } from 'react-native'
import BottomNav from './BottomNav'
import { navStore } from '../stores/NavStore'
const styles = StyleSheet.create({
    navbar: {
        backgroundColor: COLORS.darkBlue,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        paddingRight: 20,
        paddingLeft: 20
    },
    title: {
        color: COLORS.white,
        fontSize: 20,
    }
})
const Navbar = () => {
    const {setVisible, visible} = navStore(state => state)
    return (
        <View style={styles.navbar}>
            <Octicons name='three-bars' color={COLORS.white} size={20} onPress={() => { setVisible(true) }} />
            <Text style={styles.title}>SNAPASHOT</Text>
            <Modal
                visible={visible}
                onRequestClose={() =>{ 
                    setVisible(false)
                }}
                animationType='fade'
                transparent={true}
            >
                <View style={{ backgroundColor: COLORS.modalBg, flex: 1 }}>
                    <View style={{ backgroundColor: COLORS.darkBlue, width: '50%', height: '100%', padding: 10 , alignItems: 'center', gap: 10}}  >
                        <Text style={{ color: 'white', fontSize: 20 , fontWeight: 'bold'}} >SNAPASHOT</Text>
                        <BottomNav/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Navbar