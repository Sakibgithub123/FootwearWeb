import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [cart, setCartData] = useState([]); // Initialize cart as an empty array
    const [quantities, setQuantities] = useState([]); // Initialize quantities array
    const email = user?.email;
    // console.log(email);
    
    useEffect(() => {
        if (email) { // Ensure email is defined before making the fetch request
            fetch(`http://localhost:5000/api/cart/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setCartData(data); // Ensure that only an array is passed to setCartData
                        setQuantities(new Array(data.length).fill(1)); // Initialize quantities array with default value of 1 for each item
                    } else {
                        setCartData([]);
                    }
                })
                .catch(error => console.log(error));
        }
    }, [email]);

    const handleQtyChange = (e, index) => {
        const newQuantities = [...quantities]; // Copy the current quantities array
        newQuantities[index] = Number(e.target.value); // Update the quantity for the specific item
        setQuantities(newQuantities); // Update the state with new quantities
    };

    // Calculate the total price of the cart items
    const totalPrice = cart.reduce((acc, item, index) => acc + (item.price * quantities[index]), 0);
    const handleCheckout = () => {
        const checkoutData = {
          cart,
          totalPrice,
          quantities,
        };
      
        // Save data to localStorage
        localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
      };

    return (
        <div>
            <SectionTitle heading={`Your Cart (${cart.length} items)`}></SectionTitle>
            <div className='flex flex-row justify-center space-x-72 items-center border-b-2 border-gray-400 py-3'>
                <p className='w-9/12'>Item</p>
                <p className='w-1/12'>Price</p>
                <p className='w-1/12'>Quantity</p>
                <p className='w-1/12'>Total</p>
            </div>
            {
                Array.isArray(cart) && cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className='flex flex-row justify-center items-center space-x-72 border-b-2 border-gray-400 py-3'>
                            <p className='w-9/12'>{item.name}</p>
                            <p className='w-1/12 text-center'>{item.price}</p>
                            <p className='w-1/12'>
                                <input 
                                    type="number" 
                                    min={1} 
                                    value={quantities[index]} // Use the individual quantity for this item
                                    onChange={(e) => handleQtyChange(e, index)} // Update quantity for the specific item
                                    className='border py-1 px-4 my-1' 
                                    name='quantity' 
                                />
                            </p>
                            <p className='w-1/12'>{item.price * quantities[index]}</p> {/* Calculate total for each item */}
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p> // Handle case when cart is empty
                )
            }

            {/* Display total price of all items in the cart */}
            <div className='flex flex-row-reverse space-x-36 space-x-reverse mr-5'>
                <p>${totalPrice.toFixed(2)}</p> {/* Display the total price */}
                <p>Total</p>
            </div>
            <Link to='/checkout'>
    <button className='btn btn-success' onClick={handleCheckout}>Checkout</button>
  </Link>
        </div>
    );
};

export default Cart;
