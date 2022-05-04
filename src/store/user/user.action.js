import { createAction } from "../../utilities/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.actiontypes";

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER,  user);