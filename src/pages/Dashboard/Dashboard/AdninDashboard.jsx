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
            <div className='flex flex-row space-x-4 ml-3'>
                <div className='flex flex-row  gap-2 bg-emerald-100 items-center p-3 rounded-lg w-3/12 border border-green-400'>
                    <AiFillAccountBook className='text-emerald-400 text-4xl' />
                    <div className='text-emerald-950 text-left'>
                        <h3 className='text-lg'>Revenue</h3>
                        <p className='text-xs'>$ 2344</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2  items-center bg-rose-100  w-3/12 p-3 rounded-lg w-3/12 border border-rose-400'>
                    <AiFillCalculator className='text-rose-400 text-4xl' />
                    <div className='text-rose-950 text-left'>
                        <h3 className='text-lg'>Expense</h3>
                        <p className='text-xs'>$ 2344</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2  items-center bg-amber-100 border border-amber-400 w-3/12 p-3 rounded-lg w-3/12 border border-amber-400' >
                    <GiHappySkull className='text-amber-400 text-4xl' />
                    <div className='text-amber-950 text-left'>
                        <h3 className='text-lg'>Happy Clients</h3>
                        <p className='text-xs'>$ 2344</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2  items-center bg-cyan-100 w-3/12 p-3 rounded-lg w-3/12 border border-cyan-400'>
                    <AiFillBank className='text-cyan-400 text-4xl' />
                    <div className='text-cyan-950 text-left'>
                        <h3 className='text-lg'>New StoreOpen</h3>
                        <p className='text-xs'>$ 2344</p>
                    </div>
                </div>
            </div>
            {/* // tab */}
            <div role="tablist" className="tabs tabs-lifted my-10 ml-3 text-violet-400">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-stone-600" aria-label="Today" />
                <div role="tabpanel" className="tab-content bg-base-400 border-orange-400  rounded-box p-6">
                    <div className='grid grid-cols-3 gap-5 ml-3 my-3'>
                        <div className='flex flex-row p-4 justify-between  bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Customers</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <TbMan className='text-4xl text-right text-indigo-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Orders Total</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <IoCartSharp className='text-4xl text-right text-cyan-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Avg Sale</h3>
                                <p className='text-stone-950 text-base'>$1,234</p>
                            </div>
                            <LuPercent className='text-4xl text-right text-pink-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Avg Item Sale</h3>
                                <p className='text-stone-950 text-base'>$1,234</p>
                            </div>
                            <BiCalculator className='text-4xl text-right text-orange-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Avg Total Sale</h3>
                                <p className='text-stone-950 text-base'>$1,234</p>
                            </div>
                            <MdCalculate className='text-4xl text-right text-lime-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Visitors</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <HiMiniUserGroup className='text-4xl text-right text-green-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Total Products</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <MdOutlineProductionQuantityLimits className='text-4xl text-right text-emerald-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>TopSellingItem</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <FaStar className='text-4xl text-right text-yellow-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-teal-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>DellerShip</h3>
                                <p className='text-stone-950 sky-lg'>1,234</p>
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
                <div role="tabpanel" className="tab-content bg-base-100 border-orange-400 rounded-box p-6">
                    <div className='grid grid-cols-3 gap-5 ml-3 my-3'>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Customers</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <TbMan className='text-4xl text-right text-indigo-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Order</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <IoCartSharp className='text-4xl text-right text-cyan-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Avg Sale</h3>
                                <p className='text-stone-950 text-base'>$1,234</p>
                            </div>
                            <LuPercent className='text-4xl text-right text-pink-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Avg Item Sale</h3>
                                <p className='text-stone-950 text-base'>$1,234</p>
                            </div>
                            <BiCalculator className='text-4xl text-right text-orange-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Avg Total Sale</h3>
                                <p className='text-stone-950 text-base'>$1,234</p>
                            </div>
                            <MdCalculate className='text-4xl text-right text-lime-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Visitors</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <HiMiniUserGroup className='text-4xl text-right text-green-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Total Products</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <MdOutlineProductionQuantityLimits className='text-4xl text-right text-emerald-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Top Selling Item</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <FaStar className='text-4xl text-right text-yellow-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-teal-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>DellerShip</h3>
                                <p className='text-stone-950 sky-lg'>1,234</p>
                            </div>
                            <MdAutoGraph className='text-4xl text-right text-amber-400' />
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-stone-600" aria-label="Month" />
                <div role="tabpanel" className="tab-content bg-base-100 border-orange-400 rounded-box p-6">
                    <div className='grid grid-cols-3 gap-5 ml-3 my-3'>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Customers</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <TbMan className='text-4xl text-right text-indigo-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Order</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <div className='text-right'>
                                <IoCartSharp className='text-4xl text-right text-cyan-400' />
                            </div>
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Avg Sale</h3>
                                <p className='text-stone-950 text-base'>$1,234</p>
                            </div>
                            <LuPercent className='text-4xl text-right text-pink-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Avg Item Sale</h3>
                                <p className='text-stone-950 text-base'>$1,234</p>
                            </div>
                            <BiCalculator className='text-4xl text-right text-orange-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Avg Total Sale</h3>
                                <p className='text-stone-950 text-base'>$1,234</p>
                            </div>
                            <MdCalculate className='text-4xl text-right text-lime-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Visitors</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <HiMiniUserGroup className='text-4xl text-right text-green-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Total Products</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <MdOutlineProductionQuantityLimits className='text-4xl text-right text-emerald-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-slate-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>Top Selling Item</h3>
                                <p className='text-stone-950 text-base'>1,234</p>
                            </div>
                            <FaStar className='text-4xl text-right text-yellow-400' />
                        </div>
                        <div className='flex flex-row p-4 justify-between bg-base-200 border border-teal-100 rounded-lg'>
                            <div className='text-left'>
                                <h3 className='text-slate-500 text-lg'>DellerShip</h3>
                                <p className='text-stone-950 sky-lg'>1,234</p>
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