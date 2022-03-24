import { async } from "@firebase/util";
import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signOutUser } from "../../utilities/firebase/firebase.utilities";
import FormInput from "../../components/form-input/form-input.component";
import './sign-up-form.scss';
import Button from "../../components/button/button.component";

import { UserContext } from "../../contexts/user.context";


const defaultFormFields = {
    displayName : '',
    email:'',
    password:'',
    confirmPassword: ''
}



const SignUpForm = () =>{

    const[formFields, setFormFields] = useState(defaultFormFields);
    const{ displayName, email,password, confirmPassword } = formFields;

    //console.log(formFields);

    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);

    }


    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(password != confirmPassword){
            alert("passwords do not match");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            //console.log(user);

            setCurrentUser(user);

            await createUserDocumentFromAuth(user, {displayName});

            console.log(user);

            resetFormFields();
        } catch(error){

            if(error.code == 'auth/email-already-in-use' || error.code == 400){
                alert('Cannot create user, email already in use')
            }else{
                console.log("There was an error creating user", error);
            }
            
        }


    }

    const handleChange =  (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})

    }
    
    return (
        <div className="sign-up-container">

            <h2> Don't have an account? </h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}  >

                    <FormInput label="Full Name" type="text" name="displayName" value={displayName} onChange={handleChange}  required/>

                    <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange} required/>

                    <FormInput label="Password"  type="password" name="password" value={password} onChange={handleChange} required/>
                    
                    <FormInput label="Confirm Password"  type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange}  required/>

                    <Button type="submit"> Sign Up</Button>
                </form>
        </div>
    )
}

export default SignUpForm;