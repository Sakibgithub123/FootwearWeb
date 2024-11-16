import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOrders from '../../../../hooks/useOrders';

const OrderList = () => {
    const [orders, refetch] = useOrders()
    const [isTableCellOpen, setIsTableCellOpen] = useState(null);
    const toggleTable = (index) => {
        if (isTableCellOpen === index) {
            // If the same index is clicked, close it
            setIsTableCellOpen(null);
        } else {
            // Otherwise, open the clicked index
            setIsTableCellOpen(index);
        }

    };
    return (
        <div className='mb-6 bg-base-200 md:p-4 ml-3'>
            <h1 className='text-left text-stone-950 p-2 text-sm md:text-2xl font-bold border border-b-base-200 border-t-0'>Orders List</h1>

            <div className="overflow-x-auto bg-base-200 mt-4">
                <table className="w-full max-w-screen-md shadow-md border mx-auto border-gray-100 my-6 md:table">
                    <thead>
                        <tr className="bg-orange-400 text-white">
                            <th className="text-[10px] md:text-sm "></th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm ">ID</th>
                            {/* <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm ">ITEM</th> */}
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm ">CUSTOMER NAME</th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm hidden md:table-cell">PAYMENT INFO</th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm hidden md:table-cell">TOTAl PRICE</th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm hidden md:table-cell">STATUS</th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm md:text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="hover:bg-gray-50 transition duration-300">
                            <td className="px-2 md:py-2 md:px-3  border-orange-400 text-[10px] md:text-sm font-extralight">#Order-11414</td>
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
                                        <div className="font-extralight">Hart Hagerty</div>
                                        <div className="text-[10px] md:text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm font-extralight">Dual Speaker</td>
                            <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm font-extralight">Bank Emi</td>
                            <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm font-extralight">$99.99</td>
                            <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm font-extralight">Complited</td>
                            <td className="py-4 px-6 border-b text-end">
                                <Link to={'/dashboard/orderDetails'}>
                                    <button className="bg-orange-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                                </Link>
                            </td>
                        </tr> */}
                        {
                            orders.map((item, index) =>
                                <>
                                    <tr key={index} className="hover:bg-gray-50 border-b transition duration-300">
                                        <td className="pl-1 md:py-2 md:px-3 text-[10px] text-xs font-semibold">
                                            <button
                                                onClick={() => toggleTable(index)}
                                                className="pl-1 md:py-2 md:px-3  font-bold text-stone-950 rounded-full mr-1 md:hidden"
                                            >
                                                {isTableCellOpen === index ? "-" : "+"}
                                            </button>
                                        </td>
                                        <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-xs font-extralight">{item.orderId}</td>
                                        {/* <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm font-extralight">
                                        {
                                            item.cart.map((carts, index) =>
                                                <div key={index} className="flex items-center gap-1">
                                                    <div className="avatar">
                                                        <div className={`mask mask-squircle  ${index < item.cart.length?'h-6 w-6 my-1':'h-12 w-12'}`}>
                                                            <img
                                                                src={carts?.image}
                                                                alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                       
                                                        <div className="text-xs  font-extralight">{carts.name}{index < item.cart.length - 1 ? ',' : ''}</div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </td> */}
                                        <td className="px-2 md:py-2 md:px-3  text-xs font-extralight">{item.name}</td>
                                        <td className="px-2 md:py-2 md:px-3  text-xs font-extralight hidden md:table-cell">Bank Emi</td>
                                        <td className="px-2 md:py-2 md:px-3  text-xs font-extralight hidden md:table-cell ">${item.totalPrice}</td>
                                        <td className="px-2 md:py-2 md:px-3  text-xs font-extralight hidden md:table-cell"><span className={`text-white rounded-lg py-1 px-2 ${item.status === 'Progress' ? 'bg-yellow-500' : 'bg-rose-900'} ${item.status === 'Complited' ? 'bg-green-900' : 'bg-rose-900'}`}>{item.status}</span></td>
                                        <td className="px-2 md:py-2 md:px-3  text-xs font-extralight text-end">
                                            <Link to={`/dashboard/orderDetails/${item._id}`}>
                                                <button className="bg-orange-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    {
                                        isTableCellOpen === index && (
                                            <tr className='bg-white md:hidden'>
                                                <td colSpan={11}>
                                                    <div className="grid grid-cols-2 gap-4 p-4 text-xs">
                                                        <div>
                                                            <span className='font-medium'>PAYMENT INFO:</span> Bank Emi
                                                        </div>
                                                        <div>
                                                            <span className='font-medium'>TOTAl PRICE:</span> ${item.totalPrice}
                                                        </div>
                                                        <div className='flex flex-col gap-1'>
                                                            <span className='font-medium'>STATUS:</span><span className={`text-white rounded-lg  ${item.status === 'Progress' ? 'text-yellow-500' : 'text-rose-900'} ${item.status === 'Complited' ? 'text-green-900' : 'text-rose-900'}`}> {item.status}</span>
                                                        </div>
                                                    </div>

                                                </td>

                                            </tr>
                                        )
                                    }
                                </>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;