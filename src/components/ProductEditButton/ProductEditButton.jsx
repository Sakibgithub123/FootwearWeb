import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
const ProductEditButton = () => {
    const [openModal, setOpenModal] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
        <div className="mx-auto w-fit">
            <button onClick={() => setOpenModal(true)} className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-1 px-1 rounded-md"><FaEdit /></button>
            <div onClick={() => setOpenModal(false)} className={`fixed z-[100] w-screen ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${openModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                    <svg onClick={() => setOpenModal(false)} className="absolute right-3 top-3 w-6 cursor-pointer fill-zinc-600 dark:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path></svg>
                    <div className="flex justify-center">
                        <div className="w-full max-w-md  rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
                            <div className="mb-6">
                                <h2 className="text-center text-3xl font-semibold tracking-tight">Add New Item</h2>
                                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-left" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        {...register('name', { required: true })}
                                        className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                        id="name"
                                        placeholder="Product Name"
                                        name="name"
                                        type="text"
                                    />
                                    {errors.name?.type === "required" && (<p role="alert">Name is required</p>)}
                                </div>

                                <div className="flex flex-row space-x-2">
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                        <label className="block font-medium text-left" htmlFor="price">
                                            Price
                                        </label>
                                        <input
                                            {...register('price', { required: true })}
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            id="price"
                                            placeholder="Enter Price"
                                            name="price"
                                            type="number"
                                        />
                                        {errors.price?.type === "required" && (<p role="alert">Price is required</p>)}

                                    </div>
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="category">
                                            Category
                                        </label>
                                        <select
                                            {...register('category', { required: true })}
                                            defaultValue="default"
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            id="category"
                                            name="category"
                                        >
                                            <option value="default">Select Category</option>
                                            {
                                                category.map(categories =>
                                                    <option key={categories._id} value="Mens">{categories.category}</option>
                                                )}
                                        </select>
                                        {errors.category?.type === "required" && (<p role="alert">Category is required</p>)}

                                    </div>

                                </div >
                                <div className="flex flex-row space-between space-x-2">
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="color">
                                            Color
                                        </label>
                                        <select
                                            {...register('color', { required: true })}
                                            defaultValue="default"
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            id="color"
                                            name="color"
                                        >
                                            <option value="default">Select color</option>
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
                                        </select>
                                        {errors.color?.type === "required" && (<p role="alert">Color is required</p>)}

                                    </div>
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="brand">
                                            Brand
                                        </label>
                                        <select
                                            {...register('brand', { required: true })}
                                            defaultValue="default"
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            id="brand"
                                            name="brand"
                                        >
                                            <option value="default">Select brand</option>
                                            {
                                                brand.map(brands =>
                                                    <option key={brands._id} value={brands.brand}>{brands.brand}</option>
                                                )}
                                        </select>
                                        {errors.brand?.type === "required" && (<p role="alert">Brand name is required</p>)}
                                    </div>

                                </div>
                                <div className="flex flex-row space-x-2">
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="category">
                                            Type
                                        </label>
                                        <select
                                            {...register('type', { required: true })}
                                            defaultValue="default"
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            id="type"
                                            name="type"
                                        >
                                            <option value="default">Select Type</option>
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
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="category">
                                            Status
                                        </label>
                                        <select
                                            {...register('status', { required: true })}
                                            defaultValue="default"
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            id="status"
                                            name="status"
                                        >
                                            <option value="default">Select Status</option>
                                            <option value="Trending">Trending</option>
                                            <option value="Popular">Popular</option>
                                            <option value="Latest">Latest</option>
                                            <option value="Top Seller">Top Seller</option>
                                        </select>
                                        {errors.status?.type === "required" && (<p role="alert">Status is required</p>)}
                                    </div>

                                </div>
                                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-left" htmlFor="_description">
                                        Description
                                    </label>
                                    <textarea
                                        {...register('description', { required: true })}
                                        className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                        id="_description"
                                        placeholder="About Product..............."
                                        name="description"
                                    />
                                    {errors.description?.type === "required" && (<p role="alert">Description is required</p>)}
                                </div>
                                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-left" htmlFor="image">
                                        Image
                                    </label>
                                    <input type="file" name="image" {...register('image', { required: true })} className="file-input file-input-bordered w-full " />
                                    {errors.image?.type === "required" && (<p role="alert">Image is required</p>)}
                                </div>
                                <button className="rounded-md bg-sky-500 px-3 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Add</button>
                            </form>
                        </div>

                    </div>
                    <div className="flex justify-end gap-2">
                        <button onClick={() => setOpenModal(false)} className="rounded-md bg-emerald-600 px-6 py-[6px] text-white hover:bg-emerald-700">
                            Ok
                        </button>
                        <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEditButton;