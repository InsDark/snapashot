import SelectDropdown from 'react-native-select-dropdown'
import {View} from 'react-native'
import { cameraStore } from './../camera/CameraStore'
import { COLORS } from '../../COLORS'
import ButtonSectionMaker from './ButtonSectionMaker'
import SectionMaker from './SectionMaker'

const SectionsPicker = () => {
    const { gallerySections, gallerySection, setGallerySection } = cameraStore(state => state)
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: 10 }}>

            <SelectDropdown
                data={gallerySections}
                defaultValueByIndex={gallerySection || 0}
                style={{ flex: 1 }}
                defaultButtonText={gallerySections.length == 0 ? 'Click the right button to add a section': 'Select a section'}
                buttonStyle={{ backgroundColor: COLORS.darkBlue}}
                buttonTextStyle={{ color: COLORS.white }}
                renderDropdownIcon={() => { return }}
                disabled={gallerySections.length == 0 ? true: false}
                onSelect={(selectedItem, index) => {
                    setGallerySection(index)
                }}
                
            />
            <ButtonSectionMaker />
            <SectionMaker/>
        </View>
    )
}

export default SectionsPicker