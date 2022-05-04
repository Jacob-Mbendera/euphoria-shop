//WHEN WE WANT TO USE useReducer as StateManagement instead of useState 
import { USER_ACTION_TYPES } from "./user.actiontypes";

const INITIAL_STATE  =  {
    currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action) =>{
    //console.log(action);
    //console.log('Dispatched');
    const {type, payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                //ALWAYS return the previous state and
                ...state, 
                //..update the relevant value
                currentUser: payload
            }

        default:
            //If none ofthe cases match to the type, return to prev state
            return state;
    }

}
