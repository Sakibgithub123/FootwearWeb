import React from 'react';
import useAxiousSecure from './useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const useUser = (email) => {
    const axiousSecure = useAxiousSecure()
    const { data: userData = {}, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiousSecure.get(`/api/users/profile/${email}`)
            return res.data
        }
    })
    return {userData,refetch}
};

export default useUser;