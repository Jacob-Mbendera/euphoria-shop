import { createAction } from "../../utilities/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.actiontypes";

//cretaAction takes 1.action type 2. payload
export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);