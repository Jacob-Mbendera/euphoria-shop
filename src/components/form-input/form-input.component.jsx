import React from "react";
import './form-input.styles.scss';

const FormInput = ({ label, ...otherInputProps }) =>{

    return (
        <div className="group">

        <input className="form-input" {...otherInputProps}/>

            { 
            //if label exists then render label 
            label &&(
            //* If the length of the input > 0(zero is false), give it  class of shrink else an empty string, at the end give it form-input-abel class  
            <label className={`${otherInputProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}

            
        </div>
    )
} 

export default FormInput;