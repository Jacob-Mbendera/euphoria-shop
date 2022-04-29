import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState, useEffect, useReducer } from "react";


const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find( (cartItem) => cartItem.id == productToAdd.id);

    // iif found increase quantity
    if(existingCartItem){
        return cartItems.map(  (cartItem) => 
        cartItem.id == productToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
        );
    }

    //return new arrray with modified cartItems/ new cart item
    return [ ...cartItems, {...productToAdd, quantity: 1} ]; //existing cart items, new prooduct to add and increase it  by 1

}



const removeCartItem = (cartItems, cartItemToRemove) =>{
      // find cart item to remove
      const existingCartItem = cartItems.find( (cartItem) => cartItem.id == cartItemToRemove.id);

      //check if quantity is equal to 1, if it is remove from cart
        if(existingCartItem.quantity == 1){
            //works in reverse, keep(return) everything thats not equal to "cartItemToRemove" hence remove those that are equal this id
            return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id); 
        }

      //return back cart items with matchig cart item with reduced quantity
      return cartItems.map(  (cartItem) => 
        cartItem.id == cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
        );

}

const clearCartItems = (cartItems, cartItemToClear) => {
    return cartItems.filter( (cartItem) => cartItem.id != cartItemToClear.id);
    
}





export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems : [],
    addItemToCart: () => {},
    cartCount : 0,
    cartTotal: 0,
    removeItemFromcart: () => {},
    clearItemsFromcart: () =>{},

});




export const INITIAL_STATE = {
    isCartOpen: false,
    cartItems : [],
    cartCount : 0,
    cartTotal: 0,
}
const CART_ACTION_TYPES ={
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN:'SET_IS_CART_OPEN',
}
const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case  CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen: payload,

            }
        default:
            throw new Error(`unhandledtype pf ${type} in cartReducer` );
    }
}

export const CartProvider = ( {children} ) => {

    const[ {cartItems, cartCount, cartTotal, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems)=>{

        const newcartCount = cartItems.reduce((total, cartItem ) => total + cartItem.quantity, 0);

        const newCartTotal = cartItems.reduce( (cartTotal, cartItem) => cartTotal + cartItem.price * cartItem.quantity, 0);

        dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {cartItems: newCartItems, cartCount: newcartCount, cartTotal: newCartTotal}});

    }


    const addItemToCart = (productToAdd) =>{
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromcart = (cartItemToRemove) =>{
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemsFromcart = (cartItemToClear) =>{
        const newCartItems = clearCartItems(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    }


    const setIsCartOpen = (bool) =>{
        dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool});
    }


    const value = {isCartOpen, setIsCartOpen, addItemToCart ,cartItems, cartCount, removeItemFromcart, clearItemsFromcart,cartTotal};

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}