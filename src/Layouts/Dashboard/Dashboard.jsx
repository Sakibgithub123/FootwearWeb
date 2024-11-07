import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    let admin=true
    return (
        <div className='w-full flex '>
            <div className='w-3/12 min-h-screen bg-orange-400'>
            {
                admin?
                <div className="menu flex flex-col space-y-4">
                    <li className="btn btn-neutral"><NavLink to='/dashboard/allusers'>All Users</NavLink></li>
                    <li className="btn btn-neutral"><NavLink to='/dashboard/allitems'>All Item</NavLink></li>
                    <li className="btn btn-neutral"><NavLink to='/dashboard/manageitems'>Manage Item</NavLink></li>
                    <li className="btn btn-neutral"><NavLink to='/dashboard/addItems'>Add Items</NavLink></li>
                    <li className="btn btn-neutral"><NavLink>ytu</NavLink></li>
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
            
            </div>
            <div className='w-9/12'>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;