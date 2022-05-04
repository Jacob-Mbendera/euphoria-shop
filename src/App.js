import {React, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Navigation from './pages/navigation/navigation.component';
import Authentication from './pages/authentication/authentication.component';
import Shop from './components/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';

import { onAuthStateChangedLister, createUserDocumentFromAuth } from './utilities/firebase/firebase.utilities';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

import { GlobalStyle } from './global.styles.js';

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
    
    const unsubsccribe = onAuthStateChangedLister((user) =>{
  
         //console.log(user);
        if(user){
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
    return unsubsccribe;
  
  }, []); //empty dependecy array

  
  return (
    <div>
       <Routes>

         <Route path='/' element={<Navigation/>}>

            <Route index element={<HomePage/>}/>
            <Route path='shop/*' element={<Shop/>}/>
            <Route path='auth' element={<Authentication/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            
         </Route>
         
      </Routes>
      
    </div>
  );
}

export default App;
