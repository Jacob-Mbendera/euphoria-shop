import './cart.styles.scss';

import Button from '../button/button.component'; 
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';


const Cart = () =>{ 

    const navigate = useNavigate();

const goToCheckoutPage = () => {
    navigate('/checkout');
}

    const { cartItems } = useContext(CartContext);

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