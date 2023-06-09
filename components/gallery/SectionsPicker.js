import SelectDropdown from 'react-native-select-dropdown'
import { View } from 'react-native'
import { cameraStore } from './../camera/CameraStore'
import { COLORS } from '../../COLORS'
import ButtonSectionMaker from './ButtonSectionMaker'
import SectionMaker from './SectionMaker'

const SectionsPicker = ({styles}) => {
    const { gallerySections, gallerySection, setGallerySection } = cameraStore(state => state)
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: COLORS.darkBlue, width: '100%', ...styles}}>

            <SelectDropdown
                data={gallerySections}
                defaultValue={gallerySections[gallerySection]}
                defaultButtonText={gallerySections.length == 0 ? 'Click the right button to add a section' : "Select an album"}
                style={{ flex: 1 }}
                buttonStyle={{ backgroundColor: COLORS.red }}
                buttonTextStyle={{ color: COLORS.white }}
                renderDropdownIcon={() => { return }}
                disabled={gallerySections.length == 0 ? true : false}
                onSelect={(selectedItem, index) => {
                    setGallerySection(index)
                }}

            />
            <ButtonSectionMaker />
            <SectionMaker />
        </View>
    )
}

export default SectionsPicker