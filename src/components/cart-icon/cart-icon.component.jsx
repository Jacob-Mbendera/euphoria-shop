import {ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const ShoppingCartIcon = () =>{

    const dispatch = useDispatch();

    //const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount =useSelector(selectCartCount);


    const toggleCartIcon = () => dispatch(setIsCartOpen(!isCartOpen)); //reverse whatever state isCartOpen 

    return(
        <div className='cart-icon-container'>
            <CartIcon className='shopping-icon' onClick={toggleCartIcon} />
            <span className='item-count'>{cartCount}</span>

        </div>
    )
}

export default ShoppingCartIcon;