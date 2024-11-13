import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import bissaleImg from "../../../assets/img/bigsale/blog_1.jpg"
import { Link } from 'react-router-dom';
const BigSale = () => {
    return (
        <div>
            <SectionTitle heading={'Big Sale'}></SectionTitle>
            <div className='flex flex-row gap-5'>
                <div className='w-8/12'>
                    <img className='w-[600px] h-[400px]' src={bissaleImg} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center space-y-3 w-4/12'>
                    <h1 className='text-3xl text-orange-400'>50% less in all items</h1>
                    <p>September 3, 2018</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Quisquam iste dolor accusantium facere corporis ipsum animi 
                         deleniti fugiat. Ex, veniam?</p>
                         <Link to={'/shop'}><button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">Shop Now</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default BigSale;