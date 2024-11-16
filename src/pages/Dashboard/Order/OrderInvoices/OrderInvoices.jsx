import React, { useState } from 'react';
import { BsFillPrinterFill } from 'react-icons/bs';
import { MdMarkEmailUnread, MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useOrders from '../../../../hooks/useOrders';
import useConvertDateTime from '../../../../hooks/useConvertDateTime';

const OrderInvoices = () => {
    const [orders] = useOrders()
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
            <h1 className='text-left text-stone-950 p-2 text-2xl font-bold border border-b-base-200 border-t-0'>Order Invoices</h1>
            <div className="overflow-x-auto">
                <table className="w-full max-w-screen-md shadow-md border mx-auto border-gray-100 my-6 md:table">
                    <thead>
                        <tr className="bg-orange-400 text-white">
                            <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm"></th>
                            <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm">ID</th>
                            <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm hidden md:table-cell">ITEM</th>
                            <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm hidden md:table-cell">BILLING DATA</th>
                            <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm hidden md:table-cell">TOTAL AMOUNT</th>
                            <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm">USER NAME</th>
                            <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((item, index) =>
                                <>
                                    <tr key={index} className="hover:bg-gray-50 transition duration-300">
                                        <td className="pl-1 md:py-2 md:px-3 text-[10px] text-xs font-semibold">
                                            <button
                                                onClick={() => toggleTable(index)}
                                                className="pl-1 md:py-2 md:px-3 font-bold text-stone-950 rounded-full mr-1 md:hidden"
                                            >
                                                {isTableCellOpen === index ? "-" : "+"}
                                            </button>
                                        </td>
                                        <td className="px-2 md:py-2 md:px-3 text-xs font-semibold">{item.orderId}</td>
                                        {/* <td className="py-4 px-6 text-[10px] md:text-sm font-bold">#Order-11414</td> */}
                                        <td className="px-2 md:py-2 md:px-3 text-xs hidden md:table-cell">
                                            {
                                                item?.cart.map((carts, index) =>
                                                    <div key={index} className="flex items-center gap-1">
                                                        <div className="avatar">
                                                            <div className={`mask mask-squircle  ${index < item.cart.length ? 'h-6 w-6 my-1' : 'h-12 w-12'}`}>
                                                                <img
                                                                    src={carts?.image}
                                                                    alt="Avatar" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {/* <div className="font-bold">Hart Hagerty</div> */}

                                                            <div key={index} className="text-xs font-semibold">{carts.name}{index < item.cart.length - 1 ? ',' : ''}</div>
                                                            {/* <div className="text-[10px] md:text-sm opacity-50">United States</div> */}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </td>
                                        {/* <td className="py-4 px-6 text-[10px] md:text-sm font-bold">May 22, 2021</td> */}
                                        <td className="px-2 md:py-2 md:px-3 text-xs font-extralight hidden md:table-cell">{useConvertDateTime(item.date)}</td>
                                        {/* <td className="py-4 px-6 text-[10px] md:text-[10px] md:text-sm font-bold">$330</td> */}
                                        <td className="px-2 md:py-2 md:px-3 text-xs font-extralight hidden md:table-cell">${item.totalPrice}</td>
                                        {/* <td className="py-4 px-6 text-[10px] md:text-sm font-bold">Dianalove</td> */}
                                        <td className="px-2 md:py-2 md:px-3 text-xs font-extralight">{item.name}</td>
                                        <td className="px-2 md:py-2 md:px-3 text-xs font-extralight ">
                                            <Link to={`/dashboard/invoices/${item._id}`}>
                                                <button className="hover:scale-110 scale-100 transition-all duration-100 text-stone-950 py-2 px-4 rounded-md"><BsFillPrinterFill /></button>
                                            </Link>
                                            <button className="hover:scale-110 scale-100 transition-all duration-100 text-stone-950 py-2 px-4 rounded-md"><MdOutlineFileDownload /></button>
                                            <Link to={`/dashboard/emailInvoices/${item._id}`}>
                                                <button className="hover:scale-110 scale-100 transition-all duration-100 text-stone-950 py-2 px-4 rounded-md"><MdMarkEmailUnread /></button>
                                            </Link>
                                        </td>
                                    </tr>
                                    {
                                        isTableCellOpen === index && (
                                            <tr className='bg-white md:hidden'>
                                                <td colSpan={11}>
                                                    <div className="grid grid-cols-2 gap-4 p-4 text-xs">
                                                        <div>
                                                            <p className="font-medium">ITEM:</p>
                                                            <div className='grid grid-cols-2 gap-4 p-4'>
                                                                {
                                                                    item?.cart.map((carts, index) =>
                                                                        <div key={index} className="flex gap-1">
                                                                            <div className="avatar">
                                                                                <div className={`mask mask-squircle  ${index < item.cart.length ? 'h-6 w-6 my-1' : 'h-12 w-12'}`}>
                                                                                    <img
                                                                                        src={carts?.image}
                                                                                        alt="Avatar" />
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <div key={index} className="text-xs font-extralight">{carts.name}{index < item.cart.length - 1 ? ',' : ''}</div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }

                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span className="font-medium">BILLING DATA:</span> {useConvertDateTime(item.date)}
                                                            </div>
                                                            <div>
                                                                <span className="font-medium">TOTAL AMOUNT:</span> ${item.totalPrice}
                                                            </div>
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

export default OrderInvoices;