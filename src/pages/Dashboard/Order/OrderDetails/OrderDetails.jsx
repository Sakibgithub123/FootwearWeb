import React, { useEffect, useState } from 'react';
import { FaCartArrowDown, FaUserCog } from 'react-icons/fa';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import useAxiousSecure from '../../../../hooks/useAxiousSecure';
import { useForm } from 'react-hook-form';

const OrderDetails = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({defaultValues:{orderTransection:""}});
    const { id } = useParams()
    const cusId = id
    const [orderDetails, setOrderDetails] = useState({})
    // console.log(id);
    const axiousSecure = useAxiousSecure()
    useEffect(() => {
        axiousSecure.get(`/orderDetails/${cusId}`)
            .then(res =>
                setOrderDetails(res.data),
            )
    }, [])

     const quantity=orderDetails?.quantities?.length
        setValue('orderId', orderDetails.orderId),
        setValue('status', orderDetails.status),
        setValue('quantity',quantity )
    // console.log(orderDetails);
    const subtotal = orderDetails?.totalPrice || 0;
    const shippingCost = 12.0;
    const taxRate = 0.18;
    const tax = subtotal * taxRate;
    const total = subtotal + shippingCost + tax;
    const onSubmit = async (data) => {
        console.log(data);
        const {orderId,status,quantity,orderTransection,comment}=data
        const statusOrder={
            orderId:orderId,
            status:status,
            quantity:quantity,
            orderTransection:orderTransection,
            comment:comment

        }
        try{
            const res= await axiousSecure.patch('/orderStatus',statusOrder)
            if(res.data.insertedId){
                alert('Order status send')
            }
        }
        catch(error){
          console.log('Something wrong',error);
        }
        
       
    }
    return (
        <div className='ml-3'>
            <h1 className='text-left text-stone-950 p-2 text-2xl font-bold border border-b-base-200 border-t-0'>Order Details: #Order-78414</h1>
            <div className='flex flex-row space-x-4 mt-4'>
                <div className='flex flex-row gap-2 bg-emerald-100 items-center p-3 rounded-lg w-3/12 border border-green-400'>
                    <FaCartArrowDown className='text-emerald-400 text-4xl' />
                    <div className='text-emerald-950 text-left'>
                        <h3 className='text-lg'>Order Created at</h3>
                        <p className='text-xs'>{orderDetails.date}</p>
                        {/* <p className='text-xs'>16/03/2021 at 04:23 PM</p> */}
                    </div>
                </div>
                <div className='flex flex-row gap-2  items-center bg-rose-100  w-3/12 p-3 rounded-lg w-3/12 border border-rose-400'>
                    <FaUserCog className='text-rose-400 text-4xl' />
                    <div className='text-rose-950 text-left'>
                        <h3 className='text-lg'>Name</h3>
                        {/* <p className='text-xs'>Gabrielle</p> */}
                        <p className='text-xs'>{orderDetails.name}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2  items-center bg-amber-100 border border-amber-400 w-3/12 p-3 rounded-lg w-3/12 border border-amber-400' >
                    <MdEmail className='text-amber-400 text-4xl' />
                    <div className='text-amber-950 text-left'>
                        <h3 className='text-lg'>Email</h3>
                        {/* <p className='text-xs'>gabrielle.db@gmail.com</p> */}
                        <p className='text-xs'>{orderDetails.email}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2  items-center bg-cyan-100 w-3/12 p-3 rounded-lg w-3/12 border border-cyan-400'>
                    <MdPhoneInTalk className='text-cyan-400 text-4xl' />
                    <div className='text-cyan-950 text-left'>
                        <h3 className='text-lg'>Contact No</h3>
                        {/* <p className='text-xs'>202-906-12354</p> */}
                        <p className='text-xs'>{orderDetails.phone}</p>
                    </div>
                </div>
            </div>
            {/* // */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-10'>
                <div className='bg-base-200 text-left p-3 rounded'>
                    <div className='mb-2 flex justify-between  '>
                        <span className='text-base text-stone-950 font-bold'>Delivery Address</span>
                        <span className='text-sm text-stone-400'>Edit</span>
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Block Number:</span>
                        {/* <span className='text-xs text-stone-950 font-bold'> A-510</span> */}
                        <span className='text-xs text-stone-950 font-bold'> {orderDetails.block_number}</span>
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Address:</span>
                        <span className='text-xs text-stone-950 font-bold'> {orderDetails.address}</span>
                        {/* <span className='text-xs text-stone-950 font-bold'> 81 Fulton London</span> */}
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Pincode:</span>
                        {/* <span className='text-xs text-stone-950 font-bold'> 385467</span> */}
                        <span className='text-xs text-stone-950 font-bold'>{orderDetails.pin_code}</span>
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Phone:</span>
                        <span className='text-xs text-stone-950 font-bold'>{orderDetails.phone}</span>
                        {/* <span className='text-xs text-stone-950 font-bold'>  202-458-4568</span> */}
                    </div>

                </div>
                <div className='bg-xs-200 text-left p-3 rounded'>
                    <div className='mb-2 flex justify-between'>
                        <span className='text-base text-stone-950 font-bold'>Billing Address</span>
                        <span className='text-sm text-stone-400'>Edit</span>
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Block Number:</span>
                        <span className='text-xs text-stone-950 font-bold'> {orderDetails.block_number}</span>
                        {/* <span className='text-xs text-stone-950 font-bold'> A-510</span> */}
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Address:</span>
                        <span className='text-xs text-stone-950 font-bold'> {orderDetails.address}</span>
                        {/* <span className='text-xs text-stone-950 font-bold'> 81 Fulton London</span> */}
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Pincode:</span>
                        <span className='text-xs text-stone-950 font-bold'> {orderDetails.pin_code}</span>
                        {/* <span className='text-xs text-stone-950 font-bold'> 385467</span> */}
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Phone:</span>
                        {/* <span className='text-xs text-stone-950 font-bold'>  202-458-4568</span> */}
                        <span className='text-xs text-stone-950 font-bold'>  {orderDetails.phone}</span>
                    </div>

                </div>
                <div className='bg-xs-200 text-left p-3 rounded'>
                    <div className='mb-2 flex justify-between'>
                        <span className='text-base text-stone-950 font-bold'>Invoice Deatil</span>
                        <span className='text-sm text-stone-400'>Download</span>
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Number:</span>
                        <span className='text-xs text-stone-950 font-bold'> #78414</span>
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Seller GST:</span>
                        <span className='text-xs text-stone-950 font-bold'> AFQWEPX17390VJ</span>
                    </div>
                    <div className='py-1 '>
                        <span className='text-xs text-stone-800 font-medium'>Purchase GST:</span>
                        <span className='text-xs text-stone-950 font-bold'> NVFQWEPX1730VJ</span>
                    </div>
                </div>

            </div>
            {/* table  */}
            <div className='ml-3 mt-4'>
                <div className="overflow-x-auto bg-base-200 p-4 rounded">
                    <h1 className='text-left font-medium text-stone-700 py-2 text-xl'>Order Summery</h1>
                    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 mt-6">
                        <thead>
                            <tr className="bg-orange-400 text-white">
                                <th className="py-4 px-6 text-sm  border-b">PRODUCT IMAGE</th>
                                <th className="py-4 px-6 text-sm  border-b">PRODUCT NAME</th>
                                <th className="py-4 px-6 text-sm  border-b">QUANTITY</th>
                                <th className="py-4 px-6 text-sm  border-b">PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr className="hover:bg-gray-50 border-b transition duration-300">
                                <td>
                                    <td className="py-4 px-4 flex justify-start">
                                        <img src="https://source.unsplash.com/64x64/?microphone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                    </td>
                                </td>
                                <td className="py-4 px-6 border-b text-sm font-extraLight">Oculus VR
                                    Pr-1204</td>
                                <td className="py-4 px-6 border-b text-sm font-extraLight">1</td>
                                <td className="py-4 px-6 border-b text-sm font-extraLight">$149.00</td>
                            </tr> */}
                            {
                                orderDetails?.cart?.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50 border-b transition duration-300">
                                            <td className="py-4 px-6 text-xs flex justify-center ">
                                                <img
                                                    src={item?.image}
                                                    alt="table navigate ui"
                                                    className="h-16 w-16 object-cover bg-gray-300 text-center"
                                                />
                                            </td>
                                        <td className="py-4 px-6 border-b text-xs font-extraLight">{item.name}</td>
                                        <td className="py-4 px-6 border-b text-xs font-extraLight">
                                            {orderDetails?.quantities?.[index]}
                                        </td>
                                        <td className="py-4 px-6 border-b text-xs font-extraLight">${item.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className='flex justify-end mr-12 text-xs '>
                        <div className='order-last w-5/12 border space-y-4 p-4  border-t-0 border-r-0 border-b-0'>
                            <div className='flex justify-between'>
                                <span className='text-start font-light text-stone-600'>Subtotal Price:</span>
                                <span className='text-end mr-6'>${orderDetails?.totalPrice}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-start font-light text-stone-600'>Shipping Cost (+):</span>
                                <span className='text-end mr-6'>$12.00</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-start font-light text-stone-600'>Tax(18%):</span>
                                <span className='text-end mr-6'>$198.00</span>
                            </div>
                            <div className='flex justify-between border border-l-0 border-r-0 border-b-0'>
                                <span className='text-start font-normal text-stone-800'>Total Payable:</span>
                                {/* <span className='text-end mr-6'>$1296.00</span> */}
                                <span className='text-end mr-6'>${total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* status order  */}
            <div className='ml-3 mt-4 flex justify-end text-sm'>
                <div className='w-6/12 font-medium bg-base-200 p-4 rounded'>
                    <h1 className='text-left text-stone-700 py-2 text-xl'>Status Orders</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-1 text-sm'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Order ID</span>
                            </div>
                            <input {...register('orderId', { required: true })} type="text" placeholder="Type here" className="py-1 px-2 rounded border border-base-300 w-full" />
                            {errors.orderId?.type === "required" && (<p role="alert">Order Id is required</p>)}
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Order Status</span>
                            </div>
                            <select name="orderStatus"
                                {...register('status', { required: true })}
                                className="py-1 px-2 rounded border border-base-300 w-full"
                            >
                                <option value="Progress">Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                            </select>
                            {errors.status?.type === "required" && (<p role="alert">Order Status is required</p>)}
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Quantity</span>
                            </div>
                            <input {...register('quantity', { required: true })} type="text" name='quantity' placeholder="Type here" className="py-1 px-2 rounded border border-base-300 w-full" />
                            {errors.quantity?.type === "required" && (<p role="alert">Quantity is required</p>)}
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Order Transection</span>
                            </div>
                            <select
                                {...register('orderTransection', { required: true })}
                                className="py-1 px-2 rounded border border-base-300 w-full"
                            >
                                <option value="">Select Order Transection</option>
                                <option value="Completed">Completed</option>
                                <option value="Fail">Fail</option>
                            </select>
                            {errors.orderTransection?.type === "required" && (<p role="alert">Order Transection is required</p>)}
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Comment</span>
                            </div>
                            <textarea
                                {...register('comment', { required: true })}
                                className="py-1 px-2 rounded border border-base-300 w-full"
                                cols={5} rows={5}
                            >
                            </textarea>
                            {errors.comment?.type === "required" && (<p role="alert">Comment is required</p>)}
                        </label>
                        <div className='text-start'>
                            <button className='py-2 px-4 bg-orange-400 rounded text-base-200'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;