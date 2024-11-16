import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import ResponsiveNav from '../ResponsiveNav/ResponsiveNav';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    let admin = true
    return (
        <div>
            <div className=''>
                <button
                    onClick={toggleSidebar}
                    className=" relative top-11 -left-20 z-20 p-1 bg-blue-500 text-white rounded-lg md:hidden"
                >
                    ☰ Menu
                </button>
                <h3 className='bg-stone-950 p-4 text-white text-sm md:text-xl font-extrabold'>EasyMarket</h3>
            </div>
            {/* <ResponsiveNav></ResponsiveNav> */}
            {/* <div className='w-full flex '>
                <div className='w-2/12 min-h-screen bg-orange-400'>
                    {
                        admin ?
                            <div className="menu flex flex-col space-y-4">
                                <li className="btn btn-neutral"><NavLink  to='/dashboard'>Dashboard</NavLink></li>
                                <li className="btn btn-neutral"><NavLink to='/dashboard/allusers'>All Users</NavLink></li>
                                <li className="btn btn-neutral"><NavLink to='/dashboard/allitems'>All Items</NavLink></li>
                                <li className="btn btn-neutral">
                                    <div className="dropdown dropdown-right">
                                        <div tabIndex={0} role="button" className=" text-white m-1">Manage Product</div>
                                        <ul tabIndex={0} className="dropdown-content space-y-2 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li className='bg-orange-400 rounded-lg'><NavLink to='/dashboard/addCategory'>Add Category</NavLink></li>
                                            <li className='bg-orange-400 rounded-lg'><NavLink to='/dashboard/addBrand'>Add Brand</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="btn btn-neutral"><NavLink to='/dashboard/addItems'>Add Items</NavLink></li>
                                <li className="btn btn-neutral"><NavLink to='/dashboard/orderList'>Order List</NavLink></li>
                                <li className="btn btn-neutral"><NavLink to='/dashboard/orderInvoices'>Order Invoices</NavLink></li>
                            </div>
                            
                            :
                            <div className="menu flex flex-col">
                                <li className="btn btn-neutral">All Users</li>
                                <li className="btn btn-neutral">Add Item</li>
                                <li className="btn btn-neutral">Manage Item</li>
                                <li className="btn btn-neutral">Neutral</li>
                                <li className="btn btn-neutral">Neutral</li>
                            </div>
                    }
                    <div className='divider'></div>
                    <div className="menu flex flex-col">
                        <li className="btn btn-neutral" ><NavLink to={'/'}>Home</NavLink></li>
                    </div>

                </div>
               
                <div className='w-10/12'>
                    <AdminHeader></AdminHeader>
                    <Outlet></Outlet>
                </div>
            </div> */}
            <div className='flex'>
                <div
                    className={`relative top-0 left-0 min-h-screen w-64 bg-blue-600 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full hidden md:block"
                        } transition-transform md:translate-x-0 md:w-2/12`}
                >
                    <div className="p-4 text-2xl font-bold border-b border-blue-400">
                        Logo
                    </div>
                    <ul className="mt-4 space-y-4 menu">
                        <li className="btn btn-neutral">
                            <NavLink to='/dashboard' className="block px-4 py-2 hover:bg-blue-500 rounded">
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="btn btn-neutral">
                            <NavLink to='/dashboard/allusers' className="block px-4 py-2 hover:bg-blue-500 rounded">
                                All Users
                            </NavLink>
                        </li>
                        <li className="btn btn-neutral">
                            <NavLink to='/dashboard/addCategory' className="block px-4 py-2 hover:bg-blue-500 rounded">
                                Add Category
                            </NavLink>
                        </li>
                        <li className="btn btn-neutral">
                            <NavLink to='/dashboard/addBrand' className="block px-4 py-2 hover:bg-blue-500 rounded">
                                Add Brand
                            </NavLink>
                        </li>
                        <li className="btn btn-neutral">
                            <NavLink to='/dashboard/allitems' className="block px-4 py-2 hover:bg-blue-500 rounded">
                                All Products
                            </NavLink>
                        </li>
                        <li className="btn btn-neutral">
                            <NavLink to='/dashboard/addItems' className="block px-4 py-2 hover:bg-blue-500 rounded">
                                Add Items
                            </NavLink>
                        </li>
                        <li className="btn btn-neutral">
                            <NavLink to='/dashboard/orderList' className="block px-4 py-2 hover:bg-blue-500 rounded">
                                Orders List
                            </NavLink>
                        </li>
                        <li className="btn btn-neutral">
                            <NavLink to='/dashboard/orderInvoices' className="block px-4 py-2 hover:bg-blue-500 rounded">
                                Orders Invoices
                            </NavLink>
                        </li>
                    </ul>
                    <div className="divider"></div>
                    <ul className="mt-4 space-y-4 menu">
                        <li className="btn btn-neutral">
                            <NavLink to="/" className="block px-4 py-2 hover:bg-blue-500 rounded">
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* // */}
                <div className='w-full md:w-10/12'>
                    <AdminHeader></AdminHeader>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;