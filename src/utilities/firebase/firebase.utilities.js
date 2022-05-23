// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getAuth, 
  signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    FacebookAuthProvider,
     signOut,
     onAuthStateChanged
    } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection,writeBatch, query, getDocs} from 'firebase/firestore';
                                                            




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

export const signOutUser = async () => await signOut(auth); 

//This is an open listener , FOR AY CHANGE
export const onAuthStateChangedLister = (callback) => 
  onAuthStateChanged(auth, callback);

  //adding shop documents/data to firebase

  export const addCollectionDocuments = async (collectionKey, objectToAdd) =>{
      const collectionRef = collection(db, collectionKey);
      const batch = writeBatch(db);
      
      //creating a batch

      objectToAdd.forEach( (object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
      
        //creating a new document Ref for each object e.g hats and its object etc
        batch.set(docRef,object);
      })

      await batch.commit();
      console.log('Done!');
  }

  //Getting Data from Firestore.
  export  const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    
    //This give me some object that I can get a snapshot from
    const q = query(collectionRef);

    //getDocs() fetches document snapshots we want
    const querySnapshot = await getDocs(q);

    /*//gives us an array of all  the individual documents inside, snapshots == data itself
    const categoryMap = querySnapshot.docs.reduce( (accumulator, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      accumulator[title.toLowerCase()] = items;
      return accumulator
    }, {} )

    return categoryMap;
    */

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
  }

//.reduce() will  give us the structure of our data the way we want it i.e. 
    /* hats:
        {
          title: 'Hats',
          items: [
            {
              id: 1,
              name: 'Brown Brim',
              imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
              price: 25,
            },
        sneakers:
        {
          title: 'Hats',
          items: [
            {
              id: 1,
              name: 'Brown Brim',
              imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
              price: 25,
            },
        */
