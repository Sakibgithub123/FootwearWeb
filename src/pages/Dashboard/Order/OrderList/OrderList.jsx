import React from 'react';
import { Link } from 'react-router-dom';
import useOrders from '../../../../hooks/useOrders';

const OrderList = () => {
    const [orders, refetch] = useOrders()
    return (
        <div className='ml-3'>
            <h1 className='text-left text-stone-950 p-2 text-2xl font-bold border border-b-base-200 border-t-0'>Orders List</h1>

            <div className="overflow-x-auto bg-base-200 mt-4">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-orange-400 text-white">
                            <th className="py-4 px-6 text-sm text-left border-b">ID</th>
                            <th className="py-4 px-6 text-sm text-left border-b">ITEM</th>
                            <th className="py-4 px-6 text-sm text-left border-b">CUSTOMER NAME</th>
                            <th className="py-4 px-6 text-sm text-left border-b">PAYMENT INFO</th>
                            <th className="py-4 px-6 text-sm text-left border-b">Price</th>
                            <th className="py-4 px-6 text-sm text-left border-b">STATUS</th>
                            <th className="py-4 px-6 text-sm border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 border-b transition duration-300">
                            <td className="py-4 px-6 border-b text-sm font-bold">#Order-11414</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b text-sm font-bold">Dual Speaker</td>
                            <td className="py-4 px-6 border-b text-sm font-bold">Bank Emi</td>
                            <td className="py-4 px-6 border-b text-sm font-bold">$99.99</td>
                            <td className="py-4 px-6 border-b text-sm font-bold">Complited</td>
                            <td className="py-4 px-6 border-b text-end">
                                <Link to={'/dashboard/orderDetails'}>
                                    <button className="bg-orange-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                                </Link>
                            </td>
                        </tr>
                        {
                            orders.map((item, index) =>
                                <tr className="hover:bg-gray-50 border-b transition duration-300">
                                    <td className="py-4 px-6 border-b text-sm font-bold">{item.orderId}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                {/* <div className="font-bold">{item.name}</div> */}
                                                {
                                                    item.cart.map((carts, index) =>
                                                        <div className="text-sm opacity-50">{carts.name}{index < item.cart.length - 1 ? ',' : ''}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 border-b text-sm font-bold">{item.name}</td>
                                    <td className="py-4 px-6 border-b text-sm font-bold">Bank Emi</td>
                                    <td className="py-4 px-6 border-b text-sm font-bold">${item.totalPrice}</td>
                                    <td className="py-4 px-6 border-b text-sm font-bold"><span className={`text-white rounded-lg py-1 px-2 ${item.status==='Progress'?'bg-yellow-500':'bg-rose-900'} ${item.status==='Complited'?'bg-green-900':'bg-rose-900'}`}>{item.status}</span></td>
                                    <td className="py-4 px-6 border-b text-end">
                                        <Link to={`/dashboard/orderDetails/${item._id}`}>
                                            <button className="bg-orange-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;