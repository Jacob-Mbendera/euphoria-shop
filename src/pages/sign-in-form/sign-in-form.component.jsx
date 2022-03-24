import React from "react";
import './sign-in-form.styles.scss';
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { useState, useContext } from "react";
import { signInWithGooglePopop, createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utilities";

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    //console.log(formFields);
    
    //1. setting currentUser in the context, i.e instantiating the setCurrentUser() method
    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    
    const logInGoogleUser = async () =>{

        const {user}  = await signInWithGooglePopop();
        setCurrentUser(user);
        
        await createUserDocumentFromAuth(user);
        
    }



    const handleSubmit = async (event) => {

        event.preventDefault();

        try{
            const {user} = await signInUserWithEmailAndPassword(email, password);
            //console.log(user);

            //2. setting the user after signing in.
            setCurrentUser(user);

            resetFormFields();

        }catch(error){

            switch(error.code){
                case 'auth/wrong-password':
                    alert("Email and password do not match!");
                    break;
                
                case 'auth/user-not-found':
                    alert("User with that email not found");
                    break;

                default:
                    console.log('An error occurred', error);
            }
        }

    }



    const handleChange = (event) =>{
        const { name, value} = event.target;

        setFormFields({...formFields, [name] : value});
    }



    return (
        <div className="sign-in-container">
            <h1> Already have an account</h1>
            <span>Sign in with Email and Password</span>

            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange} required/>

                <FormInput label="Password"  type="password" name="password" value={password} onChange={handleChange} required/>                
                        
                <div className="buttons-container">
                    <Button  type="submit"> Sign In</Button>
                    <Button type='button' buttonType="google" onClick={logInGoogleUser} >Google Sign In </Button>
                </div>
            </form>

        </div>
    )
}
export default SignInForm;