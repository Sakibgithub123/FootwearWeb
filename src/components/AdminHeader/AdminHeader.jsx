import React from 'react';
import { IoMdNotifications } from 'react-icons/io';

const AdminHeader = () => {
    return (
        <div className='text-right'>
            <div className='flex flex-row gap-2 space-x-reverse  items-center justify-end my-4'>
            <IoMdNotifications className='text-xl text-orange-500' />
            <div>
                <h3 className='text-xl text-stone-800 font-semibold'>John Quinen</h3>
                <p className='text-sm text-stone-800 text-orange-300'>Admin Profile</p>
            </div>
            <div className="relative">
                <img
                    width={500}
                    height={500}
                    className="size-10 rounded-full bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="avatar navigate ui"
                />
                <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500"></span>
            </div>

        </div>
        </div>
    );
};

export default AdminHeader;