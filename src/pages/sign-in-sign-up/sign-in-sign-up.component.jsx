import React from "react";
import './sign-in-sign-up.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import { signInWithGooglePopop , createUserDocumentFromAuth} from "../../utilities/firebase/firebase.utilities";



const SignInAndSignUpPage = () => {

    const logGoogleUser = async () =>{

        //const response  =  await signInWithGooglePopop();
        //console.log(response);

        const {user}  = await signInWithGooglePopop();

        const userDocRef = createUserDocumentFromAuth(user); 
    } 

    return(<div className="sign-in-and-sign-up">
       {/* <SignIn/> */}

       <button onClick={logGoogleUser}> Sign In Google Popup </button>
    </div>
    )
}



export default SignInAndSignUpPage;