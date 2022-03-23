import React from "react";
import './navigation.styles.scss';
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/Euphoria5.svg';
import { Fragment } from "react";


const Navigation = () => {

    return (
        <Fragment>
            <div className="navigation">
                
                <Link to="/" className="logo-container">
                        <Logo className="logo" />
                </Link>
            
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
                    <Link className="nav-link" to="/auth">Sign In</Link>
                </div>
            </div>

            <Outlet />
        </Fragment>
    )
}

export default Navigation ;