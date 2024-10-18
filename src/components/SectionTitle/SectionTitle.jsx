import React from 'react';
import { GiButterflyFlower } from "react-icons/gi";
const SectionTitle = ({heading}) => {
    return (
        <div className='text-center my-16 '> 
           <div className='flex flex-row justify-center border-y-2 border-red-900 py-3'>
           <GiButterflyFlower  className='text-3xl font-black' /><h1 className='text-4xl font-black'>----{heading}----</h1><GiButterflyFlower />
           </div>
            
        </div>
    );
};

export default SectionTitle;