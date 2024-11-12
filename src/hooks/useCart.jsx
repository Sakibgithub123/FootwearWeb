import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiousSecure from './useAxiousSecure';

const useCart = (email) => {
    const axiousSecure = useAxiousSecure()
    const { isPending, error, data:cart=[],refetch } = useQuery({
        queryKey: ['cart'],
        queryFn:async () =>{
            const res=await axiousSecure.get(`/api/cart/${email}`)
            return res.data
        }  
      })
      return [cart,refetch]
};

export default useCart;