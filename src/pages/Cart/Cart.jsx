import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiousSecure from '../../hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import useCart from '../../hooks/useCart';

const Cart = () => {
    const axiousSecure = useAxiousSecure()
    const { user } = useContext(AuthContext);
    const [cart, setCartData] = useState([]); // Initialize cart as an empty array
    const [quantities, setQuantities] = useState([]); // Initialize quantities array
    const email = user?.email;



    useEffect(() => {
        if (email) { // Ensure email is defined before making the fetch request
            // fetch(`http://localhost:5000/api/cart/${email}`)
            axiousSecure.get(`/api/cart/${email}`)
                // .then(res => res.json())
                // .then(data => setCartData(data))
                .then(res => {
                    if (Array.isArray(res.data)) {
                        setCartData(res.data); // Ensure that only an array is passed to setCartData
                        setQuantities(new Array(res.data.length).fill(1)); // Initialize quantities array with default value of 1 for each item
                    } else {
                        setCartData([]);
                    }
                })
                .catch(error => console.log(error));
        }
    }, [axiousSecure, email]);




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

    //handle delete
    const handleDeleteCartItem = (id) => {
        axiousSecure.delete(`/api/deleteCartItem/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    // refetch()
                    axiousSecure.get(`/api/cart/${email}`)
                        .then(res => {
                            setCartData(res.data)
                        })

                    alert('delete success')
                }
            })
    }

    return (
        <div>
            <SectionTitle heading={`Your Cart (${cart.length} items)`}></SectionTitle>
            <div className='flex flex-row justify-between  items-center border-b-2 border-gray-400 py-3'>
                <p className='w-5/12 text-left pl-32 text-base'>Item</p>
                <p className='w-1/12 text-base'>Price</p>
                <p className='w-3/12 text-base'>Quantity</p>
                <p className='w-3/12 text-base'>Total</p>
                {/* <p className='w-1/12'></p> */}
            </div>
            {
                Array.isArray(cart) && cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className='flex flex-row justify-between items-center  border-b-2 border-gray-400 py-3'>
                            <div className='w-5/12 pl-10 flex flex-row space-x-8 items-center text-justify gap-4 '>
                                <p className='text-justify text-xs '><img src={item.image} alt="image" className="h-12 w-12 object-cover bg-gray-300 rounded" /></p>
                                <p className='text-justify v'>{item.name}</p>
                            </div>
                            <p className='w-1/12 text-xs '>${item.price}</p>
                            <p className='w-3/12 text-xs '>
                                <input
                                    type="number"
                                    min={1}
                                    value={quantities[index]} // Use the individual quantity for this item
                                    onChange={(e) => handleQtyChange(e, index)} // Update quantity for the specific item
                                    className='border py-1 px-4 my-1'
                                    name='quantity'
                                />
                            </p>
                            <div className='w-3/12 text-xs pl-4 '>
                                <p className=''>${item.price * quantities[index]}</p>
                            </div> {/* Calculate total for each item */}
                            <button className='text-rose-400' title='Delete' onClick={() => handleDeleteCartItem(item._id)}>x</button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p> // Handle case when cart is empty
                )
            }

            {/* Display total price of all items in the cart */}
            {/* <div className='flex flex-row-reverse space-x-20 space-x-reverse mr-26'> */}
            <div className='flex justify-end items-center gap-10 text-sm font-semibold mr-28 mt-3'>
                <div className='text-end '>
                    <Link to='/checkout'>
                        <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600" onClick={handleCheckout}>Checkout</button>
                    </Link>
                </div>
                <p>Total:</p>
                <p>${totalPrice.toFixed(2)}</p> {/* Display the total price */}
            </div>

        </div>
    );
};

export default Cart;
