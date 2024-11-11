import React from 'react';
import useAxiousSecure from './useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const useOrderDetails = (cusId) => {
    const axiousSecure=useAxiousSecure()
    const { isPending, error, data:orders=[],refetch } = useQuery({
        queryKey: ['orderDetails'],
        queryFn:async () =>{
            const res=await axiousSecure.get(`/orderDetails/${cusId}`)
            return res.data
        }  
      })
      return {orders,refetch}
};

export default useOrderDetails;