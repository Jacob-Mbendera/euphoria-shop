// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopop = () => signInWithPopup(auth, provider);



const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>{

    const userDocRef = doc(db, 'users', userAuth.uid) //db, collection, unique identifier e.g NikeAirMax, doc() retrieves documents from firebase
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef); //getDoc() when you wanna access the documents
    console.log(userSnapShot.exists()); //based on data and document if any exists, relevant place

    // 1. if user doesnt exist
    if(!userSnapShot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date(); //wanna know when user is created

      try{
        await setDoc(userDocRef, {
          displayName, 
          email,
          createdAt
        })

      }
      catch(error){
        console.log("Error occurred while creating user", error.message);
      }
    }

    //2. if user exists
    return userDocRef;

}