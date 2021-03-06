import React from "react";
import './navigation.styles.scss';
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/Euphoria5.svg';
import { Fragment, useContext} from "react";
import { UserContext } from "../../contexts/user.context";
import ShoppingCartIcon from "../../components/cart-icon/cart-icon.component";

import { signOutUser } from "../../utilities/firebase/firebase.utilities";
import Cart from "../../components/Cart/cart.component";
import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

  
const Navigation = () => {
    //instantiatig currentUser, setCurrentUser
    //const {currentUser} = useContext(UserContext);
    // console.log(currentUser);

    const currentUser = useSelector(selectCurrentUser);
    //console.log(currentUser);

    //const{isCartOpen} = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <div className="navigation">
                
                <Link to="/" className="logo-container">
                        {/* <Logo className="logo" /> */}
                        <p className="brand">
                            {/* <span className="b"> B</span>randed  */}
                            <span className="b">E</span>uphoria 
                        </p>
                </Link>
            
                <div className="nav-links-container">

                    <Link className="nav-link" to="/shop">Shop</Link>


                    {
                        //if currentUser Sign out else display sign in nav link, it means user in not logged in 
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                        ) : (
                            <Link className="nav-link" to="/auth">Sign In</Link>
                        )
                    }
                        <ShoppingCartIcon/>
                    
                </div>
               { isCartOpen && <Cart/> }
            </div>

            <Outlet /> 
        </Fragment>
    )
}

export default Navigation ;