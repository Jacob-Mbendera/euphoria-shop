import { createAction } from "../../utilities/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.actiontypes";
import {  getCategoriesAndDocuments } from "../../utilities/firebase/firebase.utilities";

//cretaAction takes 1.action type 2. payload
//export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);


//redux-thunk

export const  fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
    
export const  fetchCategoriesSuccess = (categoriesArray) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const  fetchCategoriesFailed = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

    

export const fetchCategoriesAsync = () => async (dispatch) =>{
    dispatch(fetchCategoriesStart());

    try{
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));

    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}