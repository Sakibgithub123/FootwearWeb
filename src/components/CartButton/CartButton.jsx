import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';

const CartButton = ({id}) => {
    const {user}=useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [cart,setCart]=useState('');
    useEffect(()=>{
        fetch(`http://localhost:5000/cartButton/${id}`)
        .then(res=>res.json())
        .then(data=>setCart(data))

    },[])
    // console.log(cart);
    // console.log(id);
    // console.log(user.email);
    const handleAddToCart = (e) => {
        e.preventDefault()
        let form=e.target;
        const name=form.name.value;
        const price=form.price.value;
        const customer_email=form.customer_email.value;
        console.log(name,price,customer_email);
        const cartInfo = { name, price, customer_email };

        fetch('http://localhost:5000/api/addtocart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartInfo),
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            alert('Item added to cart successfully!');
        })
        .catch((error) => {
            console.error('Error adding item to cart:', error);
            alert('Failed to add item to cart.');
        });
    };
    return (
        <form onSubmit={handleAddToCart}>
            <input type="text" value={cart?.name} name='name' />
            <input type="hidden" value={cart?.price} name='price'/>
            <input type="hidden" value={user?.email} name='customer_email' />
            <button type='submit' className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">Add to Cart</button>
            
        </form>
    );
};

export default CartButton;