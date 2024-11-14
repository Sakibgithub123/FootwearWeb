import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiousPublic from "../../../hooks/useAxiousPublic";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import ProductEditButton from "../../../components/ProductEditButton/ProductEditButton";
import useCategoryBrand from "../../../hooks/useCategoryBrand";
import useAllProducts from "../../../hooks/useAllProducts";

const Additems = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiousPublic = useAxiousPublic()
    const axiousSecure = useAxiousSecure()
    const [category, brand] = useCategoryBrand()
    const [products, refetch] = useAllProducts()
    // console.log(products);
    //pagination
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 5; // Adjust the page numbers the way you want
    // Calculate the total number of pages
     const totalPages=Math.ceil(products.length/itemsPerPage)
// Get the products to display on the current page
     const paginatedProducts=products.slice(pageNumber*itemsPerPage,(pageNumber+1)*itemsPerPage)
    const updatePageNumber = (num) => {
        if (num >=0 && num<totalPages) {
            setPageNumber(num);
        }
        
    };


    //end pagination


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
            const itemRes = await axiousSecure.post('/addItem', productInfo)
            if (itemRes.data.insertedId) {
                refetch()
                alert('Add Product success')
            }
        }
        console.log('with image url', res.data);
    }

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
            <SectionTitle heading={'Add Items'}></SectionTitle>
            <div className="flex justify-center mb-6 bg-base-200 p-4 ml-3">
                <div className="w-full max-w-3xl  rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
                    <div className="mb-6">
                        <h2 className="text-center text-3xl font-semibold tracking-tight text-orange-300">Add New Product</h2>
                        {/* <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p> */}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                        <div className="flex justify-between">
                            <div className="space-y-2">
                                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-left" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        {...register('name', { required: true })}
                                        className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                        placeholder="Product Name"
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
                                            placeholder="Enter Price"
                                            type="number"
                                        />
                                        {errors.price?.type === "required" && (<p role="alert">Price is required</p>)}

                                    </div>
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="category">
                                            Category
                                        </label>
                                        <select
                                            {...register('category', { required: true, validate: value => value !== 'default' || "Please select a category" })}
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            defaultValue='default'
                                        >
                                            <option disabled value='default'>Select Category</option>
                                            {
                                                category.map(categories =>
                                                    <option key={categories._id} value="Mens">{categories.category}</option>
                                                )}
                                        </select>
                                        {errors.category && (<p role="alert">{errors.category.message}</p>)}

                                    </div>

                                </div >
                                <div className="flex flex-row space-between space-x-2">
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="color">
                                            Color
                                        </label>
                                        <select
                                            {...register('color', { required: true, validate: value => value !== 'default' || "Please select a color" })}
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            id="color"
                                            name="color"
                                            defaultValue='default'
                                        >
                                            <option disabled value={'default'}>Select color</option>
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
                                        {errors.color && (<p role="alert">{errors.color.message}</p>)}

                                    </div>
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="brand">
                                            Brand
                                        </label>
                                        <select
                                            {...register('brand', { required: true, validate: value => value !== 'default' || "Please select a brand" })}
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            defaultValue={'default'}
                                        >
                                            <option disabled value={'default'}>Select brand</option>
                                            {
                                                brand.map(brands =>
                                                    <option key={brands._id} value={brands.brand}>{brands.brand}</option>
                                                )}
                                        </select>
                                        {errors.brand && (<p role="alert">{errors.brand.message}</p>)}
                                    </div>

                                </div>
                                <div className="flex flex-row space-x-2">
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="category">
                                            Type
                                        </label>
                                        <select
                                            {...register('type', { required: true, validate: value => value !== 'default' || "Please select a type" })}
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            defaultValue={'default'}
                                        >
                                            <option disabled value={'default'}>Select Type</option>
                                            <option value="Running">Running</option>
                                            <option value="Hiking">Hiking</option>
                                            <option value="Sneakers">Sneakers</option>
                                            <option value="Casual">Casual</option>
                                            <option value="Formal">Formal</option>
                                            <option value="Sandals">Sandals</option>
                                            <option value="Skateboarding">Skateboarding</option>
                                            <option value="Basketball">Basketball</option>
                                        </select>
                                        {errors.type && (<p role="alert">{errors.type.message}</p>)}
                                    </div>
                                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400 flex-1">
                                        <label className="block font-medium text-left" htmlFor="category">
                                            Status
                                        </label>
                                        <select
                                            {...register('status', { required: true, validate: value => value !== 'default' || "Please select a status" })}
                                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                            defaultValue={'default'}
                                        >
                                            <option disabled value={'default'}>Select Status</option>
                                            <option value="Trending">Trending</option>
                                            <option value="Popular">Popular</option>
                                            <option value="Latest">Latest</option>
                                            <option value="Top Seller">Top Seller</option>
                                        </select>
                                        {errors.status && (<p role="alert">{errors.status.message}</p>)}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                    <label className="block font-medium text-left" htmlFor="price">
                                        Available Quantity
                                    </label>
                                    <input
                                        {...register('quantity', { required: true })}
                                        className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                        placeholder="Enter Quantity"
                                        type="number"
                                    />
                                    {errors.quantity?.type === "required" && (<p role="alert">Quantity is required</p>)}
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
                            </div>
                        </div>
                        <div className="text-end mt-5">
                            <button className="rounded-md bg-orange-500 px-3 py-2 text-white transition-colors hover:bg-orange-300 dark:bg-orange-700">ADD</button>
                        </div>
                    </form>
                </div>

            </div>
            {/* table  */}

            <div className="overflow-x-scroll ml-3 bg-base-200 p-4 mt-4">
                <h1 className='text-left text-stone-950 p-2 text-2xl font-bold border border-b-base-200 border-t-0'>All Products List</h1>
                {/* <table className="max-w-[90%]shadow-md border mx-auto border-gray-100 my-6"> */}
                <table className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg shadow-md border mx-auto border-gray-100 my-6 table table-zebra">
                    <thead>
                        <tr className="bg-orange-400 text-white">
                            <th className="py-2 px-3 text-sm  border-b">IMAGE</th>
                            <th className="py-2 px-3 text-sm  border-b">NAME</th>
                            <th className="py-2 px-3 text-sm  border-b">PRICE</th>
                            <th className="py-2 px-3 text-sm  border-b">CATEGORY</th>
                            <th className="py-2 px-3 text-sm  border-b">COLOR</th>
                            <th className="py-2 px-3 text-sm  border-b">BRAND</th>
                            <th className="py-2 px-3 text-sm  border-b">TYPE</th>
                            <th className="py-2 px-3 text-sm  border-b">STATUS</th>
                            <th className="py-2 px-3 text-sm  border-b">DESCRIPTION</th>
                            <th className="py-2 px-3 text-sm border-b text-end">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginatedProducts.map((product) =>
                                <tr key={product._id} className="hover:bg-gray-50 border-b transition duration-300">
                                    <td className="py-3 px-3 border-b border-orange-400">
                                        <img src={product.image} alt="image" className="h-12 w-12 object-cover bg-gray-300 rounded" />
                                    </td>
                                    <td className="py-2 px-3 border-b border-orange-400 text-xs font-semibold">{product.name}</td>
                                    <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">${product.price}</td>
                                    <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">{product.category}</td>
                                    <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">{product.color}</td>
                                    <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">{product.brand}</td>
                                    <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">{product.type}</td>
                                    <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">{product.status}</td>
                                    <td className="py-2 px-3 border-b border-orange-400 text-xs font-extralight">{product.description}</td>
                                    <td className="flex  flex-col space-y-2 mt-1  items-center py-2 px-3 border-b border-orange-400 text-sm font-extralight">
                                        <ProductEditButton id={product._id} refetch={refetch} />
                                        <div className="drawer-content">
                                            <button onClick={() => handleDelete(product._id, product.name)}
                                                className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-1 px-1 rounded-md"><MdDeleteForever /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {/* //pagination
            <div className="mx-auto mt-5 flex w-fit select-none items-center justify-center divide-x divide-zinc-500 overflow-hidden rounded-sm border border-zinc-500 bg-white dark:bg-gray-700">
                
                <button
                    disabled={pageNumber === 0}
                    onClick={() => {
                        updatePageNumber(pageNumber - 1);
                    }}
                    className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white "
                >
                    Previous
                </button>
                <div className="flex items-center justify-center divide-x divide-zinc-500">
                    {[...Array(totalPages).keys()].map((item, index) => (
                        <div
                        key={index}
                            onClick={() => {
                                updatePageNumber(index);
                            }}
                            className={`cursor-pointer px-4 text-sm  transition-all duration-200 ${pageNumber === index ? 'bg-zinc-500 text-white' : 'hover:bg-gray-500/20'}  py-[8px] font-semibold`}
                            
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
               
                <button
                    disabled={pageNumber === totalPages - 1}
                    onClick={() => {
                        updatePageNumber(pageNumber + 1);
                    }}
                    className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white"
                >
                    Next
                </button>
            </div> */}

            {/* pagination2  */}
               {/* Pagination controls */}
        <div className="mx-auto mt-5 flex w-fit select-none items-center justify-center divide-x divide-zinc-500 overflow-hidden rounded-sm border border-zinc-500 bg-white dark:bg-gray-700">
            {/* Previous button */}
            <button
                disabled={pageNumber === 0}
                onClick={() => updatePageNumber(pageNumber - 1)}
                className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white"
            >
                Previous
            </button>

            {/* Page number buttons */}
            <div className="flex items-center justify-center divide-x divide-zinc-500">
                {Array.from({ length: 6 }).map((_, index) => {
                    const page = pageNumber + index;
                    if (page < totalPages) {
                        return (
                            <div
                                key={page}
                                onClick={() => updatePageNumber(page)}
                                className={`cursor-pointer px-4 text-sm transition-all duration-200 ${
                                    pageNumber === page ? 'bg-zinc-500 text-white' : 'hover:bg-gray-500/20'
                                } py-[8px] font-semibold`}
                            >
                                {page + 1}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            {/* Next button */}
            <button
                disabled={pageNumber === totalPages - 1}
                onClick={() => updatePageNumber(pageNumber + 1)}
                className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white"
            >
                Next
            </button>
        </div>
        </div>
    );
};

export default Additems;