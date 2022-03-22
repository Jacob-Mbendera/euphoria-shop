import React from "react";
import './authentication.styles.scss';
import { signInWithGooglePopop , createUserDocumentFromAuth} from "../../utilities/firebase/firebase.utilities";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../sign-in-form/sign-in-form.component";




const Authentication = () => {

    const logGoogleUser = async () =>{

        //const response  =  await signInWithGooglePopop();
        //console.log(response);

        const {user}  = await signInWithGooglePopop();

        const userDocRef = createUserDocumentFromAuth(user); 
    } 

    return(
    <div className="authentication-container">
       <SignInForm/>
       <SignUpForm/>
    </div>
    )
}



export default Authentication;