import React from "react";
import './header.styles.scss';

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
                <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="options" to="/shop">Shop</Link>
            <Link className="options" to="/contact">Contact</Link>

        </div>

    </div>
)

export default Header ;