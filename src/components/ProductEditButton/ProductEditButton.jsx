import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiousPublic from '../../hooks/useAxiousPublic';
import useAxiousSecure from '../../hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import useCategoryBrand from '../../hooks/useCategoryBrand';
const ProductEditButton = ({ id, refetch }) => {
    const { register, handleSubmit, setValue, formState: { errors }, } = useForm()
    const [category, brand] = useCategoryBrand()
    const [editProductData, setEditProductData] = useState('');
    const axiousPublic = useAxiousPublic()
    const axiousSecure = useAxiousSecure()
    useEffect(()=>{
        // console.log(id);
    },[id])


    const handleEdit = async (id) => {
        const res = await axiousSecure.get(`/editProduct/${id}`)
        setEditProductData(res.data)
        const product = res.data
        setValue("name", product.name);
        setValue("price", product.price);
        setValue("category", product.category);
        setValue("color", product.color);
        setValue("brand", product.brand);
        setValue("type", product.type);
        setValue("status", product.status);
        setValue("quantity", product.quantity);
        setValue("description", product.description);
        setValue("image", product.image);

    }

    // console.log(editProductData);
    //edit product
    const imageBBApiKey = import.meta.env.VITE_imageBB_api
    const imageUploadURL = `https://api.imgbb.com/1/upload?key=${imageBBApiKey}`

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiousPublic.post(imageUploadURL, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const productInfo = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                color: data.color,
                brand: data.brand,
                type: data.type,
                status: data.status,
                quantity: data.quantity,
                description: data.description,
                image: res.data.data.display_url,
            }
            const productRes = await axiousSecure.patch(`/editProduct/${id}`, productInfo)
            if (productRes.data.modifiedCount > 0) {
                refetch()
                alert('Product updated successfully');
            }
        }
    }

    return (
        <div>
            <div className="drawer drawer-end">
            <input id={`my-drawer-${id}`} type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <button onClick={() => handleEdit(id)} className="bg-orange-500  hover:scale-110 scale-100 transition-all duration-100 text-white py-1 px-1 rounded-md">
                    <label htmlFor={`my-drawer-${id}`} ><FaEdit /></label>
                </button>
            </div>
            <div className="drawer-side z-10 ">
                <label htmlFor={`my-drawer-${id}`} aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-9/12 max-w-md p-4 overflow-y-auto">
                    {/* Sidebar content here */}
                    <div className="mb-2">
                        <h2 className="text-center text-sm md:text-2xl text-orange-500 font-semibold tracking-tight">Update {editProductData.name}</h2>
                        {/* <p className="text-center text-[10px] md:text-sm text-orange-200 text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p> */}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-1 h-[400px]">
                        <div className="space-y-1 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium text-left" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                type="text"
                                {...register("name", { required: true })}
                            />
                            {errors.name?.type === "required" && (<p role="alert">Name is required</p>)}
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className="space-y-1 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                <label className="block font-medium text-left" htmlFor="price">
                                    Price
                                </label>
                                <input
                                    {...register('price', { required: true })}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    type="number"
                                />
                                {errors.price?.type === "required" && (<p role="alert">Price is required</p>)}
                            </div>
                            <div className="space-y-1 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                <label className="block font-medium text-left" htmlFor="category">
                                    Category
                                </label>
                                <select
                                    {...register('category', { required: true })}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    {
                                        category.map(categories =>
                                            <option key={categories._id} value={categories.category}>{categories.category}</option>
                                        )}
                                </select>
                                {errors.category?.type === "required" && (<p role="alert">Category is required</p>)}
                            </div>
                        </div >
                        <div className="flex flex-row space-between space-x-2">
                            <div className="space-y-1 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                <label className="block font-medium text-left" htmlFor="color">
                                    Color
                                </label>
                                <select
                                    {...register('color', { required: true })}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option value="Red">Red</option>
                                    <option value="Green">Green</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Black">Black</option>
                                    <option value="Ash">Ash</option>
                                    <option value="White">White</option>
                                    <option value="Orange">Orange</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Pink">Pink</option>
                                    <option value="Brown">Brown</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Gray">Gray</option>
                                </select>
                                {errors.color?.type === "required" && (<p role="alert">Color is required</p>)}
                            </div>
                            <div className="space-y-1 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                <label className="block font-medium text-left" htmlFor="brand">
                                    Brand
                                </label>
                                <select
                                    {...register('brand', { required: true })}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    {
                                        brand.map(brands =>
                                            <option key={brands._id} value={brands.brand}>{brands.brand}</option>
                                        )}
                                </select>
                                {errors.brand?.type === "required" && (<p role="alert">Brand name is required</p>)}
                            </div>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className="space-y-1 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                <label className="block font-medium text-left" htmlFor="category">
                                    Type
                                </label>
                                <select
                                    {...register('type', { required: true })}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option value="Running">Running</option>
                                    <option value="Hiking">Hiking</option>
                                    <option value="Sneakers">Sneakers</option>
                                    <option value="Casual">Casual</option>
                                    <option value="Formal">Formal</option>
                                    <option value="Sandals">Sandals</option>
                                    <option value="Skateboarding">Skateboarding</option>
                                    <option value="Basketball">Basketball</option>
                                </select>
                                {errors.type?.type === "required" && (<p role="alert">Type is required</p>)}
                            </div>
                            <div className="space-y-1 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                <label className="block font-medium text-left" htmlFor="category">
                                    Status
                                </label>
                                <select
                                    {...register('status', { required: true })}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option value="Trending">Trending</option>
                                    <option value="Popular">Popular</option>
                                    <option value="Latest">Latest</option>
                                    <option value="Top Seller">Top Seller</option>
                                </select>
                                {errors.status?.type === "required" && (<p role="alert">Status is required</p>)}
                            </div>
                        </div>
                        <div className="space-y-2 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium text-left" htmlFor="price">
                                Available Quantity
                            </label>
                            <input
                                {...register('quantity', { required: true })}
                                className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                placeholder="Enter Quantity"
                                type="number"
                            />
                            {errors.quantity?.type === "required" && (<p role="alert">Quantity is required</p>)}
                        </div>
                        <div className="space-y-1 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium text-left" htmlFor="_description">
                                Description
                            </label>
                            <textarea
                                {...register('description', { required: true })}
                                className="min-h-[70px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            />
                            {errors.description?.type === "required" && (<p role="alert">Description is required</p>)}
                        </div>
                        <div className="space-y-1 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium text-left" htmlFor="image">
                                Image
                            </label>
                            {/* <img src={editProductData.image} width={100} height={100} alt="image" /> */}
                            <input type="file"  {...register('image', { required: true })} className="file-input file-input-bordered h-10 w-full " />
                            {errors.image?.type === "required" && (<p role="alert">Image is required</p>)}
                        </div>
                        <div className='py-1 text-end'>
                            <input type="submit" className="rounded-md text-[10px] md:text-sm bg-orange-500 px-3 py-1  text-white transition-colors hover:bg-orange-300 dark:bg-orange-700" value={'UPDATE'} />
                        </div>
                    </form>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default ProductEditButton;