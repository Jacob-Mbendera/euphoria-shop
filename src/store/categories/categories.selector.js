import {createSelector} from "reselect";

const selectCategoriesReducer = (state) => { 
    //console.log('selector 1 fired');
    return state.categories
};

//RESELECT
//MEMOISATION: returning data from pure functions when the state does  not change
export const selectCategories = createSelector([selectCategoriesReducer],(categoriesSlice ) => {
    //console.log('selector 2 fired');
    return categoriesSlice.categories;
}
);



export const  selectCategoriesMap =  createSelector([selectCategories], (categories) => {
    //console.log('selector 3 fired');
    //console.log('categoriesMap selector triggered');
    return categories.reduce( (accumulator, category ) =>{ //1st  categories=rootReducer, 2nd categories= payload
        
        const {title, items } = category;
        accumulator[title.toLowerCase()] = items; 

        return accumulator;
        
    } ,{});
}
);