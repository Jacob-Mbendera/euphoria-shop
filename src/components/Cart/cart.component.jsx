import './cart.styles.scss';

import Button from '../button/button.component'; 
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

const Cart = () =>{ 

    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>

            {cartItems.map( (item) =>(
                <CartItem key={item.id} cartItem= {item} />
            ))}
             <Button > Checkout Items</Button>
        </div>
    )
}

export default Cart;