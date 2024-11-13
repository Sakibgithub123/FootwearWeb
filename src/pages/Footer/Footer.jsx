import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex flex-col text-black mt-20">

            <div className="flex flex-col items-center justify-around gap-5 bg-gray-300 py-8 dark:bg-gray-500 dark:text-white md:flex-row md:gap-0">
                <div className='text-left'>
                    <h5 className="text-2xl font-bold text-orange-400">FootWear</h5>
                    <div className='flex gap-10'>
                        {/* <h5 className="text-lg font-bold text-left text-orange-400">Services</h5> */}
                        <nav className='flex flex-col text-left spacey-2 my-5'>
                            <a className="link link-hover text-red-700 hover:text-orange-400">Branding</a>
                            <a className="link link-hover text-red-700 hover:text-orange-400">Design</a>
                            <a className="link link-hover text-red-700 hover:text-orange-400">Marketing</a>
                            <a className="link link-hover text-red-700 hover:text-orange-400">Advertisement</a>
                        </nav>
                        <nav className='flex flex-col text-left spacey-2 my-5'>
                            <a className="link link-hover text-red-700 hover:text-orange-400">Terms of use</a>
                            <a className="link link-hover text-red-700 hover:text-orange-400">Privacy policy</a>
                            <a className="link link-hover text-red-700 hover:text-orange-400">Cookie policy</a>
                        </nav>
                    </div>
                </div>
                <div className='mt-2 flex flex-col items-center justify-center'>
                    <h3 className='text-center  text-xl text-orange-800 font-semibold indent-1'>FootWear Provides You Best Services Ever</h3>
                    <ul className="flex h-full items-center justify-center gap-5 py-6">
                        <li className="text-white link link-hover"><NavLink className='rounded py-2 px-2 bg-red-700 text-white-800' to={'/'}>Home</NavLink></li>
                        <li className="text-white link link-hover"><NavLink className='rounded py-2 px-2 bg-red-700 text-white-800' to={'/shop'}>Shop</NavLink></li>
                        <li className="text-white link link-hover"><NavLink className='rounded py-2 px-2 bg-red-700 text-white-800' to={'/cart'}>Cart</NavLink></li>
                        <li className="text-white link link-hover"><NavLink className='rounded py-2 px-2 bg-red-700 text-white-800' to={'/aboutUs'}>About Us</NavLink></li>
                        <li className="text-white link link-hover"><NavLink className='rounded py-2 px-2 bg-red-700 text-white-800' to={'/contact'}>Contact</NavLink></li>
                    </ul>
                    <div className='flex items-center'>
                        <input type="text" placeholder="Subscribe Us" className="input input-bordered border-red-700 bg-orange-100 text-black w-full " />
                        <button className='rounded py-2 px-2 bg-red-700 text-white mx-3 hover:bg-orange-400'>Subscribe</button>
                    </div>
                </div>

                <nav className="text-lg">

                    <ul className=" flex h-full items-center justify-center gap-5">

                        <li className="cursor-pointer">

                            <a>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">

                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>

                                </svg>

                            </a>

                        </li>

                        <li className="cursor-pointer">

                            <a>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">

                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>

                                </svg>

                            </a>

                        </li>

                        <li className="cursor-pointer">

                            <a>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">

                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>

                                </svg>

                            </a>

                        </li>

                    </ul>

                </nav>

            </div>

            <aside className="bg-gray-500 py-5 text-center text-sm text-white dark:bg-gray-800">

                <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>

            </aside>

        </footer>
    );
};

export default Footer;