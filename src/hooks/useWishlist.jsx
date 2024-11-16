import React, { useContext, useEffect } from 'react';
import useAxiousSecure from './useAxiousSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useWishlist = (email) => {
    const axiousSecure=useAxiousSecure()
    const {data:wishes=[],refetch } = useQuery({
        queryKey: ['wishes',email],
        queryFn:async () =>{
            const res=await axiousSecure.get(`/wishlist/${email}`)
            return res.data
        },
        enabled: !!email, // Ensure the query is only triggered when email is available
        retry: false, // Optional: prevent retries if you don't want it to retry on failure
      });
      return [wishes,refetch]
};

export default useWishlist;