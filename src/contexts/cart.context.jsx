import { createContext, useState, useEffect } from "react";


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

export const CartProvider = ( {children} ) => {

    
    const[isCartOpen, setIsCartOpen] = useState(false);
    const[ cartItems, setCartItems ] = useState([]);
    const [cartCount, setCartCount] = useState(0); 
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromcart = (cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemsFromcart = (cartItemToClear) =>{
        setCartItems(clearCartItems(cartItems, cartItemToClear));
    }

    useEffect( () => {
        const newcartCount = cartItems.reduce((total, cartItem ) => total + cartItem.quantity, 0)
        setCartCount(newcartCount);

    },[cartItems] )


    useEffect( () =>{
        const newCartTotal = cartItems.reduce( (cartTotal, cartItem) => cartTotal + cartItem.price * cartItem.quantity, 0);
        setCartTotal(newCartTotal);
    },[cartItems]);

    const value = {isCartOpen, setIsCartOpen, addItemToCart ,cartItems, cartCount, removeItemFromcart, clearItemsFromcart,cartTotal};

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}