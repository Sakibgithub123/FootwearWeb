import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../../hooks/useAxiousSecure';
import { MdDeleteForever } from 'react-icons/md';

const AllUsers = () => {
    const axiousSecure = useAxiousSecure()
    const { data: allusers = [], isPending, error, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await axiousSecure.get('/users')
            return res.data
        }
    })
    // console.log(allusers);
    const handleRole=async(role,id)=>{
        const givenRole={role:role}
        console.log(givenRole);
        const res = await axiousSecure.patch(`/users/role/${id}`,givenRole)
        if (res.data.modifiedCount > 0) {
            alert('Role added')
        }

    }
    const handleDelete = async (id) => {
        const res = await axiousSecure.delete(`/users/${id}`)
        if (res.data.deletedCount > 0) {
            alert('deleted users')
        }
    }
   
    return (
        <div>
            <SectionTitle heading={'All Users'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allusers.map((user, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.image}
                                                        alt="user image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className="dropdown">
                                            <div tabIndex={0} role="button" className="btn m-1">{user?.role?(user.role):'Assign Role'}</div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li onClick={()=>handleRole('Admin',user._id)}><a>Admin</a></li>
                                                <li onClick={()=>handleRole('User',user._id)}><a>User</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td>
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
    );
};

export default AllUsers;