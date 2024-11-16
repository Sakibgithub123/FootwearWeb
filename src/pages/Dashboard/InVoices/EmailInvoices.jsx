import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiousSecure from '../../../hooks/useAxiousSecure';
import useOrderDetails from '../../../hooks/useOrderDetails';

const EmailInvoices = () => {
    const axiousSecure = useAxiousSecure()
    const { id } = useParams()
    const cusId = id;
    const { orders } = useOrderDetails(cusId)
    // const [email]= orders.cart
    return (
        <div>
            <h1 className='text-left text-stone-950 p-2 text-sm md:text-2xl font-bold border border-b-base-200 border-t-0'>Invoices</h1>
            <div className='max-w-96 mx-auto mt-8'>
                <div className='bg-base-200 p-10 space-y-4'>
                    <h3 className='text-2xl font-bold text-stone-950'>$389.00 Paid</h3>
                    <h4 className='text-lg font-medium text-stone-950'>Thanks for usingeMarket.</h4>
                    <div className='text-stone-700'>
                        <p>Attn: <span className='text-stone-950'>{orders.name}</span> Winston Salem FL 27107</p>
                        
                        {/* <p>Email: {email}</p> */}
                        <p>Email: Dianalove@gmail.com</p>
                        <p>Phone: {orders.phone}</p>
                    </div>

                    <div className='flex justify-center '>
                        <div className='w-full'>
                            {
                                orders?.cart?.map((item, index) =>
                                    //         <div className='flex justify-between border border-stone-200'>
                                    //     <span className='font-extralight text-base p-2'>Rado Watch</span>
                                    //     <span className='font-extralight text-base p-2 border border-l-stone-200'>$330.00</span>
                                    // </div>
                                    // <div className='flex justify-between border border-stone-200 '>
                                    //     <span className='font-extralight text-base p-2'>1 Year Product Warranty</span>
                                    //     <span className='font-extralight text-base p-2 border border-l-stone-200'>$10.99</span>
                                    // </div>
                                    <div key={index} className='flex justify-between border border-stone-200 '>
                                        <span className='font-extralight text-base p-2'>{item?.name}</span>
                                        <span className='font-extralight text-base p-2 border border-l-stone-200'>${item?.price}</span>
                                    </div>

                                )
                            }
                            <div className='flex justify-between border border-stone-200'>
                                <span className='font-bold text-base p-2'>Total:</span>
                                <span className='font-bold text-base p-2'>${orders?.totalPrice}</span>
                            </div>
                        </div>
                    </div>

                    <div className='text-stone-700 space-y-2 mt-8'>
                        <Link to={`/dashboard/invoices/${orders._id}`}><p className='hover:text-yellow-400'>View in browser</p></Link>
                        <p>PXL Inc. 47 Aurora St. South West, CT 06074</p>
                        <p>Questions? Email info@pixelwibes.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EmailInvoices;