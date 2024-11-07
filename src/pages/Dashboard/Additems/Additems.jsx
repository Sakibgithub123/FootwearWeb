import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiousPublic from "../../../hooks/useAxiousPublic";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import ProductEditButton from "../../../components/ProductEditButton/ProductEditButton";

const Additems = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const axiousPublic = useAxiousPublic()
    const axiousSecure = useAxiousSecure()

    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await axiousPublic.get('/getCategoryBrand')
            const data = res.data
            const [categoryData, brandData] = data
            setCategory(categoryData)
            setBrand(brandData)

        }

        fetchData()

    }, [])

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
                description: data.description,
                image: res.data.data.display_url,

            }
            const itemRes = await axiousSecure.post('/addItem', productInfo)
            if (itemRes.data.insertedId) {
                alert('Add Product success')
            }
        }
        console.log('with image url', res.data);
    }

    const { data: products = [],refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiousSecure.get('/products')
            return res.data
        }
    })
    console.log(products);
    const handleDelete=(id,name)=>{
        axiousSecure.delete(`/product/${id}`)
        .then(res=>{
            if(res.data.deletedCount > 0){
                refetch()
                alert('delete product success')
            }
        })
    }
    return (
        <div>
            <SectionTitle heading={'Add Items'}></SectionTitle>
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
            {/* table  */}

            <div className="overflow-x-scroll">
                {/* <table className="max-w-[90%]shadow-md border mx-auto border-gray-100 my-6"> */}
                <table className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#0095FF] text-white">
                            <th className="py-2 px-3 text-sm text-left border-b">Image</th>
                            <th className="py-2 px-3 text-sm text-left border-b">Name</th>
                            <th className="py-2 px-3 text-sm text-left border-b">Price</th>
                            <th className="py-2 px-3 text-sm text-left border-b">category</th>
                            <th className="py-2 px-3 text-sm text-left border-b">color</th>
                            <th className="py-2 px-3 text-sm text-left border-b">brand</th>
                            <th className="py-2 px-3 text-sm text-left border-b">type</th>
                            <th className="py-2 px-3 text-sm text-left border-b">status</th>
                            <th className="py-2 px-3 text-sm text-left border-b">description</th>
                            <th className="py-2 px-3 text-sm border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,index) => 
                                <tr key={index} className="hover:bg-gray-50 border-b transition duration-300">
                                    <td className="py-4 px-3 flex justify-start">
                                        <img src={product.image} alt="image" className="h-16 w-16 object-cover bg-gray-300" />
                                    </td>
                                    <td className="py-2 px-3  border-b text-sm font-medium">{product.name}</td>
                                    <td className="py-2 px-3  border-b text-sm font-medium">${product.price}</td>
                                    <td className="py-2 px-3  border-b text-sm font-medium">{product.category}</td>
                                    <td className="py-2 px-3  border-b text-sm font-medium">{product.color}</td>
                                    <td className="py-2 px-3  border-b text-sm font-medium">{product.brand}</td>
                                    <td className="py-2 px-3  border-b text-sm font-medium">{product.type}</td>
                                    <td className="py-2 px-3  border-b text-sm font-medium">{product.status}</td>
                                    <td className="py-2 px-3  border-b text-sm font-medium">{product.description}</td>
                                    <td className=" flex gap-1 justify-center items-center">
                                      <ProductEditButton></ProductEditButton>
                                        <button onClick={()=>handleDelete(product._id,product.name)} className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-1 px-1 rounded-md"><MdDeleteForever /></button>
                                       
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Additems;