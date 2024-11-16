import React, { useEffect, useState } from 'react';
import { FaPrint, FaTelegramPlane } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useAxiousSecure from '../../../hooks/useAxiousSecure';
import useConvertDateTime from '../../../hooks/useConvertDateTime';

const InVoices = () => {
    const axiousSecure = useAxiousSecure()
    const { id } = useParams()
    const cusId = id;
    const [order, setOrder] = useState({})
    // console.log(cusId);
    // console.log(id);
    useEffect(() => {
        axiousSecure.get(`/orderDetails/${cusId}`)
            .then(res =>
                setOrder(res.data)
            )

    }, [cusId])
    // console.log(order);
    const tax=59.4
    const subTotal=order?.totalPrice
    const total=tax+subTotal
    return (
        <div className='ml-3'>
            <h1 className='text-left text-stone-950 p-2 text-sm md:text-2xl md:text-sm md:text-2xl font-bold border border-b-base-200 border-t-0'>Invoices</h1>
            <div className='bg-base-200 p-4 md:p-20 max-w-4xl mx-auto mt-6 rounded text-sm md:text-base'>
                <div className='flex flex-col md:flex-row justify-between border border-stone-200 py-2 md:py-4 border-t-0 border-l-0 border-r-0'>
                    <span>Invoice <span className='text-stone-950 font-bold'>{useConvertDateTime(order.date)}</span></span>
                    <span><span className='text-stone-950 font-bold'>transection id:</span> {order.orderId}</span>
                    {/* <span>Invoice <span className='text-stone-950 font-bold'>May 22, 2021</span></span>
                    <span><span className='text-stone-950 font-bold'>transection id:</span> #18414</span> */}
                </div>
                <div className='flex flex-col md:flex-row gap-10 my-4'>
                    <div className='text-left'>
                        <h3 className='text-stone-700 mb-4 mt-2 text-sm md:text-base'>From:</h3>
                        <h3 className='text-stone-800 font-bold text-sm md:text-base'>eMarket Shop</h3>
                        <div className='text-stone-700 text-left text-sm md:text-base'>
                            <p>111 Berkeley Rd</p>
                            <p>STREET ON THE FOSSE, Poland</p>
                            <p>Email: info@ebazar.com</p>
                            <p>Phone: +44 888 666 3333</p>
                        </div>
                    </div>
                    <div className='text-left'>
                        <h3 className='text-stone-700 mb-4 mt-2 text-sm md:text-base'>To:</h3>
                        <h3 className='text-stone-800 font-bold text-sm md:text-base'>Dianalove</h3>
                        <div className='text-stone-700 text-left text-sm md:text-base'>
                            <p>45 Larissa Court</p>
                            <p>Victoria, BIRDWOODTON</p>
                            <p>Email: Dianalove@gmail.com</p>
                            <p>Phone: +66 243 456 789</p>
                        </div>
                    </div>

                </div>
                {/* table  */}
                <div className="overflow-x-auto">
                    <table className="md:table">
                        {/* head */}
                        <thead>
                            <tr className='text-stone-800 text-[10px] md:text-sm'>
                                <th>#</th>
                                <th>Item</th>
                                <th>Description</th>
                                <th>Item Cost</th>
                                <th>Products Item</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {/* <tr className="bg-base-200">
                                <th>1</th>
                                <td>Rado Watch</td>
                                <td>Men Watch for Gold Color</td>
                                <td>$330.00</td>
                                <td>1</td>
                                <td>$330.00</td>
                            </tr> */}
                            {
                                order?.cart?.map((item, index) =>
                                    <tr key={index} className="bg-base-200 text-[10px] md:text-sm">
                                        <th>{index+1}</th>
                                        <td>{item.name}</td>
                                        <td>{item?.description}</td>
                                        <td>${item?.price}</td>
                                        <td>{order?.quantities?.[index]}</td>
                                        <td>${(item?.price)*(order?.quantities[index])}</td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                    <div className='flex justify-end md:mr-10 mt-2'>
                        <div className='w-4/12 space-y-4'>
                            <div className='flex justify-between border border-stone-200 border-t-0 border-l-0 border-r-0'>
                                <span className='font-bold text-[10px] md:text-sm'>Subtotal:</span>
                                <span className='font-extralight text-[10px] md:text-sm'>${order?.totalPrice}</span>
                            </div>
                            <div className='flex justify-between border border-stone-200 border-t-0 border-l-0 border-r-0'>
                                <span className='font-bold text-[10px] md:text-sm'>Tax(18%):</span>
                                <span className='font-extralight text-[10px] md:text-sm'>${tax}</span>
                            </div>
                            <div className='flex justify-between border border-stone-200 border-t-0 border-l-0 border-r-0'>
                                <span className='font-bold text-[10px] md:text-sm'>Total:</span>
                                <span className='font-bold text-[10px] md:text-sm'>${total}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* terms  */}
                <div className='my-4 text-start'>
                    <h3 className='text-extralight'>Terms & Condition</h3>
                    <p className='text-stone-500 text-justify  text-[10px] md:text-sm'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                </div>
                <div className='flex justify-end '>
                    <div className='space-x-4 space-y-4 md:space-y-0'>
                        <button className='btn text-[10px] md:text-sm btn-outline btn-base-200 hover:bg-yelloe-600 hover:text-white'><FaPrint /> Print</button>
                        <button className='btn text-[10px] md:text-sm bg-blue-800 text-white'><FaTelegramPlane /> Send Invoice</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InVoices;