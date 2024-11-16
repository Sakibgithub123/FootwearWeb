import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import useAxiousSecure from '../../hooks/useAxiousSecure';
// import { AuthContext } from '../../Provider/AuthProvider';
const Checkout = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [checkoutData, setCheckoutData] = useState(null);
    const navigate = useNavigate();
    const email = user?.email;
    const axiousSecure = useAxiousSecure()
    // console.log(email);

    useEffect(() => {
        // Retrieve data from localStorage
        const storedData = localStorage.getItem('checkoutData');

        if (storedData) {
            setCheckoutData(JSON.parse(storedData)); // Parse and set the data
        } else {
            // Redirect if no data found
            console.log("No data found, redirecting to cart...");
            navigate('/cart');
        }
    }, [navigate]);

    if (!checkoutData) {
        return null; // Don't render anything if there's no data
    }

    //date today
    const now = new Date();
    const dateTime = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    //random order id
    const uniqueId = () => Math.random().toString(36).substr(2, 9);
    const orderIdGen=uniqueId()
    const orderId=`#order-${orderIdGen}`
    // console.log(uniqueId());

    const { cart, totalPrice, quantities } = checkoutData;
    const onSubmit = async (data) => {
        const { name, phone, block_number, pin_code, address, city, country } = data;
        const orderInfo = {
            name:name,orderId:orderId, email:email, phone:phone, block_number:block_number, pin_code:pin_code, address:address, city:city, country:country, cart: cart, quantities: quantities, totalPrice: totalPrice, status: "Pending", date: dateTime
        }
        const res = await axiousSecure.post('/checkoutOrder', orderInfo)
        if (res.data.insertedId) {
            alert('order success')
        }

    }
    return (

        <div className='my-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-8 lg:mb-6">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                <h3 className="text-2xl font-semibold whitespace-nowrap">Shipping Details</h3>
                            </div>
                            <div className="lg:p-6 p-2">
                                {/* Shipping Details form */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Name</label>
                                        <input {...register('name', { required: true })} className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter Your Name" />
                                        {errors.name?.type === "required" && (<p role="alert">Name is required</p>)}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Phone</label>
                                        <input {...register('phone', { required: true })} className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter Your Phone" />
                                        {errors.phone?.type === "required" && (<p role="alert">Phone is required</p>)}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Block Number</label>
                                        <input {...register('block_number', { required: true })} className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter Your Block Number" />
                                        {errors.block_number?.type === "required" && (<p role="alert">Block Number is required</p>)}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Pin Code</label>
                                        <input {...register('pin_code', { required: true })} className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter Your Pin Code" />
                                        {errors.pin_code?.type === "required" && (<p role="alert">Pin Code is required</p>)}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Address</label>
                                        <input {...register('address', { required: true })} className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter Your Address" />
                                        {errors.address?.type === "required" && (<p role="alert">Address is required</p>)}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">City</label>
                                        <input {...register('city', { required: true })} className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter Your City" />
                                        {errors.city?.type === "required" && (<p role="alert">City is required</p>)}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Country</label>
                                        <input {...register('country', { required: true })} className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter Your Country" />
                                        {errors.country?.type === "required" && (<p role="alert">Country is required</p>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card  shadow-sm ">
                            <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                <h3 className="text-2xl font-semibold whitespace-nowrap">Payment Information</h3>
                            </div>
                            <div className="lg:p-6 p-2">
                                {/* Personal Information details form */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none">Card Number</label>
                                        <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your card number" />
                                        {/* {errors.country?.type === "required" && (<p role="alert">Country is required</p>)} */}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none">Expiry Date</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="MM/YY" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none">CVV</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your CVV" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none">Billing Address</label>
                                        <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your billing address" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                            <h3 className="text-2xl font-semibold whitespace-nowrap">Order Summary</h3>
                        </div>
                        {/* Checkout form */}
                        <div className="lg:p-6 p-2">
                            {
                                cart && cart.map((item, index) =>
                                    <div key={index} className="space-y-4">
                                        <div className="flex items-center  justify-between">
                                            <p className='w-8/12 text-left'>{item.name}</p>
                                            <p className='w-1/12'>{quantities?.[index]}</p>
                                            <p className='w-3/12'>${parseFloat(item.price * quantities[index])}.00</p>
                                        </div>
                                        {/* <div className="flex justify-between"><span>Product 2</span><span>$49.99</span></div>
                        <div className="flex justify-between"><span>Product 3</span><span>$29.99</span></div> */}
                                    </div>
                                )
                            }
                            <div className="border-t border-gray-200  mt-4 pt-4 flex justify-between font-semibold"><span>Total</span><span>${totalPrice}</span></div>
                        </div>
                        <div className="flex items-center lg:p-6 p-2">
                            <button className="ring-offset-background focus-visible:ring-ring inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black">Complete Purchase</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>



    );
};

export default Checkout;