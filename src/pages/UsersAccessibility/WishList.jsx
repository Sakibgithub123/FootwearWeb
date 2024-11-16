import React, { useContext, useEffect } from 'react';
import useWishlist from '../../hooks/useWishlist';
import CartButton from '../../components/CartButton/CartButton';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import notFoundImg from "../../assets/img/notFound/oops.png"

const WishList = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    const [wishes] = useWishlist(email)

    // console.log(wishes);
    return (
        <div>
            {
                wishes.length > 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            wishes.map((item, index) =>
                                <div key={index} className="w-full md:max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
                                    <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                            {/* love  */}
                                            {/* <WishlistButton id={item._id}></WishlistButton> */}
                                            <div></div>
                                            <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">30% off</button>
                                        </div>
                                        <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={item?.productDetails?.image} alt="card img" />
                                    </div>
                                    <div className="space-y-2 font-semibold">
                                        <h6 className="text-xs md:text-sm md:text-base lg:text-lg">{item?.productDetails?.name}</h6>
                                        <p className="text-xs font-semibold text-gray-400 md:text-sm">{item?.productDetails?.description}</p>
                                        <p className="text-xs md:text-sm font-semibold">${item?.productDetails?.price}</p>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-6 text-[10px] md:text-sm">
                                        <Link to={`/productDetails/${item?.productDetails?._id}`}><button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">View Details</button></Link>
                                        {/* <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">Add to Cart</button> */}
                                        <CartButton id={item?.productDetails?._id} item={item?.productDetails}></CartButton>
                                    </div>
                                </div>
                            )

                        }
                    </div>
                    :
                    <div className='max-w-2xl mx-auto my-20'>
                        <div className='flex flex-col justify-center items-center'>
                            <div><img src={notFoundImg} alt="oops image" height={100} width={100} /></div>
                            <p className='text-base text-stone-900 italic'>You May Be Don't Add Any Wish!</p>
                        </div>
                    </div>
            }

        </div>
    );
};

export default WishList;