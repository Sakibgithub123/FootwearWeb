import React, { useContext } from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../Provider/AuthProvider';
import useUser from '../../hooks/useUser';

const AdminHeader = () => {
    const {user,refetch}=useContext(AuthContext)
    const email=user?.email
    // console.log(email);
    const {userData}=useUser(email)
    const navigate=useNavigate()
    const handleLogout=()=>{
        logOut()
        .then(()=>{
           navigate('/')
        })
        .catch(error=>{
            console.error(error)
        })

    }
    return (
        <div className='text-right'>
            <div className='flex flex-row gap-2 space-x-reverse  items-center justify-end my-4'>
                <IoMdNotifications className='text-xl text-orange-500' />
                <div>
                    <h3 className='text-base text-stone-800 font-semibold'>{userData?.name}</h3>
                    <div className="dropdown dropdown-bottom dropdown-end">
                    <p tabIndex={0} role="button" className='text-sm text-stone-800 text-orange-300'>Admin Profile</p>
                        <ul tabIndex={0} className="dropdown-content  menu text-center bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                            <li><Link to={`/dashboard/user/profile/${email}`}>Profile</Link></li>
                            <li onClick={handleLogout}><Link>Log Out</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="relative">
                    <img
                        width={500}
                        height={500}
                        className="size-10 rounded-full bg-slate-500 object-cover"
                        src={userData?.image}
                        alt="avatar navigate ui"
                    />
                    <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500"></span>
                </div>

            </div>
        </div>
    );
};

export default AdminHeader;