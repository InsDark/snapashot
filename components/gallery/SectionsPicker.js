import SelectDropdown from 'react-native-select-dropdown'
import {View} from 'react-native'
import { cameraStore } from './../camera/CameraStore'
import { COLORS } from '../../COLORS'
import ButtonSectionMaker from './ButtonSectionMaker'
import SectionMaker from './SectionMaker'

const SectionsPicker = () => {
    const { gallerySections } = cameraStore(state => state)
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: 10 }}>

            <SelectDropdown
                data={gallerySections}
                defaultValueByIndex={0}
                style={{ flex: 1 }}
                defaultButtonText={gallerySections.length == 0 ? 'Click the right button to add a section': 'Select a section'}
                buttonStyle={{ backgroundColor: COLORS.darkBlue}}
                buttonTextStyle={{ color: COLORS.white }}
                renderDropdownIcon={() => { return }}
                disabled={gallerySections.length == 0 ? true: false}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
            <ButtonSectionMaker />
            <SectionMaker/>
        </View>
    )
}

export default SectionsPicker