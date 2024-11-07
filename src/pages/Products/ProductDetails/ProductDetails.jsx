import React, { useEffect, useState } from 'react';
import bissaleImg from "../../../assets/img/bigsale/blog_1.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useParams } from 'react-router-dom';
import CartButton from '../../../components/CartButton/CartButton';
const ProductDetails = () => {
    const {id}=useParams();
    // console.log(id);
    const [products,setProduct]=useState('')
    useEffect(()=>{
        fetch(`http://localhost:5000/productDetails/${id}`)
        .then(res=>res.json())
        .then(data=>
            setProduct(data)
            // setLoading(false)
           
        )
    },[])
    // console.log(products);
    return (
        <div>
            <div className='flex flex-row gap-2'>
                <div className='w-7/12'>
                    <img className='w-[600px] h-[400px]' src={bissaleImg} alt="" />
                </div>
                <div className='flex flex-col justify-center text-justify  space-y-3 w-5/12'>
                    <h1 className='text-3xl'>{products.name}</h1>
                    <p className='text-3xl text-orange-400'>${products.price}</p>
                    <p>Category:{products.category}</p>
                    <p>Availability: In Stock</p>
                    <p>{products.description}</p>
                    <CartButton id={products._id}></CartButton>
                </div>
            </div>
            <SectionTitle heading={'Reviews'}></SectionTitle>

            <div className='flex flex-row gap-5'>
                <div className='text-justify w-6/12'>
                    <div className='flex flex-row gap-3 items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div>
                            <h3>Black Ruiz</h3>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo</p>
                </div>
                <div className='w-6/12 space-y-3'>
                <h3 className='text-Center'>Add A Review</h3>
                <form className='space-y-1' action="">
                    <div className='relative w-full'>
                        <input type="text" className='border py-2 px-1 border-[black] w-full' placeholder='Your Full Name' />
                    </div>
                    <div className='relative w-full '>
                        <input type="text" className='border py-2 px-1 border-[black] w-full'  placeholder='Your Email Address' />
                    </div>
                    <div className='relative w-full '>
                        <input type="text" className='border py-2 px-1 border-[black] w-full'  placeholder='Your Rating' />
                    </div>
                    <div className='relative w-full'>
                        
                        <textarea className='border py-2 px-1 border-[black] w-full'  placeholder='Review'></textarea>
                    </div>
                    <div className='text-right'>
                        <button className='py-2 px-4 bg-orange-400 text-white '>Submit</button>
                    </div>

                </form>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;