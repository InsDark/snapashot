import SelectDropdown from 'react-native-select-dropdown'
import { View } from 'react-native'
import { cameraStore } from './../camera/CameraStore'
import { COLORS } from '../../COLORS'
import ButtonSectionMaker from './ButtonSectionMaker'
import SectionMaker from './SectionMaker'
import useGallerySections from '../../hooks/useGallerySections'

const SectionsPicker = ({styles}) => {
    const { gallerySections, gallerySection, setGallerySection } = cameraStore(state => state)

    const {gallerySectionData} = useGallerySections()

    return (
        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: COLORS.darkBlue, width: '100%', ...styles}}>

            <SelectDropdown
                data={gallerySections}
                rowStyle={{backgroundColor:COLORS.darkBlue,borderBottomWidth: 0}}
                rowTextStyle={{color: COLORS.white}}
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