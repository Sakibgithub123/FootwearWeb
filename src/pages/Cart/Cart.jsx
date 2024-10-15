import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <SectionTitle heading={'Your Cart(4 items)'}></SectionTitle>
            <div className='flex flex-row justify-center space-x-72 border-b-2 border-gray-400 pb-3'>
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>

            <div className='flex flex-row-reverse space-x-36 space-x-reverse mr-5'>
                <p>$4556</p>
                <p>Total</p>
            </div>
            <Link to={'/checkout'}><button className='btn btn-success'>Checkout</button></Link>
        </div>
    );
};

export default Cart;