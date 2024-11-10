import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiousSecure from './useAxiousSecure';

const useOrders = () => {
    const axiousSecure=useAxiousSecure()
    const { isPending, error, data:orders=[],refetch } = useQuery({
        queryKey: ['orders'],
        queryFn:async () =>{
            const res=await axiousSecure.get('/orders')
            return res.data
        }  
      })
      return [orders,refetch]
};

export default useOrders;