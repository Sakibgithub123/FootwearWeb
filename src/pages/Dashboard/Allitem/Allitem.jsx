import React, { useState } from 'react';
import useAllProducts from '../../../hooks/useAllProducts';
import { MdDeleteForever } from "react-icons/md";
import useAxiousSecure from '../../../hooks/useAxiousSecure';
import ProductEditButton from '../../../components/ProductEditButton/ProductEditButton';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";
import { MdOutlineDateRange } from "react-icons/md";
import useCategoryBrand from '../../../hooks/useCategoryBrand';
import Pagination from '../../../components/Pagination/Pagination';
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
    //pagination
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 6; // Adjust the page numbers the way you want
    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / itemsPerPage)
    // Get the products to display on the current page
    const allProducts = products.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
    const updatePageNumber = (num) => {
        if (num >= 0 && num < totalPages) {
            setPageNumber(num);
        }

    };
    //end pagination
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
    const [isTableCellOpen, setIsTableCellOpen] = useState(null);

    const toggleTable = (index) => {
        if (isTableCellOpen === index) {
            // If the same index is clicked, close it
            setIsTableCellOpen(null);
        } else {
            // Otherwise, open the clicked index
            setIsTableCellOpen(index);
        }

    };
    return (
        <div>
            <SectionTitle heading={'All Items'}></SectionTitle>
            <div>
                <div className="mb-6 bg-base-200 p-2 md:p-4 ml-3">
                    <h2 className="text-center text-sm md:text-2xl font-semibold tracking-tight text-orange-300 mb-1">Filter Products</h2>
                    {/* <p className="text-center text-[10px] md:text-sm text-zinc-500 dark:text-zinc-400 mb-4">We&apos;d love to hear from you!</p> */}
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                        <div className='flex flex-col md:flex-row md:space-x-4 space-y-2 justify-center'>
                            <div className="space-y-2 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    placeholder="Filter By Name"
                                    {...register('name')}
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="name">
                                    Price
                                </label>
                                <div className="h-10 md:w-full flex justify-between flex-row bg-white  items-center rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700">
                                    <input
                                        className='border-0 outline-0 w-5/12'
                                        placeholder="Filter By MinPrice"
                                        {...register('minprice')}
                                        type="text"
                                    />
                                    <MdOutlineDateRange className='w-2/12' />
                                    <input
                                        className='border-0 outline-0 md:pl-10 w-5/12'
                                        placeholder="Filter By MaxPrice"
                                        {...register('maxprice')}
                                        type="text"
                                    />

                                </div>
                            </div>
                            <div className="space-y-2 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="category">
                                    Category
                                </label>
                                <select
                                    {...register('category')}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
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
                        <div className='flex flex-col md:flex-row md:space-x-4 space-y-2 justify-center'>
                            <div className="space-y-2 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400 ">
                                <label className="block font-medium " htmlFor="type">
                                    Type
                                </label>
                                <select
                                    {...register('type')}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
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
                            <div className="space-y-2 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400 ">
                                <label className="block font-medium " htmlFor="status">
                                    Status
                                </label>
                                <select
                                    {...register('status')}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option disabled value="" >Filter By Status</option>
                                    <option value="Trending">Trending</option>
                                    <option value="Popular">Popular</option>
                                    <option value="Latest">Latest</option>
                                    <option value="Top Seller">Top Seller</option>
                                </select>
                            </div>
                            <div className="space-y-2 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="_email">
                                    Brand
                                </label>
                                <select
                                    {...register('brand')}
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option disabled value="" >Filter By Brand</option>
                                    {
                                        brand.map((item, index) =>
                                            <option key={index} value={item.brand}>{item.brand}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="space-y-2 text-[10px] md:text-sm text-zinc-700 dark:text-zinc-400 ">
                                <label className="block font-medium " htmlFor="color">
                                    Color
                                </label>
                                <select
                                    className="h-10 w-full rounded border px-3 py-2 text-[10px] md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
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
                        <button className="rounded-md text-[10px] md:text-sm bg-orange-500 px-4 py-2 mb-4 text-white transition-colors hover:bg-orange-300 dark:bg-orange-700">Filter</button>
                    </form>
                </div>
            </div>
            <div className="overflow-x-auto bg-base-200 md:p-4 mt-4 ml-3">
                <h1 className='text-left text-stone-950 p-2 text-sm md:text-2xl font-bold border   border-b-base-200 border-t-0'>All Items List</h1>
                {/* <table className="max-w-[90%]shadow-md border mx-auto border-gray-100 my-6"> */}
                <table className="w-full max-w-screen-md shadow-md border mx-auto border-gray-100 my-6 md:table">
                    <thead>
                        <tr className="bg-orange-400  text-white ">
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm ">#</th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm">NAME</th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm">IMAGE</th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm hidden md:table-cell">PRICE</th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm hidden md:table-cell">QUANTITY</th>
                            <th className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm text-end">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Show "No products available" if the products array is empty and filterProducts is also empty
                            (allProducts.length === 0) ? (
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
                                    (filterProducts.length > 0 ? filterProducts : allProducts).map((item, index) => (
                                        <>
                                            <tr key={index} className="hover:bg-gray-50 transition duration-300">
                                                <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm ">
                                                    <button onClick={() => toggleTable(index)} className='font-bold p-1 text-stone-950 rounded-full mr-1 md:hidden'>{isTableCellOpen === index ? '-' : '+'}</button>
                                                    {index + 1}
                                                </td>
                                                <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm">{item.name}</td>
                                                <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm">
                                                    <img src={item.image} alt="image" className="h-6 w-6 md:h-12 md:w-12 object-cover bg-gray-300 rounded" />
                                                </td>
                                                <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm hidden md:table-cell">${item.price}</td>
                                                <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm hidden md:table-cell text-center">{item.quantity}</td>
                                                <td className="px-2 md:py-2 md:px-3  text-[10px] md:text-sm space-y-2 text-end">
                                                    <ProductEditButton id={item._id} refetch={refetch} />
                                                    <button
                                                        onClick={() => handleDelete(item._id, item.name)}
                                                        className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-1 px-1 rounded-md">
                                                        <MdDeleteForever />
                                                    </button>
                                                </td>
                                            </tr>
                                            {
                                                isTableCellOpen === index && (
                                                    <tr className='bg-white md:hidden'>
                                                        <td colSpan={11}>
                                                            <div className="grid grid-cols-2 gap-4 p-4">
                                                                <div className='text-xs'>
                                                                    <span className="font-medium">PRICE:</span> {item.price}
                                                                </div>
                                                                <div className='text-xs'>
                                                                    <span className="font-medium">QUANTITY:</span> {item.quantity}
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </>
                                    ))
                                )
                            )
                        }
                    </tbody>

                </table>
            </div>
            <Pagination pageNumber={pageNumber} totalPages={totalPages} setPageNumber={setPageNumber} />
        </div>
    );
};

export default Allitem;