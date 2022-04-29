import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedLister , createUserDocumentFromAuth } from "../utilities/firebase/firebase.utilities";


//view this as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null

    
});

/*

//WHEN WE WANT TO USE useReducer as StateManagement instead of useState 
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}


const INITIAL_STATE  =  {
    currentUser: null,
}

const userReducer = (state, action) =>{
    console.log(action);
    console.log('Dispatched');
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
            throw new Error(`unhandled type${type} in the userReducer`);
    }

}

*/

export const UserProvider = ({ children }) => {
    /*
    //Implementing useRedducer state management
    //currentUser is already included in the INITIAL_STATE,  we just need to setCurrentUser
    const [{currentUser} , dispatch ] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser);
    //const {currentUser} = state;

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }
    */
   
    //Implementing useRedducer state management
    const[currentUser, setCurrentUser] = useState(null);

    const value = {currentUser, setCurrentUser};

    useEffect( () => {

        const unsubsccribe = onAuthStateChangedLister((user) =>{

             console.log(user);
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubsccribe;

    }, [] ); //empty dependecy array

    //This provider is allowing any of its child components e.g <App /> to access the values e.g user profile(emails,names etc) inside the useState
    return <UserContext.Provider value={value} > {children} </UserContext.Provider> 
    //children in this case can be <App/> making it accessible on the top level hence the use of context.

}