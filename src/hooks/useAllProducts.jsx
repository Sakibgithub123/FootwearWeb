import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from './useAxiousSecure';


const useAllProducts = () => {
    const axiousSecure = useAxiousSecure()
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiousSecure.get('/products')
            return res.data
        }
    })
    return [products,refetch]
};

export default useAllProducts;