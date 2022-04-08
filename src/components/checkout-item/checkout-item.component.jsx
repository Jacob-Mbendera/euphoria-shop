import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CheckoutItem = ( {cartItem} ) => {
    const {name,price, imageUrl, quantity} = cartItem;

    const { cartItems,clearItemsFromcart, addItemToCart, removeItemFromcart } = useContext(CartContext);

    const clearItemsFromcartHandler = () => clearItemsFromcart(cartItem);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromcart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
                </div>

                <span className='name'>{name}</span>
                <span className='quantity'>
                    <div className='arrow' onClick={removeItemHandler}>&#10094; </div>
                        <span className='value'>{quantity}</span>
                    <div className='arrow' onClick={addItemHandler}>&#10095;</div>
                </span>
                <span className='price'>{price}</span>
                
                <div className='remove-button' onClick={clearItemsFromcartHandler}> 
                    &#10005;
                </div>
            
        </div>
    );
}

export default CheckoutItem;