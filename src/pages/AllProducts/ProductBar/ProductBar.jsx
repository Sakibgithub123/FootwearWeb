import React from 'react';

const ProductBar = ({ products, noProducts }) => {
    return (
        <div>
            <h3 className='bg-gray-500 p-2 w-full'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
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
                            products.map((item, index) =>
                                <div key={index} className="max-w-[300px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[300px] dark:bg-[#18181B]">
                                    <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" />
                                    <div className="grid gap-2">
                                        <h1 className="text-lg font-semibold ">{item.name}</h1>
                                        <h1 className="text-lg font-semibold ">{item.category}</h1>
                                        <h1 className="text-lg font-semibold ">{item.brand}</h1>
                                        <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
                                        <div className="text-lg font-semibold">$99.99</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base">Add to Cart</button>
                                        <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white py-2 duration-300 hover:bg-gray-200">View Details</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div className="text-center text-lg font-semibold text-gray-500 dark:text-white/60">
                        {noProducts}
                    </div>
                )
            }
        </div>
    );
};

export default ProductBar;
