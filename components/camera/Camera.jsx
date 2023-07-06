import { StyleSheet, View, Dimensions } from 'react-native';
import { requestPermissionsAsync } from 'expo-media-library'
import { PinchGestureHandler } from 'react-native-gesture-handler'
import { Camera } from 'expo-camera'
import { cameraStore } from './CameraStore'
import CameraActions from './CameraActions';
import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../../COLORS';
import SectionsPicker from '../gallery/SectionsPicker';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function App() {
    const { type, setCameraRef } = cameraStore(state => state)
    const phoneDimentions = Dimensions.get('window')
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = useRef();
    const [zoom, setZoom] = useState(0)
    useEffect(() => {
        requestPermission()
        requestPermissionsAsync()
        setCameraRef(cameraRef)
    }, [])

    const changeZoom = (e) => {
        const scale = e.nativeEvent.scale
        if (scale > 1 && zoom < 1) {
            setZoom(zoom + 0.02);
        }
        if (scale < 1 && zoom > 0) {
            setZoom(zoom - 0.02);
        }
    }
    const styles = StyleSheet.create({
        camera: {
            flex: 6,
            width: phoneDimentions.width,
            justifyContent: 'center',
            alignItems: 'center'
        },
        container: {
            flex: 1,
            width: phoneDimentions.width,
            backgroundColor: COLORS.darkBlue,
            alignItems: 'center',
            marginEnd: 0,
            justifyContent: 'center',
            width: '100%'
        },
    });
    return (
        <View style={styles.container}>
            <SectionsPicker styles={{ padding: 10 }} />
            <PinchGestureHandler onGestureEvent={(e) => changeZoom(e)}>
                <Camera zoom={zoom} autoFocus={true} ref={cameraRef} ratio='4:3' style={styles.camera} type={type}>
                    <View style={styles.buttonContainer}>
                    </View>
                </Camera>
            </PinchGestureHandler>
            <CameraActions Toast={Toast} />
            <Toast />
            <StatusBar style='light' />
        </View>
    );

}