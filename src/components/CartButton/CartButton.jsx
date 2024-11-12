import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiousSecure from '../../hooks/useAxiousSecure';
import { replace, useLocation, useNavigate } from 'react-router-dom';

const CartButton = ({ id, item }) => {
    const { name, price, description } = item
    const { user } = useContext(AuthContext)
    const email = user?.email;
    // const [cart, setCart] = useState('');
    const axiousSecure = useAxiousSecure()
    const location=useLocation()
    const navigate=useNavigate()
    const handleAddToCart=(food)=>{
        // e.preventDefault()
        // console.log(item);
        console.log(food);
        if (user && user.email) {
            const cartInfo = {
                // image: image,,
                name:name,
                price:price,
                description:description,
                customer_email: email

            }
            // console.log(name, price, description);
            axiousSecure.post('/api/addtocart',cartInfo)
            .then((res)=>{
                console.log(res.data);
                if(res.data.insertedId){
                    alert('Item added to cart successfully!');
                    // alert(res.data.message);
                    // alert(`${name} added to your cart`)
                }
                // refetch()
            })
        }else{
            navigate('/login',{state:{from:location}})
        }
    }



    // useEffect(() => {
    //     fetch(`http://localhost:5000/cartButton/${id}`)
    //         .then(res => res.json())
    //         .then(data => setCart(data))

    // }, [])

    // const handleAddToCart = (e) => {
    //     e.preventDefault()
    //     let form=e.target;
    //     const name=form.name.value;
    //     const price=form.price.value;
    //     const customer_email=form.customer_email.value;
    //     console.log(name,price,customer_email);
    //     const cartInfo = { name, price, customer_email };

    //     fetch('http://localhost:5000/api/addtocart', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(cartInfo),
    //     })
    //     .then((res) => res.json())
    //     .then((result) => {
    //         console.log(result);
    //         alert('Item added to cart successfully!');
    //     })
    //     .catch((error) => {
    //         console.error('Error adding item to cart:', error);
    //         alert('Failed to add item to cart.');
    //     });
    // };
    // console.log(products);
    
    // console.log(name, price, description);
    return (
        <div>
            <button onClick={()=>handleAddToCart(item)} className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">Add to Cart</button>
        </div>
        // <form onSubmit={handleAddToCart}>
        /* <input type="text" value={cart?.name} name='name' />
        <input type="hidden" value={cart?.price} name='price'/>
        <input type="hidden" value={user?.email} name='customer_email' /> */

        // </form>
    );
};

export default CartButton;