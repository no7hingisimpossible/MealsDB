import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props; 
    return (
        <div className='cart'>
            <p>Order Summary</p>
            <p>Items Selected: {cart.length}</p>
            <p>Foods: {cart}</p>
        </div>
    );
};

export default Cart;