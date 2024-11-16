import React, { useContext, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../../hooks/useAxiousSecure';
import { MdAssignmentInd, MdDeleteForever } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { FaUserTie } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const AllUsers = () => {
    const { userDelete } = useContext(AuthContext)
    const axiousSecure = useAxiousSecure()
    const { data: allusers = [], isPending, error, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await axiousSecure.get('/users')
            return res.data
        }
    })
    // console.log(allusers);
    const handleRole = async (role, id) => {
        const givenRole = { role: role }
        console.log(givenRole);
        const res = await axiousSecure.patch(`/users/role/${id}`, givenRole)
        if (res.data.modifiedCount > 0) {
            refetch()
            alert('Role added')
        }

    }
    const handleDelete = (id) => {
        userDelete()
            .then(async () => {
                const res = await axiousSecure.delete(`/users/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    alert('deleted users')
                }
            })
            .catch(error => {
                console.error(error)
            })

    }
    const [isTableCellOpen, setIsTableCellOpen] = useState(false);

    const toggleTable = () => {
        setIsTableCellOpen(!isTableCellOpen);
    };

    return (
        <div>
            <SectionTitle heading={'All Users'}></SectionTitle>
            <div className='ml-3 bg-base-200 md:p-4'>
                <h1 className='text-left text-stone-950 p-2 text-xs md:text-2xl font-bold border border-b-base-200 border-t-0'>All Users</h1>
                <div className="overflow-x-auto">
                    <table className="md:table">
                        {/* head */}
                        <thead>
                            <tr className="bg-orange-400  text-white">
                                    <th className='px-2 md:py-2 md:px-3 text-[10px] md:text-sm'>#</th>
                                    <th className='px-2 md:py-2 md:px-3 text-[10px] md:text-sm'>Name</th>
                                    <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm">Email</th>
                                    <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm">Role</th>
                                    <th className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allusers.map((user, index) =>
                                    <tr key={index}>
                                            <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm ">
                                                    {index + 1}
                                                </td>
                                            <td className="text-[10px] md:text-sm font-extralight">
                                                <div className="flex items-center gap-1">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-6 w-6 md:h-12 md:w-12">
                                                            <img
                                                                src={user.image}
                                                                alt="user image" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-extralight text-[10px] md:text-sm">{user.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm font-extralight">{user.email}</td>
                                            <td className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm font-extralight">
                                                <div className="dropdown md:-ml-6">
                                                    <div tabIndex={0} role="button" className="bg-orange-300 text-white py-1 px-2 rounded hover:text-stone-400 m-1 flex gap-1 items-center">{user.role == 'Admin' ? <RiAdminLine /> : user.role == 'User' ? <FaUserTie /> : <MdAssignmentInd />}{user?.role ? (user.role) : 'Assign Role'}</div>
                                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[10] w-32 p-2 shadow">
                                                        <li onClick={() => handleRole('Admin', user._id)}><a><RiAdminLine />Admin</a></li>
                                                        <li onClick={() => handleRole('User', user._id)}><a><FaUserTie />User</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td className="px-2 md:py-2 md:px-3 text-[10px] md:text-sm font-extralight">
                                                <button
                                                    onClick={() => handleDelete(user._id,)}
                                                    className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-1 px-1 rounded-md">
                                                    <MdDeleteForever />
                                                </button>
                                            </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;