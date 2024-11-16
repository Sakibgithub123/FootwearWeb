import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import CartButton from '../../../components/CartButton/CartButton';
import { AuthContext } from '../../../Provider/AuthProvider';
import WishlistButton from '../../../components/WishlistButton/WishlistButton';
import useWishlist from '../../../hooks/useWishlist';

const TopSeller = () => {
    const {user}=useContext(AuthContext)
    const email=user?.email
    const [products, setProduct] = useState([])
    const [wishes,refetch] = useWishlist(email);
    useEffect(() => {
        fetch('http://localhost:5000/product/Top Seller')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                // setLoading(false)

            })
    }, [products])
    return (
        <div >
            <SectionTitle heading={'Top Seller'}></SectionTitle>
            {/* card */}
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
                products.slice(0,6).map((item,index) =>
                        <div key={index} className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
                            <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                    {/* love  */}
                                    {/* <div className="flex items-center">
                                        <svg width={30} className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></svg>
                                    </div> */}
                                    <WishlistButton id={item._id} wishes={wishes} refetch={refetch}></WishlistButton>
                                    <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">30% off</button>
                                </div>
                                <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={item?.image} alt="card " />
                            </div>
                            <div className="space-y-2 font-semibold">
                                <h6 className="text-sm md:text-base lg:text-lg">{item.name}</h6>
                                <p className="text-xs font-semibold text-gray-400 md:text-sm">{item.description}</p>
                                <p>${item.price}</p>
                            </div>
                            {/* <p>{item._id}</p> */}
                            <div className="flex flex-wrap items-center justify-between gap-6 text-[10px] md:text-base">
                               <Link to={`/productDetails/${item._id}`}> <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">View Details</button></Link>
                                {/* <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">Add to Cart</button> */}
                                <CartButton id={item._id} item={item}></CartButton>
                            </div>
                        </div>
                )
            }
           </div>

        </div>
    );
};

export default TopSeller;