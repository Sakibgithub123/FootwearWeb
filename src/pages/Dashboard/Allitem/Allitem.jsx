import React, { useState } from 'react';
import useAllProducts from '../../../hooks/useAllProducts';
import { MdDeleteForever } from "react-icons/md";
import useAxiousSecure from '../../../hooks/useAxiousSecure';
import ProductEditButton from '../../../components/ProductEditButton/ProductEditButton';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";
import { MdOutlineDateRange } from "react-icons/md";
import useCategoryBrand from '../../../hooks/useCategoryBrand';
const Allitem = () => {
    const [products, refetch] = useAllProducts()
    const [filterProducts, setFilterProducts] = useState(0)
    const axiousSecure = useAxiousSecure()
    const [category, brand] = useCategoryBrand()
    // console.log(category, brand);
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: {
                name: "",
                minprice: "",
                maxprice: "",
                category: "",  // Set default to empty so "Select Type" is not a valid selection
                type: "",
                status: "",
                brand: "",
                color: "",
            }
        },
    );
    //filters
    const onSubmit = async (data) => {
        console.log(data);
        const { name, minprice, maxprice, category, brand, color, type, status } = data;
        // Define only parameters with truthy values
        const queryParams = {};
        if (name) queryParams.name = name;
        if (minprice) queryParams.minprice = minprice;
        if (maxprice) queryParams.maxprice = maxprice;
        if (category) queryParams.category = category;
        if (type) queryParams.type = type;
        if (status) queryParams.status = status;
        if (brand) queryParams.brand = brand;
        if (color) queryParams.color = color;
        try {
            const response = await axiousSecure(`/filter?name=${name}&minprice=${minprice}&maxprice=${maxprice}&category=${category}&type=${type}&status=${status}&brand=${brand}&color=${color}`

            );
            console.log(response.data);
            // setFilterProducts(response.data);
            if (response.data.length === 0) {
                setFilterProducts([]); // Set to empty array if no results
            } else {
                setFilterProducts(response.data); // Store the filtered products
            } // Store the filtered products in state
        } catch (error) {
            console.error("Error fetching filtered products:", error);
        }
    };


    // console.log(filterProducts);

    // console.log(products);
    const handleDelete = (id, name) => {
        axiousSecure.delete(`/product/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    alert('delete product success')
                }
            })
    }
    return (
        <div>
            <SectionTitle heading={'All Items'}></SectionTitle>
            <div>
                <div className="mb-6 bg-base-200 p-4 ml-3">
                    <h2 className="text-center text-3xl font-semibold tracking-tight text-orange-300 mb-1">Filter Products</h2>
                    {/* <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mb-4">We&apos;d love to hear from you!</p> */}
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                        <div className='flex flex-row space-x-4 justify-center'>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    placeholder="Filter By Name"
                                    {...register('name')}
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="name">
                                    Price
                                </label>
                                <div className="h-10 w-full flex flex-row bg-white  items-center rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700">
                                    <input
                                        className='border-0 outline-0'
                                        placeholder="Filter By MinPrice"
                                        {...register('minprice')}
                                        type="text"
                                    />
                                    <MdOutlineDateRange />
                                    <input
                                        className='border-0 outline-0 pl-10'
                                        placeholder="Filter By MaxPrice"
                                        {...register('maxprice')}
                                        type="text"
                                    />

                                </div>
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="_email">
                                    Category
                                </label>
                                <select
                                    {...register('category')}
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option disabled value="" >Filter By Category</option>
                                    {
                                        category.map((item, index) =>
                                            <option key={index} value={item.category}>{item.category}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-4 justify-center'>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 ">
                                <label className="block font-medium " htmlFor="category">
                                    Type
                                </label>
                                <select
                                    {...register('type')}
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option disabled value="">Filter By Type</option>
                                    <option value="Running">Running</option>
                                    <option value="Hiking">Hiking</option>
                                    <option value="Sneakers">Sneakers</option>
                                    <option value="Casual">Casual</option>
                                    <option value="Formal">Formal</option>
                                    <option value="Sandals">Sandals</option>
                                    <option value="Skateboarding">Skateboarding</option>
                                    <option value="Basketball">Basketball</option>
                                </select>

                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 ">
                                <label className="block font-medium " htmlFor="category">
                                    Status
                                </label>
                                <select
                                    {...register('status')}
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option disabled value="" >Filter By Status</option>
                                    <option value="Trending">Trending</option>
                                    <option value="Popular">Popular</option>
                                    <option value="Latest">Latest</option>
                                    <option value="Top Seller">Top Seller</option>
                                </select>
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="_email">
                                    Brand
                                </label>
                                <select
                                    {...register('brand')}
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option disabled value="" >Filter By Brand</option>
                                    {
                                        brand.map((item, index) =>
                                            <option key={index} value={item.brand}>{item.brand}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 ">
                                <label className="block font-medium " htmlFor="color">
                                    Color
                                </label>
                                <select
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    id="color"
                                    {...register('color')}
                                >
                                    <option disabled value="">Filter By Color</option>
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
                            </div>
                        </div>
                        <button className="rounded-md bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-300 dark:bg-orange-700">Filter</button>
                    </form>
                </div>
            </div>
            <div className="overflow-x-auto bg-base-200 p-4 mt-4 ml-3">
                <h1 className='text-left text-stone-950 p-2 text-2xl font-bold border   border-b-base-200 border-t-0'>All Items List</h1>
                {/* <table className="max-w-[90%]shadow-md border mx-auto border-gray-100 my-6"> */}
                <table className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg shadow-md border mx-auto border-gray-100 my-6 table table-zebra">
                    <thead>
                        <tr className="bg-orange-400  text-white">
                            <th className="py-2 px-3  text-sm  border-b  text-sm">#</th>
                            <th className="py-2 px-3  text-sm  border-b text-sm">NAME</th>
                            <th className="py-2 px-3  text-sm  border-b">IMAGE</th>
                            <th className="py-2 px-3  text-sm  border-b text-sm">PRICE</th>
                            <th className="py-2 px-3  text-sm  border-b text-sm">QUANTITY</th>
                            <th className="py-2 px-3  text-sm  border-b text-sm text-end">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Show "No products available" if the products array is empty and filterProducts is also empty
                            (products.length === 0) ? (
                                <tr>
                                    <td colSpan="5" className="py-2 px-3 text-center">No products available</td>
                                </tr>
                            ) : (
                                // If the filterProducts array is empty, show "No products found for the filter"
                                filterProducts.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="py-2 px-3 text-center">No products found for the filter</td>
                                    </tr>
                                ) : (
                                    // If there are products in either array, display them
                                    (filterProducts.length > 0 ? filterProducts : products).map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition duration-300">
                                            <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">{index + 1}</td>
                                            <td className="py-2 px-3 border-b border-orange-400 text-xs font-semibold">{item.name}</td>
                                            <td className="py-2 px-3 border-b border-orange-400">
                                                <img src={item.image} alt="image" className="h-12 w-12 object-cover bg-gray-300 rounded" />
                                            </td>
                                            <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">${item.price}</td>
                                            <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">{item.quantity}</td>
                                            <td className="py-2 px-3 border-b border-orange-400 text-xs space-y-2 text-end">
                                                <ProductEditButton id={item._id} refetch={refetch} />
                                                <button
                                                    onClick={() => handleDelete(item._id, item.name)}
                                                    className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-1 px-1 rounded-md">
                                                    <MdDeleteForever />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Allitem;