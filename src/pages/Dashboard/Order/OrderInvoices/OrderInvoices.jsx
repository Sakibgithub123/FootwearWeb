import React from 'react';
import { BsFillPrinterFill } from 'react-icons/bs';
import { MdMarkEmailUnread, MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useOrders from '../../../../hooks/useOrders';
import useConvertDateTime from '../../../../hooks/useConvertDateTime';

const OrderInvoices = () => {
    const [orders] = useOrders()
    return (
        <div className='ml-3'>
            <h1 className='text-left text-stone-400'>Order Invoices</h1>
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-orange-400 text-white">
                            <th className="py-4 px-6 text-sm text-left border-b">ID</th>
                            <th className="py-4 px-6 text-sm text-left border-b">ITEM</th>
                            <th className="py-4 px-6 text-sm text-left border-b">BILLING DATA</th>
                            <th className="py-4 px-6 text-sm text-left border-b">TOTAL AMOUNT</th>
                            <th className="py-4 px-6 text-sm text-left border-b">USER NAME</th>
                            <th className="py-4 px-6 text-sm border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((item, index) =>
                                <tr key={index} className="hover:bg-gray-50 border-b transition duration-300">
                                    <td className="py-4 px-6 border-b text-sm font-bold">{item.orderId}</td>
                                    {/* <td className="py-4 px-6 border-b text-sm font-bold">#Order-11414</td> */}
                                    <td>
                                        {
                                            item?.cart.map((carts, index) =>
                                                <div key={index} className="flex items-center gap-1">
                                                    <div className="avatar">
                                                        <div className={`mask mask-squircle  ${index < item.cart.length?'h-6 w-6 my-1':'h-12 w-12'}`}>
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {/* <div className="font-bold">Hart Hagerty</div> */}

                                                        <div key={index} className="text-sm opacity-50">{carts.name}{index < item.cart.length - 1 ? ',' : ''}</div>
                                                        {/* <div className="text-sm opacity-50">United States</div> */}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </td>
                                    {/* <td className="py-4 px-6 border-b text-sm font-bold">May 22, 2021</td> */}
                                    <td className="py-4 px-6 border-b text-sm font-bold">{useConvertDateTime(item.date)}</td>
                                    {/* <td className="py-4 px-6 border-b text-sm font-bold">$330</td> */}
                                    <td className="py-4 px-6 border-b text-sm font-bold">${item.totalPrice}</td>
                                    {/* <td className="py-4 px-6 border-b text-sm font-bold">Dianalove</td> */}
                                    <td className="py-4 px-6 border-b text-sm font-bold">{item.name}</td>
                                    <td className="py-4 px-6 border-b text-end">
                                        <Link to='/dashboard/invoices'>
                                            <button className="hover:scale-110 scale-100 transition-all duration-100 text-stone-950 py-2 px-4 rounded-md"><BsFillPrinterFill /></button>
                                        </Link>
                                        <button className="hover:scale-110 scale-100 transition-all duration-100 text-stone-950 py-2 px-4 rounded-md"><MdOutlineFileDownload /></button>
                                        <Link to='/dashboard/emailInvoices'>
                                            <button className="hover:scale-110 scale-100 transition-all duration-100 text-stone-950 py-2 px-4 rounded-md"><MdMarkEmailUnread /></button>
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

export default OrderInvoices;