import { createContext, useState } from "react";


//view this as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null

    
});

export const UserProvider = ({ children }) => {
    const[currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    //This provider is allowing any of its child components e.g <App /> to access the values e.g user profile(emails,names etc) inside the useState
    return <UserContext.Provider value={value} > {children} </UserContext.Provider> 
    //children in this case can be <App/> making it accessible on the top level hence the use of context.

}