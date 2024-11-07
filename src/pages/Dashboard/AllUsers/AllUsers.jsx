import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../../hooks/useAxiousSecure';

const AllUsers = () => {
    const axiousSecure = useAxiousSecure()
    const { data: allusers = [], isPending, error, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await axiousSecure.get('/users')
            return res.data
        }
    })

    return (
        <div>
            <SectionTitle heading={'All Users'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allusers.map((user,index) => {
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>role</td>
                                    <td>delete</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;