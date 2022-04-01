import {ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss'


const ShoppingCartIcon = () =>{

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const toggleCartIcon = () => setIsCartOpen(!isCartOpen); //reverse whatever state isCartOpen 

    return(
        <div className='cart-icon-container'>
            <CartIcon className='shopping-icon' onClick={toggleCartIcon} />
            <span className='item-count'>0</span>

        </div>
    )
}

export default ShoppingCartIcon;