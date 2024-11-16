import React, { useContext } from 'react';
import useAxiousSecure from '../../hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';
import useConvertDateTime from '../../hooks/useConvertDateTime';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import notFoundImg from "../../assets/img/notFound/oops.png"
const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    console.log(email);
    const axiousSecure = useAxiousSecure()
    const { data: myOrders = [], refetch } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await axiousSecure.get(`/api/myOrders/${email}`)
            return res.data
        }
    })
    console.log(myOrders);
    console.log('object');
    return (
        <div>
            <SectionTitle heading={'Your Orders'}></SectionTitle>
            <h1 className='text-left text-sm md:text-lg font-semibold text-stone-950 my-5 ml-20 underline'>My orders</h1>
            <div className='md:max-w-3xl md:mx-auto my-10'>
                {
                    myOrders?.length > 0 ?
                        myOrders.map((item, index) =>
                            <div key={index}>
                                <h3 className='text-center text-base font-semibold '>Orders Date: {useConvertDateTime(item.date)}</h3>
                                <div className='flex justify-between items-center gap-2 md:gap-20 py-5 text-xs md:text-base font-semibold text-stone-800 border-b '>
                                    <h3>Product</h3>
                                    <h3>Product Name</h3>
                                    <h3>Quantity</h3>
                                    <h3>Product Price</h3>
                                    <h3>Status</h3>
                                </div>
                                {
                                    item?.cart.map((itm, index) =>
                                        <div key={index} className='flex justify-between items-center gap-1 md:gap-20 py-2 text-xs md:text-sm text-stone-800 border-b'>
                                            <div><img src={itm.image} alt="image" className="h-10 md:h-12 w-10 md:w-12 object-cover bg-gray-300 rounded" /></div>
                                            <h3 className='font-extralight'>{itm.name}</h3>
                                            <h3 className=' font-extralight'>{item?.quantities[index]}</h3>
                                            <h3 className='font-extralight'>${itm.price}</h3>
                                            <h3 className='font-extralight' ><span className={`text-white py-1 px-2 font-extralight rounded-lg ${item.status === 'Progress' ? 'bg-yellow-500' : 'bg-rose-900'} ${item.status === 'Complited' ? 'bg-green-900' : 'bg-rose-900'}`}>{item.status}</span></h3>
                                        </div>
                                    )
                                }
                                <div className='flex justify-center items-center gap-20 py-2 text-base font-semibold text-stone-800 border-b '>

                                    <p className='text-end space-x-20 text-xs md:text-sm font-semibold'><span>Total:</span><span>${item.totalPrice}</span></p>

                                </div>

                            </div>
                        )
                        :
                        <div className='md:max-w-2xl md:mx-auto my-20'>
                            <div className='flex flex-col justify-center items-center'>
                                <div><img src={notFoundImg} alt="oops image" height={100} width={100} /></div>
                                <p className='text-base text-stone-900 italic'>You May Be Don't Add Any Wish!</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyOrders;