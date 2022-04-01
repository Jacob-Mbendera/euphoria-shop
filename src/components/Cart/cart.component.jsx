import './cart.styles.scss';

import Button from '../button/button.component'; 

const Cart = () =>{ 
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
                <Button > Checkout Items</Button>
        </div>
    )
}

export default Cart;