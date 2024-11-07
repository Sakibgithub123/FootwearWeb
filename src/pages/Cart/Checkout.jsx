import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [checkoutData, setCheckoutData] = useState(null);
    const navigate = useNavigate();

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

    const { cart, totalPrice, quantities } = checkoutData;
    return (
        // <div className='grid grid-cols-2 gap-4'>
        <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8 lg:mb-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                        <h3 className="text-2xl font-semibold whitespace-nowrap">Shipping Details</h3>
                    </div>
                    <div className="lg:p-6 p-2">
                        {/* Shipping Details form */}
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Address</label>
                                <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your address" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">City</label>
                                <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your city" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Country</label>
                                <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your country" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="rounded-lg border bg-card  shadow-sm ">
                    <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                        <h3 className="text-2xl font-semibold whitespace-nowrap">Payment Information</h3>
                    </div>
                    <div className="lg:p-6 p-2">
                        {/* Personal Information details form */}
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Card Number</label>
                                <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your card number" />
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
                        </form>
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
                        cart && cart.map((item,index)=>
                            <div key={index} className="space-y-4">
                        <div className="flex justify-between"><span>{item.name}</span><span>{item.price * quantities[index]}</span></div>
                        {/* <div className="flex justify-between"><span>Product 2</span><span>$49.99</span></div>
                        <div className="flex justify-between"><span>Product 3</span><span>$29.99</span></div> */}
                    </div>
                        )
                    }
                     <div className="border-t border-gray-200  mt-4 pt-4 flex justify-between font-semibold"><span>Total</span><span>{totalPrice}</span></div>
                </div>
                <div className="flex items-center lg:p-6 p-2">
                    <button className="ring-offset-background focus-visible:ring-ring inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black">Complete Purchase</button>
                </div>
            </div>
        </div>
            
        // {/* </div> */ }
    );
};

export default Checkout;