import { COLORS } from '../../COLORS'
import { useState } from 'react'
import { CategoriesStore } from '../../stores/CategoriesStore'

const CategoryBtn = ({CategoryIcon, category}) => {
  const [selected, setSelected] = useState(false) 
  const {setSelectedCategories, selectedCategories} = CategoriesStore(state => state)
  return (
      <CategoryIcon.Button backgroundColor={selected ? COLORS.red : COLORS.darkBlue} onPress={() => {
        setSelected(!selected)
        if(!selected) {
          const newSelectedCategories = [...selectedCategories, category]
          
          setSelectedCategories([...selectedCategories, category])
          return
        } 

        const filterCategories = selectedCategories.filter(categorySelect => categorySelect.Title !== category.Title )
        setSelectedCategories(filterCategories)
        

      }} name={category.iconName} color={"white"} size={20}>{category.Title}</CategoryIcon.Button>
  )
}

export default CategoryBtn