import {create} from 'zustand'
export const CategoriesStore = create(set => ({
    eventCategories: [
         {Title: "Sports", iconName: "sports", iconBrand: 'MaterialIcons'},
         {Title: "School", iconName: "school", iconBrand: 'Ionicons'},
         {Title: "Health", iconName: "healing", iconBrand: 'MaterialIcons'},
         {Title: "Home", iconName: 'home', iconBrand: "AntDesign"}
    ],
    selectedCategories: [],
    setSelectedCategories: (categories) => set({selectedCategories: categories})
}))