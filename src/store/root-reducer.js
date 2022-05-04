import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
//root-reducer - contains all the reducers

export const rootReducer = combineReducers({
    user: userReducer

})