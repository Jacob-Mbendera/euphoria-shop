import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Navigation from './pages/navigation/navigation.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
       <Routes>

         <Route path='/' element={<Navigation/>}>

            <Route index element={<HomePage/>}/>
            <Route path='shop' element={<ShopPage/>}/>
            <Route path='sign-in' element={<SignInAndSignUpPage/>}/>
            
         </Route>
         
      </Routes>
      
    </div>
  );
}

export default App;
