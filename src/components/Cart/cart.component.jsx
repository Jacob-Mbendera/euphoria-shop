import './cart.styles.scss';

import Button from '../button/button.component'; 
import { useCallback, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';


const Cart = () =>{ 

     //const { cartItems } = useContext(CartContext);
     const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    //useCallback(), make the function inside memoised,
    const goToCheckoutPage = useCallback( () => {
        navigate('/checkout');
    }, [navigate]);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.length ? (
                        cartItems.map( (item) =>(
                            <CartItem key={item.id} cartItem= {item} />
                        ))
                    ) :(
                        <span className='empty-message'>Your cart is empty</span>
                    )
                }

            
             
             </div>
             <Button onClick={goToCheckoutPage}>Checkout</Button>
        </div>
    )
}

export default Cart;