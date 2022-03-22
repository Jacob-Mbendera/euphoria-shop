import React from "react";
import './sign-in-sign-up.scss';
import { signInWithGooglePopop , createUserDocumentFromAuth} from "../../utilities/firebase/firebase.utilities";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";



const SignInAndSignUpPage = () => {

    const logGoogleUser = async () =>{

        //const response  =  await signInWithGooglePopop();
        //console.log(response);

        const {user}  = await signInWithGooglePopop();

        const userDocRef = createUserDocumentFromAuth(user); 
    } 

    return(
    <div className="sign-in-and-sign-up">
       {/* <SignIn/> */}

        <h3>Sign IN</h3>
       <button onClick={logGoogleUser}> Sign In Google Popup </button>

       <SignUpForm/>
    </div>
    )
}



export default SignInAndSignUpPage;