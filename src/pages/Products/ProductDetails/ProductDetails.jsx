import React, { useContext, useEffect, useState } from 'react';
import bissaleImg from "../../../assets/img/bigsale/blog_1.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useParams } from 'react-router-dom';
import CartButton from '../../../components/CartButton/CartButton';
import ReactStars from "react-rating-stars-component";
import useAxiousSecure from '../../../hooks/useAxiousSecure';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
const ProductDetails = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const axiousSecure = useAxiousSecure()
    const photo = user?.photoURL
    // console.log(photo);
    const disable = true;
    const { id } = useParams();
    // console.log(id);
    const [products, setProduct] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/productDetails/${id}`)
            .then(res => res.json())
            .then(data =>
                setProduct(data)
                // setLoading(false)

            )
    }, [])
    // console.log(products);
    const ratingChanged = (newRating) => {
        // console.log(newRating);
        setValue('rating', newRating)
    };
    //fetch reviews
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiousSecure.get(`/reviews/${id}`)
            return res.data
        }
    })
    // console.log(reviews);

    //add reviews
    const onSubmit = async (data) => {
        const { name, email, review, rating } = data
        try {
            const reviewInfo = {
                pId: id,
                image: photo,
                name: name,
                email: email,
                review: review,
                rating: rating
            }
            const res = await axiousSecure.post('/reviews', reviewInfo)
            if (res.data.insertedId) {
                refetch()
                alert('Review added success')
            }
        } catch (error) {
            console.log("Something wrong", error);
        }

    }
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-evenly md:ml-20 my-5'>
                <div >
                    <img className='w-[500px] h-[300px] rounded border' src={products?.image} alt="" />
                </div>
                <div className='flex flex-col justify-center md:text-justify mt-5 md:mt-0  space-y-3 '>
                    <h1 className='text-sm md:text-lg font-bold'>{products.name}</h1>
                    <p className='text-xs md:text-sm text-orange-400 font-medium'>Price: ${products.price}</p>
                    <p className='text-xs md:text-base font-medium'>Category:{products.category}</p>
                    <p className='text-xs md:text-base font-medium'>Availability: In Stock</p>
                    <p className='text-xs'>{products.description}</p>
                    <CartButton id={products._id} item={products}></CartButton>
                </div>
            </div>
            <SectionTitle heading={'Reviews'}></SectionTitle>
            <h4 className='text-left mb-2 underline'>Reviews({reviews?.length})</h4>
            <div className='flex flex-col-reverse md:flex-row gap-5'>
                {
                    reviews.length > 0 ?
                        reviews.map((review, index) =>
                            <div key={index} className='text-justify my-4 md:w-6/12'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={review?.image ? review.image : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                                            {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                                        </div>
                                    </div>
                                    <div>
                                        {/* <h3>Black Ruiz</h3> */}
                                        <h3>{review?.name}</h3>
                                        <ReactStars
                                            // count={5}
                                            // onChange={ratingChanged}
                                            value={review?.rating}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                </div>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo</p> */}
                                <p>{review?.review}</p>
                            </div>
                        )
                        :
                        <div className='text-justify md:w-6/12'>
                            <p className='text-lg'>No Reviews Yet</p>
                        </div>
                }

                <div className='md:w-6/12 space-y-4'>
                    <h3 className='text-Center text-xs md:text-sm'>Add A Review</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-1 text-[10px] md:text-sm'>
                        <div className='relative w-full'>
                            <input type="text" {...register("name", { required: "Name is required" })} className='border py-1 px-2 border-[black] w-full' placeholder='Your Full Name' />
                            {errors.name && <p role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className='relative w-full '>
                            <input type="text" {...register("email", { required: "Email Address is required" })} className='border py-1 px-2 border-[black] w-full' placeholder='Your Email Address' />
                            {errors.email && <p role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className='relative w-full'>
                            <textarea {...register("review", { required: "Review is required" })} className='border py-1 px-2 border-[black] w-full' placeholder='Your Review'></textarea>
                            {errors.review && <p role="alert">{errors.review?.message}</p>}
                        </div>
                        <div className='relative w-full '>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                            <input type="text" disabled={disable} {...register("rating", { required: "Rating is required" })} className='border py-1 px-2 border-[black] w-full' placeholder='Your Rating' />
                            {errors.rating && <p role="alert">{errors.rating?.message}</p>}
                        </div>
                        <div className='text-right'>
                            <button type='submit' className='py-2 px-4 text-[10px] md:text-sm bg-orange-400 text-white '>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;