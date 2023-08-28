import React from 'react'
import { ScrollView, Text } from 'react-native'
import { COLORS } from '../../COLORS'
import {FontAwesome, Ionicons, AntDesign, MaterialIcons} from '@expo/vector-icons'
import { CategoriesStore } from '../../stores/CategoriesStore'
import CategoryBtn from './CategoryBtn'

const IconsCategories = {
    "AntDesign" : AntDesign,
    "FontAwesome" : FontAwesome,
    "Ionicons" : Ionicons,
    "MaterialIcons" : MaterialIcons
}

const TaskCategories = () => {
    const {eventCategories} = CategoriesStore(state => state)
    return (
        <ScrollView contentContainerStyle={{gap: 10, padding: 10}} horizontal={true} style={{ gap: 10 }}>
            {eventCategories.map((category, index) => {
                const CategoryIcon = IconsCategories[category.iconBrand]                
                return <CategoryBtn key={index} CategoryIcon={CategoryIcon} category={category}/>
            })}
        </ScrollView>
    )
}

export default TaskCategories