import React, { useContext, useEffect, useMemo, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useProductStatus from '../../../hooks/useProductStatus';
import { Link } from 'react-router-dom';
import CartButton from '../../../components/CartButton/CartButton';
import WishlistButton from '../../../components/WishlistButton/WishlistButton';
import useWishlist from '../../../hooks/useWishlist';
import { AuthContext } from '../../../Provider/AuthProvider';


const LatestProduct = () => {
    const {user}=useContext(AuthContext)
    const email=user?.email
    const [products, setProduct] = useState([])
    const [wishes,refetch] = useWishlist(email);
    useEffect(() => {
        fetch('http://localhost:5000/product/Latest')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                // setLoading(false)

            })
    }, [products])
    // console.log(products);
    



    return (
        <div>
            <SectionTitle heading={'Latest Product'}></SectionTitle>
            {/* card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products?.slice(0, 6).map((item, index) =>
                        <div key={index} className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
                            <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                    {/* love  */}
                                    <WishlistButton id={item._id} wishes={wishes} refetch={refetch}></WishlistButton>
                                    <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">30% off</button>
                                </div>
                                <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={item?.image} alt="card img" />
                            </div>
                            <div className="space-y-2 font-semibold">
                                <h6 className="text-sm md:text-base lg:text-lg">{item.name}</h6>
                                <p className="text-xs font-semibold text-gray-400 md:text-sm">{item.description}</p>
                                <p>${item.price}</p>
                                {/* <p className={`${wishes.some(wish => wish.productDetails._id === item._id) ? "bg-green-300" : "bg-red-300"}`}>
                                    {item.name}
                                </p> */}

                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-6 text-[10px] md:text-base">
                                <Link to={`/productDetails/${item._id}`}><button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">View Details</button></Link>
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

export default LatestProduct;