import React from "react";
import './navigation.styles.scss';
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/Euphoria5.svg';
import { Fragment, useContext} from "react";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utilities/firebase/firebase.utilities";


const Navigation = () => {
    //instantiatig currentUser, setCurrentUser
    const {currentUser, setCurrentUser} = useContext(UserContext);
    // console.log(currentUser);

    const signOutHandler = async () =>{
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                
                <Link to="/" className="logo-container">
                        <Logo className="logo" />
                </Link>
            
                <div className="nav-links-container">

                    <Link className="nav-link" to="/shop">Shop</Link>


                    {
                        //if currentUser Sign out else display sign in nav link, it means user in not logged in 
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
                        ) : (
                            <Link className="nav-link" to="/auth">Sign In</Link>
                        )
                    }

                    
                    
                </div>
            </div>

            <Outlet />
        </Fragment>
    )
}

export default Navigation ;