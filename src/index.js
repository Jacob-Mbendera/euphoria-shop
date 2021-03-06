import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './store/store'
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from "./store/store"
import {Elements} from"@stripe/react-stripe-js";
import {stripePromise} from"./utilities/stripe/stripe";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
