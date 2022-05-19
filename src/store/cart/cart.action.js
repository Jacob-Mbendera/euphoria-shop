import { createAction } from "../../utilities/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.actionTypes";



export const setCartItems = (cartItems) =>  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

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

export const clearCartItems = (cartItems, cartItemToClear) => {
    return cartItems.filter( (cartItem) => cartItem.id != cartItemToClear.id);
    
}




export const addItemToCart = (cartItems, productToAdd) =>{
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromcart = (cartItems, cartItemToRemove) =>{
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemsFromcart = (cartItems, cartItemToClear) =>{
    const newCartItems = clearCartItems(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
