import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedLister , createUserDocumentFromAuth } from "../utilities/firebase/firebase.utilities";


//view this as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null

    
});

export const UserProvider = ({ children }) => {
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