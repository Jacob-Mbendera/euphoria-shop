import React from "react";
import './button.styles.scss';
import { ButtonSpinner } from "./button.styles";

/* 


        1. default button 
        2. inverted buton 
        3. google sign in button


*/

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    payment:'payment',
}

const Button = ({ children, buttonType, isLoading, ...otherProps}) =>{
    return (
        <button disabled={isLoading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>

            { isLoading ? <ButtonSpinner /> :  children}
        </button>
    )
}

export default Button;