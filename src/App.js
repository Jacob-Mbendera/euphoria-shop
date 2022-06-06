import {React, lazy, Suspense, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import { onAuthStateChangedLister, createUserDocumentFromAuth } from './utilities/firebase/firebase.utilities';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from './global.styles.js';
import Spinner from './components/spinner/spinner.component';

const Navigation = lazy(() =>import('./pages/navigation/navigation.component'));
const HomePage = lazy( () => import('./pages/homepage/homepage.component.jsx'));
const ShopPage = lazy( ()=> import('./pages/shop/shop.component'));
const Shop = lazy(() => import('./components/shop/shop.component'));
const Checkout = lazy( () => import('./pages/checkout/checkout.component'));
const Authentication =lazy(() => import('./pages/authentication/authentication.component'));

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
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Navigation/>}>

              <Route index element={<HomePage/>}/>
              <Route path='shop/*' element={<Shop/>}/>
              <Route path='auth' element={<Authentication/>}/>
              <Route path='checkout' element={<Checkout/>}/>
              
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
