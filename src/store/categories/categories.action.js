import { createAction } from "../../utilities/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.actiontypes";

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);