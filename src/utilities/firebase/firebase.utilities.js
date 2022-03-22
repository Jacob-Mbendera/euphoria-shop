// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
                                                            




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGmixt0Jirh3PrKIszcJoozW9R0Wn2DXA",
  authDomain: "euphoria-db.firebaseapp.com",
  projectId: "euphoria-db",
  storageBucket: "euphoria-db.appspot.com",
  messagingSenderId: "8988943457",
  appId: "1:8988943457:web:59136a8541748d269d3620",
  measurementId: "G-57VNSBSM1W"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopop = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,  googleProvider);



const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) =>{


  if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid) //db, collection, unique identifier e.g NikeAirMax, doc() retrieves documents from firebase
    //console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef); //getDoc() when you wanna access the documents
    //console.log(userSnapShot.exists()); 
    //console.log(userSnapShot.exists()); //based on data and document if any exists, relevant place

    // 1. if user doesnt exist
    if(!userSnapShot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date(); //wanna know when user is created

      try{
        await setDoc(userDocRef, {
          displayName, 
          email,
          createdAt,
          ...additionalInformation
        })

      }
      catch(error){
        console.log("Error occurred while creating user", error.message);
      }
    }

    //2. if user exists
    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) =>{

  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email, password)
  
}

export const signInUserWithEmailAndPassword = async (email, password) =>{

  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email, password)
  
}