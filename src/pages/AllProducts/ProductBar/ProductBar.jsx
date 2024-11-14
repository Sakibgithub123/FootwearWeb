import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../../../components/CartButton/CartButton';
import { SiBrandfolder } from 'react-icons/si';
import { BiSolidCategory } from 'react-icons/bi';
import useAxiousSecure from '../../../hooks/useAxiousSecure';

const ProductBar = ({ products, noProducts }) => {
    const axiousSecure = useAxiousSecure()
    // const [search, setSearch] = useState(0)
    const [searchTerm, setSearch] = useState('')

    //  serch from database  using it
    // const handleChangeName = async (e) => {
    //     const name = e.target.value
    //    if(name){
    //     const res = await axiousSecure.get(`/search?name=${name}`)
    //     if (res.data.length === 0) {
    //         setSearch([])
    //     } else {
    //         setSearch(res.data)
    //     }
    //    }else{
    //     setSearch([])
    //    }
    // }
    // console.log(search);

    // serch from product value use it
    const handleChangeName = async (e) => {
            const name = e.target.value
            if(name){
                setSearch(name)
            }else{
                setSearch("") 
            }
    }

    const search =useMemo(()=>{
        // const targetName = e.target.value
        const searchPr=products.filter(product=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return searchPr

    },[searchTerm,products])
    return (
        <div>
            <h3 className='bg-gray-500 p-2 w-full'>
                <label className="input input-bordered flex items-center gap-2">
                    <input onChange={handleChangeName} type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </h3>
            {

                products && products.length > 0 ? (
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            (search.length > 0 ? search : products).map((item, index) =>
                                <div key={index} className="max-w-[300px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[300px] dark:bg-[#18181B]">
                                    <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" src={item?.image} alt="card  img" />
                                    <div className="grid gap-2">
                                        <h1 className="text-lg font-semibold ">{item.name}</h1>
                                        <div className='flex flex-row justify-evenly'>
                                            <h1 className="text-lg font-semibold flex flex-row justify-center items-center gap-1"><span><BiSolidCategory /></span><span>{item.category}</span></h1>
                                            <h1 className="text-lg font-semibold flex flex-row justify-center items-center gap-1"><span><SiBrandfolder /></span><span>{item.brand}</span></h1>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-white/60">{item.description}</p>
                                        {/* <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p> */}
                                        <div className="text-lg font-semibold">${item.price}</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <CartButton id={item._id} item={item}></CartButton>
                                        {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base">Add to Cart</button> */}
                                        <Link to={`/productDetails/${item._id}`}>
                                            <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white py-2 duration-300 hover:bg-gray-200">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div className="text-center text-lg font-semibold text-gray-500 dark:text-white/60">
                        {/* {noProducts} */}
                        No Products Available
                    </div>
                )
            }
        </div>
    );
};

export default ProductBar;
