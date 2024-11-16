import React from 'react';
import { AiFillAccountBook } from "react-icons/ai";
import { AiFillCalculator } from "react-icons/ai";
import { GiHappySkull } from "react-icons/gi";
import { AiFillBank } from "react-icons/ai";
import { TbMan } from "react-icons/tb";
import { IoCartSharp } from 'react-icons/io5';
import { LuPercent } from 'react-icons/lu';
import { FaCalculator, FaStar } from 'react-icons/fa';
import { MdAutoGraph, MdCalculate, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { BiCalculator } from 'react-icons/bi';
const AdninDashboard = () => {
    return (
        <div>
            {/* <h1>admin dashboard</h1> */}
            <div className='flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 ml-3'>
                <div className='flex flex-row gap-2  items-center bg-emerald-100 w-full md:w-3/12  p-3 rounded-lg  border border-green-400'>
                    <AiFillAccountBook className='text-emerald-400 text-4xl' />
                    <div className='text-emerald-950 text-left'>
                        <h3 className='text-sm md:text-lg'>Revenue</h3>
                        <p className='text-xs'>$ 2344</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2  items-center bg-rose-100 w-full md:w-3/12 p-3 rounded-lg  border border-rose-400'>
                    <AiFillCalculator className='text-rose-400 text-4xl' />
                    <div className='text-rose-950 text-left'>
                        <h3 className='text-sm md:text-lg'>Expense</h3>
                        <p className='text-xs'>$ 2344</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2  items-center bg-amber-100 border border-amber-400  p-3 rounded-lg w-full md:w-3/12 border border-amber-400' >
                    <GiHappySkull className='text-amber-400 text-4xl' />
                    <div className='text-amber-950 text-left'>
                        <h3 className='text-sm md:text-lg'>Happy Clients</h3>
                        <p className='text-xs'>$ 2344</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2  items-center bg-cyan-100  p-3 rounded-lg w-full md:w-3/12 border border-cyan-400'>
                    <AiFillBank className='text-cyan-400 text-4xl' />
                    <div className='text-cyan-950 text-left'>
                        <h3 className='text-sm md:text-lg'>New StoreOpen</h3>
                        <p className='text-xs'>$ 2344</p>
                    </div>
                </div>
            </div>
            {/* // tab */}
            <div role="tablist" className="tabs tabs-lifted my-10 ml-3 text-violet-400">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-stone-600" aria-label="Today" />
                <div role="tabpanel" className="tab-content bg-xs-400 border-orange-400  rounded-box p-6">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-3 my-3'>
                        <div className='flex flex-row p-4 justify-between  bg-xs-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Customers</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <TbMan className='text-4xl text-right text-indigo-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Orders Total</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <IoCartSharp className='text-4xl text-right text-cyan-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Avg Sale</h3>
                                <p className='text-stone-950 text-xs'>$1,234</p>
                            </div>
                            <LuPercent className='text-4xl text-right text-pink-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Avg Item Sale</h3>
                                <p className='text-stone-950 text-xs'>$1,234</p>
                            </div>
                            <BiCalculator className='text-4xl text-right text-orange-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Avg Total Sale</h3>
                                <p className='text-stone-950 text-xs'>$1,234</p>
                            </div>
                            <MdCalculate className='text-4xl text-right text-lime-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Visitors</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <HiMiniUserGroup className='text-4xl text-right text-green-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Total Products</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <MdOutlineProductionQuantityLimits className='text-4xl text-right text-emerald-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>TopSellingItem</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <FaStar className='text-4xl text-right text-yellow-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-teal-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>DellerShip</h3>
                                <p className='text-stone-950 sky-sm'>1,234</p>
                            </div>
                            <MdAutoGraph className='text-4xl text-right text-amber-400' />
                        </div>
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-stone-600"
                    aria-label="Week"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-xs-100 border-orange-400 rounded-box p-6">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-3 my-3'>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Customers</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <TbMan className='text-4xl text-right text-indigo-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Order</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <IoCartSharp className='text-4xl text-right text-cyan-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Avg Sale</h3>
                                <p className='text-stone-950 text-xs'>$1,234</p>
                            </div>
                            <LuPercent className='text-4xl text-right text-pink-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Avg Item Sale</h3>
                                <p className='text-stone-950 text-xs'>$1,234</p>
                            </div>
                            <BiCalculator className='text-4xl text-right text-orange-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Avg Total Sale</h3>
                                <p className='text-stone-950 text-xs'>$1,234</p>
                            </div>
                            <MdCalculate className='text-4xl text-right text-lime-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Visitors</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <HiMiniUserGroup className='text-4xl text-right text-green-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Total Products</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <MdOutlineProductionQuantityLimits className='text-4xl text-right text-emerald-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Top Selling Item</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <FaStar className='text-4xl text-right text-yellow-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-teal-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>DellerShip</h3>
                                <p className='text-stone-950 sky-sm'>1,234</p>
                            </div>
                            <MdAutoGraph className='text-4xl text-right text-amber-400' />
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-stone-600" aria-label="Month" />
                <div role="tabpanel" className="tab-content bg-xs-100 border-orange-400 rounded-box p-6">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-3 my-3'>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Customers</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <TbMan className='text-4xl text-right text-indigo-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Order</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <IoCartSharp className='text-4xl text-right text-cyan-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Avg Sale</h3>
                                <p className='text-stone-950 text-xs'>$1,234</p>
                            </div>
                            <LuPercent className='text-4xl text-right text-pink-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Avg Item Sale</h3>
                                <p className='text-stone-950 text-xs'>$1,234</p>
                            </div>
                            <BiCalculator className='text-4xl text-right text-orange-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Avg Total Sale</h3>
                                <p className='text-stone-950 text-xs'>$1,234</p>
                            </div>
                            <MdCalculate className='text-4xl text-right text-lime-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Visitors</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <HiMiniUserGroup className='text-4xl text-right text-green-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Total Products</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <MdOutlineProductionQuantityLimits className='text-4xl text-right text-emerald-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-slate-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>Top Selling Item</h3>
                                <p className='text-stone-950 text-xs'>1,234</p>
                            </div>
                            <FaStar className='text-4xl text-right text-yellow-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-xs-200 border border-teal-100 rounded-sm'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-sm'>DellerShip</h3>
                                <p className='text-stone-950 sky-sm'>1,234</p>
                            </div>
                            <MdAutoGraph className='text-4xl text-right text-amber-400' />
                        </div>
                    </div>
                </div>
            </div>
            {/* charts */}

         {/* <TopSellingProductChart></TopSellingProductChart> */}

        </div>
    );
};

export default AdninDashboard;