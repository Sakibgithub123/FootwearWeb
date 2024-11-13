import React from 'react';
import { GiButterflyFlower } from "react-icons/gi";
const SectionTitle = ({heading}) => {
    return (
        <div className='text-center my-10 '> 
           <div className='flex flex-row justify-center border-b-2 w-[400px] mx-auto border-orange-300 py-3 font-extrabold'>
           <GiButterflyFlower  className='text-3xl text-orange-300' /><h1 className='text-2xl text-orange-500'>----{heading}----</h1><GiButterflyFlower className=' text-orange-300' />
           </div>
            
        </div>
    );
};

export default SectionTitle;